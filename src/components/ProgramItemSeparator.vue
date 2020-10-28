<template>
  <div class="programm__item__separator base-grid">
    <div class="content">
      {{ month }} {{ year }} &darr;
    </div>
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
  top: 0;
  position: sticky;
  position: -webkit-sticky;
  @include font(subline);
  text-transform: none;
  background-color: $black;
  color: $white;
  line-height: 30px;
  height: 30px;
  transform: translateY(-2px);
}
</style>