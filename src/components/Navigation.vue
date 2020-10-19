<template>
  <div class="navigation">
    <div class="base-grid navigation__main--grid">
      <div class="navigation__main content-width">
        <div class="logo__wrapper">
          <router-link to="/">
            <div class="navigation__main__logo">ABDERA</div>
          </router-link>
        </div>
        <div 
          @click="showMenu = !showMenu;" 
          class="navigation__main__hamburger transition" 
          :class="{'rotate-90 navigation__main__hamburger--open': showMenu}">
        </div>
        <transition name="toggleMobileMenu">
          <nav v-if="showMenu" class="navigation__main__container base-grid">
            <div @click="showMenu = false" class="navigation__main__container--distributor content-width">
              <slot class="content-width"></slot>
            </div>
          </nav>
        </transition>
      </div>
    </div>
    <transition name="toggleMenuBackButton">
      <div v-if="this.$route.path.includes('/event/')" class="base-grid navigation__optional--grid">
        <div v-on:click="goBack()" class="navigation__optional content-width">
          &larr; Übersicht
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data: function () {
    return {
      showMenu: false
    }
  },
  methods: {
    goBack: function () {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/programm');
    }
  },
  watch: {
    $route () {
      this.showMenu = false;
    },
    showMenu: function () {
      document.documentElement.style.overflowY = this.showMenu ? 'hidden' : 'scroll';
    }
  }
}
</script>

<style lang="scss">
.navigation {
  position: sticky;
  top: 0;
  left: 0;
  background-color: $white;
  z-index: 100;
  -webkit-backface-visibility: hidden;

  .navigation__main__logo {
    display: flex;
    justify-content: space-between;
    height: 100%;
    @include font(headline);
    text-align: center;
    font-size: 14px;
    letter-spacing: 0.2rem;
    line-height: $mainMenuHeight;
    color: $black;
    
    &::before {
      content: '';
      display: block;
      align-self: center;
      width: 23px;
      height: 23px;
      margin-right: 15px;
      border-radius: 50%;
      background-color: $black;
    }
  }

  .navigation__main__hamburger {
    display: flex;
    justify-content: center;
    height: 100%;
    width: $mainMenuHeight;
    text-align: center;
    
    &::after {
      content: '';
      background: url('../assets/symbols/hamburger.svg') center 2px no-repeat;
      display: block;
      align-self: center;
      width: 18px;
      height: 18px;
    }
  }

  .navigation__main__hamburger--open {
    &::after {
      content: '';
      background: url('../assets/symbols/close.svg') center 2px no-repeat;
      display: block;
      align-self: center;
      width: 18px;
      height: 18px;
    }
  }

  &__main {
    height: $mainMenuHeight;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &--grid {
      border-bottom: 2px solid $black;
    }

    &__container {
      position: absolute;
      width: 100%;
      height: calc(100vh - 50px);
      height: calc(var(--vh, 1vh) * 100 - 50px);
      top: $mainMenuHeight;
      left: 0;
      background-color: $black;

      &--distributor {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px 0;
      }

      ul {
        position: relative;
        padding: 0;
        margin: 0;

        li {
          position: relative;
          display: block;
          list-style: none;
          @include font(headline);
          font-family: 'WorkSansRegular';
          z-index: 1;

          &:not(:first-child) {
            margin-top: 20px;
          }

          &::before {
            content: '';
            position: absolute;
            display: block;
            top: 5px;
            left: 5px;
            height: 100%;
            width: 100%;
            border: 2px solid $white;
            box-sizing: border-box;
            z-index: -1;
          }

          a {
            position: relative;
            display: inline-block;
            padding: 12px 33px;
            width: 100%;
            background-color: $black;
            color: $white;
            border: 2px solid $white;
          }
        }
      }
    }
  }

  &__optional--grid {
    @include font(subline);
    text-transform: none;
    background-color: $black;
    color: $white;
    height: 30px;
    line-height: 30px;
    transform-origin: top;
    overflow: hidden;
  }
}

.toggleMobileMenu-enter-active, 
.toggleMobileMenu-leave-active {
  transition: all .15s ease-in-out;
}

.toggleMobileMenu-enter,
.toggleMobileMenu-leave-to {
  transform: translateY(10%);
  opacity: 0.5;
}

.toggleMenuBackButton-enter-active, 
.toggleMenuBackButton-leave-active {
  transition: all .3s ease-in-out;
  transition-delay: .1s;
}

.toggleMenuBackButton-enter,
.toggleMenuBackButton-leave-to {
  height: 0px;
}


</style>
