<template>
  <div>
    {{title}}
    <el-form class="login-form">
      <el-form-item>
        <el-input placeholder="请输入用户名" v-model="login.username"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="请输入密码" v-model="login.password" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">重置</el-button>
        <el-button @click="handleLogin()">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Login',
  data () {
    return {
      title: '登录',
      login: {username: "", password: ""}
    }
  },
  methods: {
    handleLogin() {
      const that = this
      axios.post('/home/login', JSON.stringify(this.login))
        .then(function (response) {
          // console.log(response.data.data.token)
          if (response.data && response.data.data && response.data.data.token) {
            localStorage.setItem('cache-token', response.data.data.token)
            that.$router.replace('/')
          }
        })
        .catch(function (error) {
          console.log(error)
        });
    }
  }
}
</script>

<style>
.login-form {
  width: 480px;
  alignment: center;
}
</style>
