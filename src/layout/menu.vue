<template>
  <el-menu :collapse="closed" class="el-menu-vertical-demo" router :default-active="activeIndex">
    <m-menuItem v-for="(item,index) in routeList" :data="{...item,index:''+index}"/>
  </el-menu>

</template>
<script>
import {mapState} from "vuex"
import menuItem from "./menuItem.vue";

export default {
  name: "LayoutMenu",
  props: {
    closed: {
      required: true,
      type: Boolean
    }
  },
  data() {
    return {
      defaultActiveIndex: null
    }
  },
  components: {
    "m-menuItem": menuItem
  },

  computed: {
    ...mapState({
      routeList: state => state.routerList.list
    }),
    activeIndex() {
      return this.$route.path
    }
  }
}
</script>
<style scoped lang="scss">

</style>
