<template>
  <div style="width: 640px; margin: 0 auto;">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="用户登录" name="login" />
      <el-tab-pane label="账号注册" name="register" />
      <el-tab-pane label="密码修改" name="reset" />
    </el-tabs>
    <div style="padding-left: 50px">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userLayout',
  data() {
    return {
      activeName: 'login'
    }
  },
  methods: {
    handleClick(tab) {
      // console.log(tab, event);
      this.$router.push(tab.name);
    }
  }
}

</script>

<style lang="scss" scoped></style>