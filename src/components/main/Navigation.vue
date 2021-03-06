<template>
  <div class="navigation" :class="{'navigation--dark' : dark}">
    <div class="navigation__main--grid base-grid">
      <div class="navigation__main content large-full">
        <div class="navigation__main__logo--wrapper">
          <router-link to="/">
            <div class="navigation__main__logo">
              <img width="300" height="24" src="@/assets/symbols/abdera-logo.svg" alt="Kulturhalle Abdera Biberach – Logo">
            </div>
          </router-link>
        </div>
        <div 
          @click="showMenu = !showMenu;" 
          class="navigation__main__hamburger transition" 
          :class="{'rotate-90 navigation__main__hamburger--open': showMenu}">
        </div>
        <transition name="toggleMobileMenu">
          <nav id="nav" @click="evalClick" v-if="showMenu" class="navigation__main__container--grid base-grid">
            <div class="navigation__main__container full medium-right-border base-grid">
              <div class="navigation__main__container--distributor content medium-full">
                <slot class="content"></slot>
              </div>
            </div>
          </nav>
        </transition>
      </div>
    </div>
    <transition name="toggleMenuBackButton">
      <div v-if="this.$route.path.includes('/event/')" class="navigation__optional__container">
        <div class="navigation__optional--grid base-grid">
          <div v-on:click="goBack()" class="navigation__optional content large-full">
            &larr; Übersicht
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    dark: Boolean
  },
  data: function () {
    return {
      showMenu: false
    }
  },
  methods: {
    goBack: function () {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/programm');
    },
    evalClick: function (e) {
      const isSamePage =
        e.target.baseURI === window.location.href 
        && e.target.localName === 'a';

      if (e.target.id === 'nav' || isSamePage) {
        this.showMenu = false;
        return;
      }
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
  background-color: var(--white);
  z-index: 100;
  -webkit-backface-visibility: hidden;
  border-bottom: 2px solid var(--black);

  .navigation__main__logo {
    position: relative;
    height: 100%;
    padding: 13px 0;

    img {
      height: 100%;
      width: auto;
      object-fit: contain;
      object-position: 0 0;
      vertical-align: middle;
    }

    @include breakpoint('large') {
      padding-left: 15px;
    }
  }

  .navigation__main__hamburger {
    display: flex;
    justify-content: center;
    height: 100%;
    width: $mainMenuHeight;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    
    &::after {
      content: '';
      background: url('../../assets/symbols/hamburger.svg') center 2px no-repeat;
      display: block;
      align-self: center;
      width: 20px;
      height: 20px;
    }
  }

  .navigation__main__hamburger--open {
    &::after {
      content: '';
      background: url('../../assets/symbols/close.svg') center 2px no-repeat;
      display: block;
      align-self: center;
      width: 20px;
      height: 20px;
    }
  }

  &__main {
    height: $mainMenuHeight;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &--grid {
      margin: 0 auto;
      max-width: 1280px;
    }

    &__container--grid {
      position: absolute;
      width: 100%;
      height: calc(100vh - 50px);
      height: calc(var(--vh, 1vh) * 100 - 50px);
      top: $mainMenuHeight;
      left: 0;

      @include breakpoint('medium') {
        position: absolute;
        max-width: 1280px;
        margin: 0 auto;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    &__container {
      height: 100%;
      background-color: var(--black);

      &--distributor {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px 0;

        @include breakpoint('medium') {
          padding: 20px;
        }
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

          &:hover::before {
            background-color: var(--white);
          }

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
            border: 2px solid var(--white);
            box-sizing: border-box;
            z-index: -1;

            transition: all .15s ease-in;
          }

          a {
            position: relative;
            display: inline-block;
            padding: 12px 33px;
            width: 100%;
            background-color: var(--black);
            color: var(--white);
            border: 2px solid var(--white);
          }
        }
      }
    }
  }

  &__optional {
    @include font(subline);
    text-transform: none;
    color: var(--white);
    line-height: 30px;
    padding-top: 1px;

    @include breakpoint('large') {
      padding-left: 15px;
    }

    &__container {
      background-color: var(--black);
      height: 30px;
      transform-origin: top;
      cursor: pointer;
    }

    &--grid {
      margin: 0 auto;
      max-width: 1280px;
    }
  }

  &--dark {
    --black: #ffffff;
    --white: #000000;

    .navigation__main {
      
      &__logo {
        img {
          filter: invert(100%);
        }
      }

      &__hamburger {
        &::after {
          background: url('../../assets/symbols/hamburger-white.svg') center 2px no-repeat !important;
        }
      }

      &__hamburger--open {
        &::after {
          background: url('../../assets/symbols/close-white.svg') center 2px no-repeat !important;
        }
      }

      &__container {
        --black: #000000;
        --white: #ffffff;
      }
    }
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

  @include breakpoint('medium') {
    transform: translateY(10%) translateX(-50%);
  }
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
