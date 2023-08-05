<template>
  <el-container>
    <el-header>
      <img src="./assets/logo1.png" alt="">
      <div class="head-title">个人中心</div>
      <el-menu :default-active="activeIndex2" class="menu-header-right" mode="horizontal" @select="handleSelect"
        background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2"><router-link to="/user/login">个人中心</router-link></el-menu-item>
        <el-menu-item index="3">充值中心</el-menu-item>
        <el-menu-item index="3">客服中心</el-menu-item>
        <el-menu-item index="3">新游开服表</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <div style="width: 1090px; margin: 0 auto;">
        <router-view></router-view>
      </div>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      activeIndex2: '2'
    }
  },
  methods: {
    handleSelect() {

    }
  }
}
</script>

<style>
body {
  margin: 0;
}
.el-header {
  background-color: #545c64;
  color: #fff;
}
.head-title {
  display: inline-block;
  height: 60px;
  line-height: 60px;
  vertical-align: top;
  margin-left: 30px;
}
.menu-header-right {
  float: right;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
