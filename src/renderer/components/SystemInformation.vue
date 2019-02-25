<template>
  <div>
    <div class="title">Informations</div>
    <div class="items">
      <div class="item">
        <div class="name">Route Path:</div>
        <div class="value">{{ path }}</div>
      </div>
      <div class="item">
        <div class="name">Route Name:</div>
        <div class="value">{{ name }}</div>
      </div>
      <div class="item">
        <div class="name">Vue.js version:</div>
        <div class="value">{{ vue }}</div>
      </div>
      <div class="item">
        <div class="name">Electron version:</div>
        <div class="value">{{ electron }}</div>
      </div>
      <div class="item">
        <div class="name">Node version:</div>
        <div class="value">{{ node }}</div>
      </div>
      <div class="item">
        <div class="name">Platform:</div>
        <div class="value">{{ platform }}</div>
      </div>

      <h2>That part is different on Build. Test it!</h2>
      <div class="item">
        <div class="name">Project directory (Full path):</div>
        <div class="value">{{ projectDir }}</div>
      </div>
      <div class="item">
        <div class="name">Component directory (absolute):</div>
        <div class="value">{{ absoluteDir }}</div>
      </div>
      <div class="item">
        <div class="name">Component directory (relative):</div>
        <div class="value">{{ relativeDir }}</div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        electron: !process.env.IS_WEB ? process.versions.electron : "",
        name: this.$route.name,
        node: !process.env.IS_WEB ? process.versions.node : "",
        path: this.$route.path,
        platform: !process.env.IS_WEB ? require('os').platform() : "",
        vue: !process.env.IS_WEB ? require('vue/package.json').version : "",
        projectDir: !process.env.IS_WEB ? require('path').resolve("./"): "", 
        relativeDir: !process.env.IS_WEB ? __dirname : "",
        absoluteDir: !process.env.IS_WEB ? require('path').resolve(__dirname) : "", 
      }
    }
  }
</script>

<style scoped>
  .title {
    color: #888;
    font-size: 18px;
    font-weight: initial;
    letter-spacing: .25px;
    margin-top: 10px;
  }

  .items { margin-top: 8px; }

  .item {
    display: flex;
    margin-bottom: 6px;
  }

  .item .name {
    color: #6a6a6a;
    margin-right: 6px;
  }

  .item .value {
    color: #35495e;
    font-weight: bold;
  }
</style>
