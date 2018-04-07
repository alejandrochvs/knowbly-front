<template>
  <div id="app">
    <image-marker></image-marker>
  </div>
</template>

<script>
  import ImageMarker from "./components/marker/image-marker";
  export default {
    name: 'app',
    components: {ImageMarker},
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style lang="scss">
  @import "assets/global";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
  }
</style>
