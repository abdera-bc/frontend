<template>
  <span>
    <a v-if="url" class="tag transition" :class="{'tag__link' : url || button || icon, 'tag--light' : dark}" :href="url">
        <span v-if="url">&rarr;</span>
        <span v-if="button">&darr;</span>
        <span v-if="icon" v-html="icon"></span>
        {{ content.charAt(0).toUpperCase() + content.slice(1) }}
    </a>
    <span v-else class="tag transition" :class="{'tag__link' : url || button || icon, 'tag--light' : dark}">
        <span v-if="url">&rarr;</span>
        <span v-if="button">&darr;</span>
        <span v-if="icon" v-html="icon"></span>
        {{ content.charAt(0).toUpperCase() + content.slice(1) }}
    </span>
  </span>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    content: String,
    url: String,
    icon: String,
    button: Boolean,
    dark: Boolean
  }
}
</script>

<style lang="scss">
  .tag {
    display: inline-block;
    padding: 0 20px;
    margin: 12px 10px 12px 0;
    border-radius: 30px;
    border: 1px solid var(--black);
    @include font(subline);
    line-height: 22px;
    text-transform: none;

    &__link {
      padding: 0 20px 0 15px;
      color: var(--white);
      background-color: var(--black);
      text-transform: none;
      line-height: 22px;
      cursor: pointer;

      &:hover {
        color: var(--black);
        background-color: var(--white);

        span {
          color: var(--black);
        }
      }
    }

    &--light {
      border: 1px solid var(--white);
      background-color: transparent;
    }
  }
</style>