<template>
  <div id="app">
    <vue-extend-layouts />
  </div>
</template>

<script>
  import VueExtendLayouts from 'vue-extend-layout'
  
  export default {
    name: 'app',
    components: { VueExtendLayouts },

    watch:{
      $route (to, from){
        this.$store.dispatch('menu/changeIndex', {activeIndex: to.path})
      }
    },
  }
</script>
 