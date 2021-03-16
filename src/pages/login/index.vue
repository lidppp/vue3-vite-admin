<template>
  <div>login</div>
  <el-button @click="login">
    登录
  </el-button>
</template>

<script>
export default {
  name: "index",
  methods: {
    login() {
      this.$router.push("/")
    }
  }
}
</script>

<style scoped>

</style>
