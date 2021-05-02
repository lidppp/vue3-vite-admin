<template>
  <Layout v-if="!$route.meta.notLayout">
    <router-view v-slot="{ Component }">
      <transition name="fade-page" mode="out-in">
        <component :is="Component"/>
      </transition>
    </router-view>
  </Layout>
  <router-view v-if="$route.meta.notLayout"></router-view>
</template>

<script>
import Layout from "@/layout/index.vue"

export default {
  name: "App",
  components: {
    Layout
  }
}
</script>

<style>
#app, html, body {
  width: 100%;
  height: 100%;
}
</style>
