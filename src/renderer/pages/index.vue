<template>
  <div>

    <h2>Card</h2>

    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :md="6" v-for="iteration in 4" :key="iteration">
        <el-card class="demo-item" :body-style="{ padding: '0px' }">
          <img src="@/assets/images/hamburger.png" class="image">
          <div style="padding: 14px;">
            <span>Yummy hamburger {{iteration}}</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">Operating button</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <h2>Popover</h2>

    <div>
      <el-popover
              placement="top-start"
              title="Title"
              width="200"
              trigger="hover"
              content="this is content, this is content, this is content">
        <el-button slot="reference">Hover to activate</el-button>
      </el-popover>
    </div>

    <h2>Router-link</h2>

    <router-link tag="div" to="/about">
      <a>About</a>
    </router-link>

    <h2>Tooltip</h2>
    
    <el-rate
      v-model="value2"
      :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
    </el-rate>

  </div>
</template>

<script>

  export default {
    data() {
      return {
        value1: null,
        value2: null,
        currentDate: "2019-02-23 02:39"
      }
    }
  }
</script>

<style lang="scss">
  //
  .image {
    width: 100%;
  }

  .demo-item {
    margin-bottom: 12px;
  }
</style>
