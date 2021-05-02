<template>
  <div class="header-box">
    <!--面包屑-->
    <transition name="fade" :duration="500">
      <div class="breadcrumb-box" v-if="breadcrumb">
        <el-breadcrumb separator="/">
          <template v-for="item in routerHistoryList">
            <template v-if="item.path">
              <el-breadcrumb-item :to="{ path: item.path }">{{ item.meta.title }}</el-breadcrumb-item>
            </template>
            <template v-else>
              <el-breadcrumb-item>{{ item.meta.title }}</el-breadcrumb-item>
            </template>

          </template>
        </el-breadcrumb>
      </div>
    </transition>

    <!--右侧头像下拉-->
    <div class="avatar">
      <el-dropdown>
        <div class="avatar-box">
          <el-avatar
              size="medium"
              src="https://portrait.gitee.com/uploads/avatars/user/1663/4989305_Lidppp_1578978069.png"/>
          <span class="avatar-name">阿贝</span>
        </div>

        <template #dropdown>
          <el-dropdown-menu>
            <!--<el-dropdown-item>个人中心</el-dropdown-item>-->
            <el-dropdown-item @click="loginOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>


    </div>
  </div>
</template>

<script>
import {mapMutations} from "vuex"

export default {
  name: "header-box",
  data() {
    return {
      breadcrumb: true
    }
  },
  computed: {
    routerHistoryList() {
      return this.$route.matched
    }
  },
  methods: {
    ...mapMutations("user", ["loginOut"])
  },
  watch: {
    "$route.path": function () {
      this.breadcrumb = false;
      this.$nextTick(() => {
        this.breadcrumb = true;
      })
    }
  }
}
</script>

<style scoped lang="scss">
.header-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.avatar {
  margin-right: 20px;

  .avatar-box {
    font-size: 14px;
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;

    .avatar-name {
      margin-left: 12px;
    }
  }
}

</style>
