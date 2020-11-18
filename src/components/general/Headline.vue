<template>
  <h1 class="headline" :class="this.selectFrame">
    {{ title }}
  </h1>
</template>

<script>
export default {
  name: 'Headline',
  props: {
    title: String,
    frame: String
  },
  computed: {
    selectFrame: function() {
      return {
        br: 'frame-br',
        bl: 'frame-bl'
      }[this.frame];
    }
  }
}
</script>

<style lang="scss">
  .headline {
    display: inline-block;
    padding: 12px;

    &:before {
      background-color: var(--white);
    }
  }
</style>