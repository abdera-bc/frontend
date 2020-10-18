<template>
  <div id="app">
    <Navigation>
      <ul>
        <li v-for="route in routes" :key="route.path">
          <router-link :to="route.path">{{ route.name }}</router-link>
        </li>
      </ul>
      <ul>
        <li>
          <router-link to="/booker">&rarr; Mieten</router-link>
        </li>
      </ul>
    </Navigation>
    <main>
      <Loader v-show="isLoading()" />
      <router-view v-show="!isLoading()" />
    </main>
    <Footer v-show="!isLoading()" />
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import Loader from './components/Loader'
import Footer from './components/Footer'

export default {
  components: {
    Navigation,
    Loader,
    Footer
  },
  data () {
    return {
      pages: null,
      routes: []
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
    })
  }
}
</script>

<style lang="scss">
main {
  min-height: calc(100vh - 50px);
  overflow-x: hidden;
}
</style>
