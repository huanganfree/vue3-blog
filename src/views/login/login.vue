<template>
  <div class="login-wrapper">
    <div
      class="login-bg"
      :style="{'background-image': `url(${loginBg})`}"
    />
    <van-form
      class="login-form"
      @submit="onSubmit"
    >
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
          autocomplete="off"
          class="input-component"
        />
        <van-field
          v-model="password"
          :type="eyeIconChange"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
          autocomplete="off"
          class="input-component"
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
        <van-field
          v-if="isRegister"
          v-model="verifyCode"
          name="verifyCode"
          center
          label="验证码"
          placeholder="请输入验证码"
          :rules="[{ required: true, message: '请输入验证码' }]"
        >
          <template #button>
            <div @click="updateVerifyCode">
              <vue-verify-code
                ref="verify"
                :line-count="3"
                @getCode="getCode"
              />
            </div>
          </template>
        </van-field>
      </van-cell-group>
      <div
        class="user-tip"
      >
        <div
          style="display: inline-block;"
          @click="isRegister = !isRegister"
        >
          {{ !isRegister ? `没有账号？去注册` : `已有账号？去登录` }}
        </div>
      </div>
      <div style="margin: 16px">
        <van-button
          round
          block
          type="primary"
          native-type="submit"
        >
          {{ !isRegister ? `登录` : `注册` }}
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<style lang="scss" scoped>
.login-wrapper{
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(217deg,#6fb9f8,#3daaf85e,#49d3fc1a,#3fd3ff00);
}
.login-bg{
  height: 4.3rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.user-tip{
  font-size: 14px;
  text-align: right;
  margin: 10px 16px 0;
  cursor: pointer;
  color: #1989fa;
}
</style>
<script>
import { useRouter } from 'vue-router'
import { ref } from "vue";
import { Notify } from 'vant';
import { requestLogin } from '@/api/login.js'
import VueVerifyCode from 'vue-verify-code'
import LoginBg from '@/assets/image/login-bg.png';
let checkCode = ''
export default {
  components:{
    'vue-verify-code':VueVerifyCode
  },
  setup() {
    const username = ref("");
    const password = ref("");
    const eyeIconChange = ref('password');
    const router = useRouter()
    const isRegister = ref(false)
    const verifyCode = ref('')
    const loginBg = LoginBg
    const onSubmit = (values) => {
      const { verifyCode } = values
      if(verifyCode != checkCode && isRegister.value){
        Notify({
          message: '验证码错误',
          type: 'danger'
        });
        return
      }
      requestLogin(values)
        .then(res => {
          if (res.code === 200) {
            router.push('/main/me')
          } else {
            Notify({
              message: res.message,
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
      eyeIconChange,
      loginBg,
      isRegister,
      verifyCode
    };
  },
  methods:{
    getCode(code) {
      checkCode = code
      console.log(checkCode);
    },
    updateVerifyCode(){
      this.$refs.verify.display()
    }
  },
};
</script>
