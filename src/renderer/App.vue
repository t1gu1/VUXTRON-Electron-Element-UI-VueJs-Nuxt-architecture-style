<template>
  <div id="app">
    <vue-extend-layouts />
  </div>
</template>

<script>
  import VueExtendLayouts from 'vue-extend-layout'
  export default {
    name: 'app',
    components: { VueExtendLayouts }
  }
</script>

<style lang="scss">
  // Global scss
  @import "@/assets/scss/main.scss";
</style>
