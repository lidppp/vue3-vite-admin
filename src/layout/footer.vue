<template>
  <div class="footer-box">
    by <a href="https://github.com/lidppp" target="_blank">Lidppp</a> @2021
  </div>
</template>

<script>
export default {
  name: "footer-box"
}
</script>

<style lang="scss" scoped>
.footer-box {
  height: 100%;
  background: #f5f5f5;
  color: #000;
  text-align: center;
  box-sizing: border-box;
  padding-top: 1em;

  a {
    color: #404040;
    transition: color 0.5s;
    &:hover {
      color: #7c7c7c;

    }
  }

}
</style>
