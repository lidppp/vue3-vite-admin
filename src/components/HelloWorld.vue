<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a> |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation1111</a>
  </p>

  <button @click="state.count++">count is: {{ state.count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script>
import {ref,reactive} from "vue"
export default{
  setup(props){
    console.log(props)
    let state = reactive({count:0})
    return {
      state
    }
  },
  props:{
    msg:{type:String}
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
