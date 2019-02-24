<template>
  <el-container>

    <el-header>
      <main-menu />
    </el-header>

    <el-main>
      <h1>Default Layout</h1>
      <router-view/>
    </el-main>

  </el-container>
</template>

<script>
  import MainMenu from "@/components/MainMenu";
  export default {

    components: {
      MainMenu
    },

  }
</script> 

<style lang="scss" scoped>
  //
  .el-header {
    padding: 0!important;
  }
</style>