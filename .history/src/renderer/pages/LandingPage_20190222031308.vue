<template>
  <div>
    <h1>Popover</h1>
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
    <router-link tag="li" to="/test">
      <a>/test</a>
    </router-link>

    <h1>Tooltip</h1>
    <el-rate
      v-model="value2"
      :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
    </el-rate>
    <div class="box">
      <div class="top">
        <el-tooltip class="item" effect="dark" content="Top Left prompts info" placement="top-start">
          <el-button>top-start</el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Top Center prompts info" placement="top">
          <el-button>top</el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Top Right prompts info" placement="top-end">
          <el-button>top-end</el-button>
        </el-tooltip>
      </div>
      <div class="left">
        <el-tooltip class="item" effect="dark" content="Left Top prompts info" placement="left-start">
          <el-button>left-start</el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Left Center prompts info" placement="left">
          <el-button>left</el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Left Bottom prompts info" placement="left-end">
          <el-button>left-end</el-button>
        </el-tooltip>
      </div>

      <div class="right">
        <el-tooltip class="item" effect="dark" content="Right Top prompts info" placement="right-start">
          <el-button>right-start</el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Right Center prompts info" placement="right">
          <el-button>right</el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Right Bottom prompts info" placement="right-end">
          <el-button>right-end</el-button>
        </el-tooltip>
      </div>
      <div class="bottom">
        <el-tooltip class="item" effect="dark" content="Bottom Left prompts info" placement="bottom-start">
          <el-button>bottom-start</el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Bottom Center prompts info" placement="bottom">
          <el-button>bottom</el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Bottom Right prompts info" placement="bottom-end">
          <el-button>bottom-end</el-button>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: null,
        value2: null
      }
    }
  }
</script>

<style>
  body {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }
  .box {
    width: 400px;

    .top {
      text-align: center;
    }

    .left {
      float: left;
      width: 110px;
    }

    .right {
      float: right;
      width: 110px;
    }

    .bottom {
      clear: both;
      text-align: center;
    }

    .item {
      margin: 4px;
    }

    .left .el-tooltip__popper,
    .right .el-tooltip__popper {
      padding: 8px 10px;
    }

    .el-button {
      width: 110px;
    }
  }
</style>
