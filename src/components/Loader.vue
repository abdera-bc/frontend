
<template>
  <div class="loader"></div>
</template>

<script>
export default {
  name: 'Loader'
}
</script>

<style lang="scss">
.loader {
  position: absolute;
  height: 2px;
  width: 0%;
  height: 2px;
  top: 50vh;
  left: 50%;
  background-color: var(--black);
  transform: translate(-50%, -50%);

  animation: loading 2s linear infinite;
}

@keyframes loading {
  0% {
    width: 2px;
    height: 40px;
  }
  50% {
    width: 40px;
    height: 2px;
  }
  100% {
    width: 2px;
    height: 40px;
  }

}
</style>