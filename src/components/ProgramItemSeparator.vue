<template>
<div class="programm__item__separator--placeholder">
  <div class="programm__item__separator base-grid">
    <div class="content">
      {{ month }} {{ year }} &darr;
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ProgramItemSeparator',
  props: {
    month: String,
    year: String
  },
  mounted () {
    document.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    document.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll () {
      if (window.scrollY > this.$el.offsetTop) {
        this.$el.children[0].classList.add('programm__item__separator--sticky');
      } else {
        this.$el.children[0].classList.remove('programm__item__separator--sticky');
      }
    }
  }
}
</script>

<style lang="scss">
.programm__item__separator {
  position: relative;
  height: 30px;
  @include font(subline);
  text-transform: none;
  background-color: var(--black);
  color: var(--white);
  line-height: 30px;
  transform: translateY(-2px);
  z-index: 5;
  transition: all .15s ease-in;

  &--placeholder {
    position: relative;
    width: 100%;
    height: 30px;
  }

  &--sticky {
    position: fixed;
    top: 52px;
    width: 100%;
    max-width: map-get($breakpoints, 'large');
  }
}
</style>