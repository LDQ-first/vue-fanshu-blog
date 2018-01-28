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
      <el-menu-item class="logo" index="/">主页</el-menu-item>
      <el-menu-item index="/list"><i class="fa fa-flag" aria-hidden="true"></i>探索</el-menu-item>
      <template v-if="user">
        <li class="el-menu-item right" index="6" @click="handleExit">
          <i class="fa fa-sign-out" aria-hidden="true"></i>
          注销
        </li>
        <el-submenu index="5" class="right">
          <span slot="title"> {{ user.getUsername() }}</span>
          <el-menu-item index="5-1">个人中心</el-menu-item>
          <el-menu-item index="5-2">发布文章</el-menu-item>
          <el-menu-item index="5-3">消息</el-menu-item>
        </el-submenu>
      </template>
      <template v-else>
        <el-menu-item index="/signUp" class="right"><i class="fa fa-user-o" aria-hidden="true"></i>注册</el-menu-item>
        <el-menu-item index="3" class="right"><i class="fa fa-key" aria-hidden="true"></i>登录</el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Header',
  data () {
    return {
      active: '/'
    }
  },
  computed: mapState({
    user: state => state.user
  }),
  created () {
    this.active = this.$route.path // 解决刷新不高亮
    this.$router.afterEach((to, from) => {
      this.active = to.path // 解决编程式切换路由不高亮
    })
  },
  methods: {
    handleSelect (key, keyPath) {
      // console.log(key, keyPath)
    },
    ...mapActions([
      'exit'
    ]),
    handleExit () {
      this.exit()
      this.$api.SDK.User.logOut()
      this.$message.success('成功退出')
    }
  },
  watch: {
    '$route' (newVal, oldVal) {
      // console.log('$route: ', newVal)
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
  min-width: 360px;
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
       .logo {
         box-shadow: 0 0 3px $baseColor;
      }
    }
  }
  .logo {
    margin-left: 0;
    font-size: 25px;
    font-weight: 100;
    background: $baseColor;
    color: #FFF !important;
    .fa {
      margin-right: 0.5rem;
    }
  }
  .el-submenu {
    .el-menu-item {
      min-width: 100%;
    }
  }
}
</style>
