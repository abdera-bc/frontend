
<template>
  <div class="important full base-grid">
    <div class="important__image full">
      <img width="1280" height="600" :src="content.image" alt="Background Image" loading="lazy">
    </div>
    <div class="important__wrapper content">
      <div class="important__title">
        <Headline :title="content.title" frame="br"/>
      </div>
      <div class="important__content">
        <p class="frame-bl">
          <span class="rendered_content" v-html="content.content"></span>
          <Tag v-if="linkExists" class="important__content__link" :content="content.link.title" :url="content.link.url"/>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Headline from '@/components/general/Headline'
import Tag from '@/components/Tag'

export default {
  name: 'Important',
  components: {
    Headline,
    Tag
  },
  props: {
    content: Object
  },
  computed: {
    linkExists: function () {
      return this.content.link.title && this.content.link.url;
    }
  }
}
</script>

<style scoped lang="scss">
.important {
  position: relative;

  &__image {
    position: absolute;
    width: 100%;
    height: 100%;
    max-height: 600px;
    z-index: 1;

    img {
      width: 100%;
      object-fit: cover;
      vertical-align: middle;
    }
  }

  &__wrapper {
    position: relative;
    margin-top: 400px;
    padding: 0 var(--contentSpacingWidth);
    z-index: 1;
  }

  &__title {
    transform: translateX(calc(var(--contentSpacingWidth) * -1));
  }

  &__content {
    p {
      padding: 30px var(--contentSpacingWidth);

      &:before {
        background-color: var(--white);
      }
    }

    &__link {
      width: 100%;
      text-align: right;
      display: inline-block;
    }
  }
}
</style>
