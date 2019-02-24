<template>
  <el-container>

    <el-header>
      <main-menu />
    </el-header>

    <el-main>
      <h1>About Layout !!!!!!!!!!!!!</h1>
      <router-view/>
      <h2>Footer</h2>
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

<style lang="scss">
  //
  .el-header {
    padding: 0;
  }
</style>