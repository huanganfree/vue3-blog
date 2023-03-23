<template>
  <van-form
    class="loginForm"
    @submit="onSubmit"
  >
    <h5 class="loginForm-blogTitle">
      博客
    </h5>
    <van-cell-group inset>
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
        autocomplete="off"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
        autocomplete="off"
      />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button
        round
        block
        type="primary"
        native-type="submit"
      >
        登录
      </van-button>
    </div>
  </van-form>
</template>

<script>
import { useRouter } from 'vue-router'
import { onMounted, ref } from "vue";
import requestLogin from '@/api/login.js'

export default {
  setup() {
    let username = ref("");
    let password = ref("");
    const router = useRouter()
    const onSubmit = (values) => {
      console.log("submit", values);
      requestLogin(values)
        .then(res => {
          if(res.code === 200) {
            router.push('/home')
          }
        })
        .catch(err => {
          console.log(err);
        })
    };
    onMounted(() => {
      username = password = ""
    })
    return {
      username,
      password,
      onSubmit,
    };
  },
};
</script>

<style scoped lang='css'>
.loginForm {
  margin-top: 25vh;
}
h5 {
  font-size: 25px;
  display: none;
}
.checkCode{
  width: 100px;
  height: 32px;
}
.loginForm-blogTitle{
  text-align: center;
}
</style>
