// @ts-check
import {reactive} from "vue"
import {useRouter} from "vue-router";

export default function () {
  let router = useRouter()
  let loginData = reactive({
    username: "",
    password: ""
  })

  let signIn = () => {
    console.log(loginData.username, loginData.password)
    router.push("/")
  }

  return {
    loginData,
    signIn,
  }

}
