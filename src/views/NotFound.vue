<template>
  <div class="not-found">
    <div class="not-found__container">
      <div class="not-found__image"></div>
      <h1>404</h1>
      <h2>
        <router-link to="/">Zurück zur Startseite</router-link>
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  mounted() {
    this.$store.commit('isLoading', false);
  }
}
</script>

<style lang="scss">
.not-found {
  position: relative;
  height: calc(100vh - 50px);

  &__container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    h1 {
      text-align: center;
      margin-bottom: 20px;
    }
  }

  &__image {
    position: relative;
    height: 100px;
    width: 100px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 100px;
    background: url('../assets/images/error.png') center no-repeat;
    background-size: cover;
    margin-bottom: 50px;
  }
}
</style>
