<template>
  <div id="app" :class="{'app__dark' : isDark}">
    <Navigation :dark="isDark">
      <ul>
        <template v-for="route in routes">
          <li v-if="!excludeRoutes(route.name)" :key="route.path">
            <router-link :to="route.path">{{ route.name }}</router-link>
          </li>
        </template>
      </ul>
      <ul>
        <li>
          <router-link to="/vermietung">&rarr; Booking & Mieten</router-link>
        </li>
      </ul>
    </Navigation>

    <main :class="{'main__dark' : isDark}">
      <Loader v-show="isLoading()" />
      <router-view v-show="!isLoading()" />
    </main>

    <Footer v-show="!isLoading()">
      <ul>
        <template v-for="route in routes">
          <li v-if="!excludeRoutes(route.name)" :key="route.path">
            <router-link :to="route.path">{{ route.name }}</router-link>
          </li>
        </template>
      </ul>
      <ul>
        <li>
          <router-link to="/vermietung">&rarr; Booking & Mieten</router-link>
        </li>
      </ul>
    </Footer>

    <CookieNotice />
  </div>
</template>

<script>
import utils from './utils/index'
import Navigation from './components/main/Navigation'
import Loader from './components/main/Loader'
import Footer from './components/main/Footer'
import CookieNotice from './components/main/CookieNotice'

export default {
  components: {
    Navigation,
    Loader,
    Footer,
    CookieNotice
  },
  data () {
    return {
      pages: null,
      routes: [],
      isDark: undefined,
      cookie: null
    }
  },
  methods: {
    isLoading: function () {
      return this.$store.state.loading;
    },
    tracking () {
      this.cookie = utils.cookie.get('cookie-acceptance');

      if (this.cookie === '1') {
        this.$ga.page(this.$route.path);
      }
    },
    excludeRoutes: function (route) {
      const excludedRoutes = [
        '404'
      ]

      return excludedRoutes.includes(route);
    }
  },
  created() {
    this.cookie = utils.cookie.get('cookie-acceptance');

    this.$router.options.routes.forEach(route => {
      if (route.name) { 
        this.routes.push({
            name: route.name,
            path: route.path
        });
      } 
    });

    if (this.cookie === '1') {
      this.$ga.enable();
      this.tracking();
    }

    const isInStandaloneMode = () =>
      (window.matchMedia('(display-mode: standalone)').matches) || (window.navigator.standalone) || document.referrer.includes('android-app://');

    if (isInStandaloneMode()) {
        console.log("webapp is installed")
    }
  },
  watch: {
    $route() {
      this.isDark = this.$router.currentRoute.path.includes('/vermietung');
      this.tracking();
    }
  }
}
</script>

<style lang="scss">
#app {
  position: relative;
  z-index: -1;

  &.app__dark {
    background-color: #030303;
  }

  main {
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  min-height: calc(100vh - 50px);
  box-shadow: 0 5px 100px 0px #f3f3f3;
  background-color: var(--white);
  z-index: -1;

  &.main__dark {
    --black: #ffffff;
    --white: #000000;
    box-shadow: none;
  }
}
}
</style>
