<template>
  <div>
    <div>这是个列表页</div>
    <div>{{ num }}</div>
    <el-button @click="ADD_NUM">点击增加num</el-button>
    <div style="height: 1000px;">我很长</div>
    <router-link to="/">首页</router-link>
    <router-link to="/list">列表</router-link>
  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex"

export default {
  name: "index",
  computed: {
    ...mapState({
      num: state => state.test.num
    })
  },
  methods: {
    ...mapMutations("test", ["ADD_NUM"])
  }
}
</script>

<style scoped>

</style>
