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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50px;
  padding: 5px;
  margin-top: -7px;
  background-color: var(--white);

  span {
    position: relative;
    display: inline-block;
    @include font('subline');
    line-height: 1em;

    &:last-child {
      
      margin-top: 10px;
    }
  }

  h1 {
    margin-top: 10px;
  }
}
</style>