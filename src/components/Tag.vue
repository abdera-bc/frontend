<template>
  <a class="tag" :class="{'tag__link' : url || button, 'tag--light' : dark}" :href="url">
      <span v-if="url">&rarr;</span>
      <span v-if="button">&darr;</span>
      {{ content.charAt(0).toUpperCase() + content.slice(1) }}
  </a>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    content: String,
    url: String,
    button: Boolean,
    dark: Boolean
  }
}
</script>

<style lang="scss">
  .tag {
    display: inline-block;
    padding: 0 20px;
    margin-right: 10px;
    border-radius: 30px;
    border: 1px solid $black;
    @include font(subline);
    line-height: 19px;
    text-transform: none;

    &__link {
      padding: 0 20px 0 15px;
      color: $white;
      background-color: $black;
      text-transform: none;
      line-height: 19px;
    }

    &--light {
      border: 1px solid $white;
    }
  }
</style>