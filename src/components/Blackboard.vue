<template>
  <div class="blackboard full base-grid">
    <div class="blackboard__wrapper content ">
      <div class="blackboard__title text--subline">News</div>
      <ul class="frame-bl">
        <li v-for="entry in entrys.slice(0, 1)" :key="entry.home_blackboard_title">
          <div>
            <h1>{{ entry.home_blackboard_title }}</h1>
            <div class="rendered-content rendered-content--tight rendered-content--onBlack not-indented" v-html="entry.home_blackboard_content"></div>
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
  background-color: var(--black);
  padding: var(--containerSpacingHeight) 0;
  z-index: 1;

  &__title {
    margin-bottom: 30px;
    color: var(--white);
    text-decoration: underline;
  }

  &__wrapper {
    position: relative;
    padding: 0 var(--contentSpacingWidth);
  }

  ul {
    background-color: var(--black);
    border-color: var(--white);
    padding: 50px var(--contentSpacingWidth) 20px var(--contentSpacingWidth);

    li {
      list-style: none;

      h1 {
        margin-bottom: 50px;
        color: var(--white);
      }
    }

    &::before {
      border-color: var(--white);
      z-index: -1;
    }
  }
}
</style>
