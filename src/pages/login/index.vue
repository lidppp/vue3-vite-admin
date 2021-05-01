<template>
  <div class="login-box">
    <div class="container" ref="loginBox">
      <h1>登录</h1>
      <div id="login">
        <input class="tbx" name="username" type="text" autocomplete="off" v-model="loginData.username" placeholder="账号">
        <input class="tbx" name="password" type="password" v-model="loginData.password" placeholder="密码">
        <div class="sub" @click="signIn">登录</div>
      </div>
    </div>
  </div>
</template>

<script>
import login from "./login"
import loginStyle from "./login-style"
export default {
  name: "index",
  setup() {
    let {loginBox} = loginStyle();
    return {
      ...login(),
      loginBox
    }
  },
  methods: {
    login() {
      this.$router.push("/")
    }
  }
}
</script>

<style scoped>
.login-box{
    /* 设置窗口的高度为100%的窗口高度 */
    height: 100vh;
    /* 伸缩盒子模型 */
    display: flex;
    /* 下面两个属性让body里的子类居中 */
    justify-content: center;
    align-items: center;
    background-color: #2c3e50;
}


.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  height: 450px;
  border-radius: 20px;
  background-color: #34495e;
  box-shadow: 15px 15px 10px rgba(33, 45, 58, 0.3);
  overflow: hidden;
  position: relative;
}

#login {
  width: 300px;
  height: 200px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  z-index: 1;
}

#login .tbx {
  width: 200px;
  height: 40px;
  outline: none;
  border: none;
  border-bottom: 1px solid #fff;
  background: none;
  color: #fff;
}

/* 设置placeholder */
#login .tbx::placeholder {
  color: #fff;
  font-size: 15px;
}

#login .sub {
  width: 200px;
  height: 40px;
  outline: none;
  border: 1px solid #fff;
  border-radius: 20px;
  letter-spacing: 5px;
  color: #fff;
  background: none;
  cursor: pointer;
  text-align: center;
  line-height: 40px;
  user-select: none;
}

.container h1 {
  z-index: 1;
  color: #ecf0f1;
  letter-spacing: 5px;
  padding-left: 5px;
  font-size: 50px;
  font-weight: 100;
  text-shadow: 5px 5px 5px rgba(33, 45, 58, 0.3);
}

/* 设置鼠标进入的样式 */
.container ::v-deep(.in) {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: #3498bd;
  transform: translate(-50%, -50%);
  /* 使用in动画，持续0.5s,缓出的时间函数，停留在最后一帧 */
  animation: in 0.5s ease-out forwards;
}

/* 设置鼠标离开的样式 */
.container ::v-deep(.out) {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 1200px;
  height: 1200px;
  border-radius: 50%;
  background: #3498bd;
  transform: translate(-50%, -50%);
  animation: out 0.5s ease-out forwards;
}


</style>
