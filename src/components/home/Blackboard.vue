<template>
  <div class="blackboard full base-grid">
    <div class="blackboard__wrapper content ">
      <div class="blackboard__title text--subline">Aktuell</div>
      <ul class="frame-bl">
        <li v-for="entry in entries" :key="entry.home_blackboard_title">
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
    entries: Array,
    area: Object
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
    padding: 0 20px;

    @include breakpoint('medium') {
      padding: var(--contentSpacingHeight) var(--contentSpacingWidth);
    }

    li {
      list-style: none;

      &:not(:last-child) {
        border-bottom: 2px solid var(--white);
      }

      h1 {
        margin: var(--textSpacingHeight) 0;
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
