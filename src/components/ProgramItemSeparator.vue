<template>
  <div class="programm__item__separator base-grid sticky-top">
    <p class="content">
      {{ month }} {{ year }} &darr;
    </p>
  </div>
</template>

<script>
export default {
  name: 'ProgramItemSeparator',
  props: {
    month: String,
    year: String
  }
}
</script>

<style lang="scss">
.programm__item__separator {
  background-color: var(--black);
  transform: translateY(-2px);
  transition: all .15s ease-in;
  z-index: 1;

  .content {
    line-height: 30px;
    @include font(subline);
    text-transform: none;
    color: var(--white);
  }
}
</style>