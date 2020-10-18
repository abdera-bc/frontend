<template>
  <div class="blackboard full-width base-grid">
    <div class="blackboard__wrapper content-width ">
      <div class="blackboard__title text--subline">News</div>
      <ul class="frame-bl">
        <li v-for="entry in entrys.slice(0)" :key="entry.home_blackboard_title">
          <div>
            <h1>{{ entry.home_blackboard_title }}</h1>
            <div class="rendered-content not-indented" v-html="entry.home_blackboard_content"></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blackboard',
  props: {
    entrys: Array
  }
}
</script>

<style scoped lang="scss">
.blackboard {
  background-color: $black;
  color: $white;
  padding: 100px 0;
  z-index: 1;

  &__title {
    margin-bottom: 30px;
    text-decoration: underline;
  }

  &__wrapper {
    position: relative;
    padding: 0 30px;
  }

  ul {
    background-color: $black;
    border-color: $white;
    padding: 50px 30px;

    li {
      list-style: none;

      h1 {
        margin-bottom: 50px;
      }
    }

    &::before {
      border-color: $white;
      z-index: -1;
    }
  }
}
</style>
