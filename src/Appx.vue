<template>
  <div id="app">
    <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1"><router-link v-bind:to="'/'">我的密码库</router-link></el-menu-item>
        <el-menu-item index="2"><router-link v-bind:to="'/send'">send</router-link></el-menu-item>
        <el-menu-item index="3"><router-link v-bind:to="'/tool'">工具</router-link></el-menu-item>
        <el-menu-item index="4"><router-link v-bind:to="'/setting'">设置</router-link></el-menu-item>
    </el-menu>
    <div class="left-menu-wrap">
      <LeftMenu></LeftMenu>
    </div>
    <div class="middle-content-wrap">
      <router-view/>
    </div>
  </div>
</template>

<script>
import LeftMenu from './components/leftMenu/index'
export default {
  components: {
    LeftMenu
  },
  name: 'App',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
      handleSelect(key, keyPath) {
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.left-menu-wrap {
  width: 20%;
  border: 1px solid #909399;
  border-radius: 5px;
  margin: 20px 10px;
  float: left;
  padding: 10px;
}
.middle-content-wrap {
  margin: 20px 0 0 24%;
}
</style>
