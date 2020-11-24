
<template>
  <div class="important full base-grid">
    <div class="important__image full">
      <img width="1280" height="600" :src="image" alt="Background Image">
    </div>
    <div class="important__wrapper content medium-right">
      <div class="important__title">
        <Headline :title="title" frame="br"/>
      </div>
      <div class="important__content">
        <p class="frame-bl">
          <span class="rendered_content" v-html="content"></span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Headline from '@/components/general/Headline'

export default {
  name: 'Important',
  components: {
    Headline
  },
  props: {
    title: String,
    content: String,
    image: String
  }
}
</script>

<style scoped lang="scss">
.important {
  &__image {
    position: relative;
    z-index: 1;

    img {
      width: 100%;
      min-height: 500px;
      max-height: 600px;
      object-fit: cover;
      vertical-align: middle;
    }
  }

  &__wrapper {
    position: relative;
    margin-top: -50%;
    z-index: 1;

    @include breakpoint('medium') {
      margin-top: -100%;
      padding: 0;
    }
  }

  &__title {
    @include breakpoint('medium') {
      position: absolute;
      transform: translate(-100px, -80px);
    }
  }

  &__content {
    padding: 0 var(--contentSpacingWidth);

    @include breakpoint(medium) {
      padding: 0;
    }

    p {
      padding: 30px var(--contentSpacingWidth);

      &:before {
        background-color: var(--white);
      }
    }
  }
}
</style>
