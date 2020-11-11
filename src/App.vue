<template>
  <div id="app" :class="{'app__dark' : isDark}">
    <template v-if="isDark">
      <Navigation dark>
        <ul>
          <li v-for="route in routes" :key="route.path">
            <router-link :to="route.path">{{ route.name }}</router-link>
          </li>
        </ul>
        <ul>
          <li>
            <router-link to="/vermietung">&rarr; Vermietung</router-link>
          </li>
        </ul>
      </Navigation>

      <main class="main__dark">
        <Loader v-show="isLoading()" />
        <router-view v-show="!isLoading()" />
      </main>

      <Footer v-show="!isLoading()">
        <ul>
          <li v-for="route in routes" :key="route.path">
            <router-link :to="route.path">{{ route.name }}</router-link>
          </li>
        </ul>
        <ul>
          <li>
            <router-link to="/vermietung">&rarr; Vermietung</router-link>
          </li>
        </ul>
      </Footer>

      <CookieNotice />
    </template>

    <template v-else>
      <Navigation>
        <ul>
          <li v-for="route in routes" :key="route.path">
            <router-link :to="route.path">{{ route.name }}</router-link>
          </li>
        </ul>
        <ul>
          <li>
            <router-link to="/vermietung">&rarr; Vermietung</router-link>
          </li>
        </ul>
      </Navigation>

      <main>
        <Loader v-show="isLoading()" />
        <router-view v-show="!isLoading()" />
      </main>

      <Footer v-show="!isLoading()">
        <ul>
          <li v-for="route in routes" :key="route.path">
            <router-link :to="route.path">{{ route.name }}</router-link>
          </li>
        </ul>
        <ul>
          <li>
            <router-link to="/vermietung">&rarr; Vermietung</router-link>
          </li>
        </ul>
      </Footer>

      <CookieNotice />
    </template>
  </div>
</template>

<script>
import utils from './utils/index'
import Navigation from './components/Navigation'
import Loader from './components/Loader'
import Footer from './components/Footer'
import CookieNotice from './components/CookieNotice'

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
      isDark: undefined
    }
  },
  methods: {
    isLoading: function () {
      return this.$store.state.loading;
    }
  },
  created() {
    this.$router.options.routes.forEach(route => {
      if (route.name) { 
        this.routes.push({
            name: route.name,
            path: route.path
        });
      } 
    });
  },
  watch: {
    $route() {
      this.isDark = this.$router.currentRoute.path.includes('/vermietung');

      if (utils.cookie.get('cookie-acceptance') === '1') {
        this.$ga.enable();
      }
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
  overflow-x: hidden;
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
