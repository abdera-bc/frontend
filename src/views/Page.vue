<template>
  <div v-if="page" class="page base-grid">
    <div class="page__image full">
      <img v-if="page.image" :src="page.image">
    </div>
    <div class="page__title content">
      <div v-if="page.subtitle" class="page__title__subline frame-br">
          <h1 v-html="page.subtitle"></h1>
      </div>
      <div class="page__title__headline frame-br">
          <h1 v-if="page.title" v-html="page.title"></h1>  
          <h1 v-else>{{ page.wp_title }}</h1>
      </div>
    </div>
    <div class="page__content content">
      <div class="rendered-content" v-html="page.content"></div>
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
        .then(res => this.page = utils.map.page(res[0]))
        .then(this.$store.commit('isLoading', false))
    }
  },
  mounted: function () {
    this.getContent(this.$route.path.substr(this.$route.path.lastIndexOf('/') + 1));
  },
  watch: {
    $route() {
      this.getContent(this.$route.path.substr(this.$route.path.lastIndexOf('/') + 1));
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
    top: -50%;

    &__headline {
      display: inline-block;
      padding: 12px;
      background-color: var(--white);
      
      h1 {
        line-height: 1.5rem;

        @include breakpoint('medium') {
          @include font('title');
        }
      }

      &::before {
        background-color: var(--white);
      }
    }

    &__subline {
      position: absolute;
      display: inline-block;
      padding: 12px;
      right: 60px;
      background-color: var(--white);
      margin-top: -150px;

      h1 {
        line-height: 1.5rem;

        @include breakpoint('medium') {
          @include font('title');
        }
      }

      @include breakpoint('medium') {
        right: 60px;
        margin-top: -150px;
      }

      &::before {
        background-color: var(--white);
      }
    }
  }

  &__content {
    &__tags {
      padding: 20px var(--contentSpacingWidth) 0 var(--contentSpacingWidth);
    }
  }
}
</style>