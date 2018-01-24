<template>
  <div class="container">
    <h1>注册</h1>
    <div class="from-panel">
      <el-form :label-position="top" ref="form" label-width="80px" :model="user" :rules="rules">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="user.name"></el-input>
        </el-form-item>
        <el-form-item label="邮件" prop="email">
          <el-input v-model="user.email"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input type="password" v-model="user.pwd"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="cpwd">
          <el-input type="password" v-model="user.cpwd"></el-input>
        </el-form-item>
        <div class="oprator">
          <el-button class="submit" type="primary" @click="submitForm('form')">提交</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data () {
     let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.user.cpwd !== '') {
          this.$refs.form.validateField('cpwd')
        }
        callback()
      }
    }
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.user.pwd) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      labelPosition: 'top',
      user: {
        name: '',
        email: '',
        pwd: '',
        cpwd: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 7, message: '长度在 3 到 7 个字符之间', trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    submitForm () {}
  }
}
</script>

<style lang="scss" scoped>

</style>
