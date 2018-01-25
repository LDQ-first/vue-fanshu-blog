<template>
  <div class="container">
    <el-menu :router="true" :default-active="active" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="/">主页</el-menu-item>
      <el-menu-item index="/list"><i class="fa fa-flag" aria-hidden="true"></i>探索</el-menu-item>
      <el-menu-item index="/signUp" class="right"><i class="fa fa-user-o" aria-hidden="true"></i>注册</el-menu-item>
      <el-menu-item index="3" class="right"><i class="fa fa-key" aria-hidden="true"></i>登录</el-menu-item>
    </el-menu>
  </div>
</template>

<script>

export default {
  name: 'Header',
  data () {
    return {
      active: '0'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>

@import "~@/assets/css/base.scss";

.container {
  padding: 0 10%;
  background: $containerBg;
  min-width: 320px;
  @media (max-width: 500px){
    padding: 0 20px;
  }
   @media (max-width: 414px){
    padding: 0;
  }
  .right {
    float: right;
  }
  .el-menu-item:first-child {
    margin-left: 0;
    font-size: 25px;
    font-weight: 100;
    background: $baseColor;
    color: #FFF;
    &:hover {
      background: $baseColor;
    }
  }
}
</style>
