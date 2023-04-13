<template>
  <div class="resetPassword">
    <NavBar
      title="重置密码"
      :on-click-left="() => $router.push('/main/me')"
    />
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="oldPassword"
          :type="oldPasswordType"
          label="原密码"
          placeholder="请填写原密码"
          :rules="[{ required: true, message: '请填写原密码' }]"
        >
          <template #right-icon>
            <van-icon
              v-if="oldPasswordType == 'text'"
              name="eye-o"
              @click="oldPasswordType = 'password'"
            />
            <van-icon
              v-else
              name="closed-eye"
              @click="oldPasswordType = 'text'"
            />
          </template>
        </van-field>
        <van-field
          v-model="newPassword"
          :type="newPasswordType"
          label="新密码"
          placeholder="请填写新密码"
          :rules="[{ required: true, message: '请填写新密码' }]"
        >
          <template #right-icon>
            <van-icon
              v-if="newPasswordType == 'text'"
              name="eye-o"
              @click="newPasswordType = 'password'"
            />
            <van-icon
              v-else
              name="closed-eye"
              @click="newPasswordType = 'text'"
            />
          </template>
        </van-field>
        <van-field
          v-model="surePassword"
          :type="surePasswordType"
          label="确认密码"
          placeholder="请再次填写新密码"
          :rules="[{ required: true, message: '请再次填写新密码' }]"
        >
          <template #right-icon>
            <van-icon
              v-if="surePasswordType == 'text'"
              name="eye-o"
              @click="surePasswordType = 'password'"
            />
            <van-icon
              v-else
              name="closed-eye"
              @click="surePasswordType = 'text'"
            />
          </template>
        </van-field>
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button
          round
          block
          type="primary"
          native-type="submit"
        >
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<style scoped lang='scss'>
.resetPassword{
  padding: 46px 0 0 0;
}
</style>
<script>
import NavBar from '@/components/NavBar.vue'
import { requestResetPassword } from '@/api/resetPassword.js'
export default {
  name:'ResetPassword',
  components: {
    NavBar
  },
  data() {
    return {
      surePasswordType:'password',
      newPasswordType: 'password',
      oldPasswordType: 'password',
      oldPassword: '',
      newPassword: '',
      surePassword: ''
    };
  },
  created() {
  },
  mounted() {
  },
  methods: {
    onSubmit() {
      const params = {
        oldPassword: this.oldPassword,
        newPassword: this.newPassword,
        surePassword: this.surePassword
      }
      requestResetPassword(params)
        .then(res => {
          console.log(res);
        })
    }
  }
};
</script>

