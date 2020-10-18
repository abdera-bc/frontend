<template>
  <div v-if="page" class="page base-grid">
    <div class="page__image full-width">
      <img v-if="page.page_image" :src="page.page_image">
    </div>
    <div class="page__title content-width">
      <div v-if="page.page_subtitle" class="page__title__subline frame-br">
          <h1 v-html="page.page_subtitle"></h1>
      </div>
      <div class="page__title__headline frame-br">
          <h1 v-if="page.page_title" v-html="page.page_title"></h1>  
          <h1 v-else>{{ page.title.rendered }}</h1>
      </div>
    </div>
    <div class="page__content content-width">
      <div class="rendered-content" v-html="page.content.rendered"></div>
    </div>
  </div>
</template>

<script>
import utils from '../utils'

export default {
  name: 'Page',
  data: function() {
    return {
      page: null
    }
  },
  methods: {
    getContent: function (slug) {
      this.$store.commit('isLoading', true);
      utils.get.content('pages?slug=' + slug)
      .then(res => this.page = res[0])
      .then(this.$store.commit('isLoading', false))
    }
  },
  mounted: function () {
    this.getContent(this.$route.path.match(/[^/].*/i));
  },
  watch: {
    $route() {
      this.getContent(this.$route.path.match(/[^/].*/i));
    }
  }
}
</script>

<style lang="scss">
.page {
  position: relative;
  width: 100%;

  &__image {
    min-height: 50px;
    z-index: -1;

    img {
      height: calc(100vh - 200px);
      width: 100%;
      object-fit: cover;
    }
  }

  &__title {
    position: relative;

    &__headline {
      display: inline-block;
      padding: 12px;
      background-color: $white;
      margin-top: -50px;
      
      h1 {
        line-height: 1.5rem;
      }

      &::before {
        background-color: $white;
      }
    }

    &__subline {
      position: absolute;
      display: inline-block;
      padding: 12px;
      right: 60px;
      background-color: $white;
      margin-top: -150px;

      h1 {
        line-height: 1.5rem;
      }

      &::before {
        background-color: $white;
      }
    }
  }

  &__content {
    padding-bottom: 20px;

    &__tags {
      padding: 20px 30px 0 30px;
    }
  }
}
</style>