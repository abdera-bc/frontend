<template>
  <div class="programm__item__date">
    <div class="programm__item__date__container frame-br">
      <span class="tex--subline">{{ weekday }}</span>
      <h1>{{ day }}.</h1>
      <span v-if="month" class="tex--subline">{{ month }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgramItemDate',
  props: {
    weekday: String,
    day: String,
    month: String
  }

}
</script>

<style lang="scss">
.programm__item__date__container {
  position: relative;
  width: 49px;
  margin-bottom: 10px;
  padding: 5px;
  background-color: $white;

  h1 {
    margin-top: -2px;
  }
}
</style>