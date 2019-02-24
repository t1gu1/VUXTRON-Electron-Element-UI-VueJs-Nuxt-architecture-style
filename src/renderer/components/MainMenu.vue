<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">

    <el-menu-item index="/">Home</el-menu-item>
    <el-menu-item index="/about">About</el-menu-item>
    <el-menu-item index="/system">System</el-menu-item>
    
    <el-submenu index="">
      <template slot="title">Fake for demo</template>
      <el-menu-item index="">item one</el-menu-item>
      <el-menu-item index="">item two</el-menu-item>
      <el-menu-item index="">item three</el-menu-item>
      <el-submenu index="fake">
        <template slot="title">item four</template>
        <el-menu-item index="fake">item one</el-menu-item>
        <el-menu-item index="fake">item two</el-menu-item>
        <el-menu-item index="fake">item three</el-menu-item>
      </el-submenu>
    </el-submenu>

  </el-menu>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      // mix the getters into computed with object spread operator
      ...mapGetters("menu", {
          activeIndex: 'activeIndex'
        // ...
      })
    }, 

    mounted() {
      //
    },

    data() {
      return {
        any: null
      } 
    },

    methods: {
      ...mapActions('menu', {
          changeIndex: 'changeIndex'
        // ...
      }),
      handleSelect(key, keyPath) {
        if(key === "" || key === "fake") return false       
        // ! A watcher is in the App.vue to dispatch route change cause, route change can happend from link in a page
        this.$router.push(key)
      }
    }
  }
</script> 

<style lang="scss">
  //
</style>