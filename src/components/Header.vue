<template>
  <div class="container">
    <el-menu
      ref='headerElMenu'
      :router="true"
      :default-active="active"
      class="el-menu-demo"
      mode="horizontal"
      active-text-color="#409EFF"
      @select="handleSelect">
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
      active: '/'
    }
  },
  created () {
    this.active = this.$route.path // 解决刷新不高亮
    this.$router.afterEach((to, from) => {
      this.active = to.path // 解决编程式切换路由不高亮
    })
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  watch: {
    '$route' (newVal, oldVal) {
      console.log('$route: ', newVal)
      if (newVal.path === '/') {
        this.$refs.headerElMenu.$el.classList.add('firstActive')
      } else {
        this.$refs.headerElMenu.$el.classList.remove('firstActive')
      }
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
  .el-menu {
    &.firstActive {
       .el-menu-item:first-child {
         box-shadow: 0 0 3px $baseColor;
      }
    }
  }
  .el-menu-item {
    .fa {
      margin-right: 0.5rem;
    }
    &:first-child {
      margin-left: 0;
      font-size: 25px;
      font-weight: 100;
      background: $baseColor;
      color: #FFF !important;
    }
  }
}
</style>
