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
          type="password"
          label="原密码"
          placeholder="请填写原密码"
          :rules="[{ required: true, message: '请填写原密码' }]"
        />
        <van-field
          v-model="newPassword"
          type="password"
          label="新密码"
          placeholder="请填写新密码"
          :rules="[{ required: true, message: '请填写新密码' }]"
        />
        <van-field
          v-model="surePassword"
          type="password"
          label="确认密码"
          placeholder="请再次填写新密码"
          :rules="[{ required: true, message: '请再次填写新密码' }]"
        />
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
export default {
  name:'ResetPassword',
  components: {
    NavBar
  },
  data() {
    return {};
  },
  created() {

  },
  mounted() {

  },
  methods: {

  }
};
</script>

