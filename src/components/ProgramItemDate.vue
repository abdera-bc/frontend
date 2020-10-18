<template>
  <div class="programm__item__date">
    <span class="tex--subline">{{ weekday }}</span>
    <div class="programm__item__date__container frame-br">
      <h1>{{ day }}.</h1>
    </div>
    <span v-if="month" class="tex--subline">{{ month }}</span>
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
  margin-top: 7px;
  margin-bottom: 10px;
  width: 49px;
  height: 49px;
  background-color: $white;
  text-align: center;

  h1 {
    line-height: 45px;
  }
}
</style>