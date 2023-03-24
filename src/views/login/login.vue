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
        :type="eyeIconChange"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
        autocomplete="off"
      >
        <template #right-icon>
          <van-icon
            v-if="eyeIconChange == 'text'"
            name="eye-o"
            @click="eyeIconChange = 'password'"
          />
          <van-icon
            v-else
            name="closed-eye"
            @click="eyeIconChange = 'text'"
          />
        </template>
      </van-field>
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
<style scoped>
.loginForm {
  margin-top: 25vh;
}
h5 {
  font-size: 25px;
  display: none;
}
.loginForm-blogTitle{
  text-align: center;
}
</style>
<script>
import { useRouter } from 'vue-router'
import { ref } from "vue";
import requestLogin from '@/api/login.js'
import { Notify } from 'vant'

export default {
  setup() {
    const username = ref("");
    const password = ref("");
    const eyeIconChange = ref('password');
    const router = useRouter()
    const onSubmit = (values) => {
      requestLogin(values)
        .then(res => {
          if(res.code === 200) {
            router.push('/home')
          } else {
            Notify({
              message: res.message || '请求失败',
              type: 'danger'
            });
          }
        })
        .catch(err => {
          console.log(err);
          Notify({
            message: err.message || '请求失败',
            type: 'danger'
          });
        })
    };
    return {
      username,
      password,
      onSubmit,
      eyeIconChange
    };
  },
};
</script>
