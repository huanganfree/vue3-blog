<template>
  <div class="userInfo">
    <nav-bar
      title="用户信息修改"
      :on-click-left="() => $router.push('/main/me')"
    />
    <div class="avatar">
      <div class="small-title-margin">
        头像上传
      </div>
      <van-uploader
        v-model="imgList"
        :after-read="afterRead"
        :max-count="1"
        accept=".doc,.docx,.xls,.xlsx,.pdf,.jpg,.jpeg,.png"
      />
      <van-button
        type="primary"
        @click="handleDownload"
      >
        下载
      </van-button>
      <div class="small-title-margin">
        签名
      </div>
      <van-field
        v-model="signature"
        rows="2"
        autosize
        type="textarea"
        maxlength="20"
        placeholder="请输入留言"
        show-word-limit
      />
      <div class="submitBtn-wrapper">
        <van-button
          type="primary"
          class="submitBtn"
          :disabled="isAlter"
          @click="handleSubmit"
        >
          提交
        </van-button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.small-title-margin{
  margin: 10px 0;
}
.submitBtn-wrapper{
  display: block;
  text-align: center;
  .submitBtn{
    width: 90vw;
    margin-top: 10px;
  }
}
.userInfo{
  padding: 46px 15px 0 15px;
}
div.avatar{
  font-size: 15px;
  margin-bottom: 10px;
}
</style>
<script>
import NavBar from '@/components/NavBar.vue';
import { requestUserInfoUpload, requestUserInfo, submitUserInfo, requestDownload } from '@/api/userInfo.js';
import { ref } from 'vue';
import { Notify } from 'vant';

export default {
  name: 'UserInfo',
  components:{
    'nav-bar': NavBar,
  },
  setup(){
    const imgList = ref([])
    const signature = ref('')
    const isAlter = ref(false)
    const afterRead = (file) => {
      const formData = new FormData()
      formData.append('file', file.file)
      requestUserInfoUpload(formData)
        .then(res => {
          const { code, message, data } = res
          if(code == 200){
            imgList.value = [{url: data}]
            Notify({
              message: message,
              type: 'success'
            })
          } else {
            message && Notify({
              message: message,
              type: 'danger'
            })
          }
        })
    };
    return {
      afterRead,
      imgList,
      signature,
      isAlter
    }
  },
  data() {
    return {
      property: 'value',
    };
  },
  mounted(){
    this.initData()
  },
  methods:{
    initData(){
      requestUserInfo()
        .then(res => {
          const { code, data, message } = res
          if(code == 200){
            this.imgList = data.avatar ? [{url: data.avatar}] : []
            this.signature = data.signature
          } else {
            this.imgList = []
            Notify({
              message: message,
              type: 'danger'
            });
          }
        })
    },
    handleSubmit(){
      submitUserInfo({signature: this.signature})
        .then(res => {
          const {code, message} = res
          if(code == 200){
            this.$notify({
              message: message,
              type: 'success',
              onClose: () => { this.$router.push('/main/me') }
            })
          } else {
            Notify({
              message: message,
              type: 'danger'
            });
          }
        })
    },
    handleDownload() {
      requestDownload({ url: this.imgList[0]?.url })
        .then(res => {
          console.log(res);
          if (res) {
            const blob = new Blob([res], { type: 'application/pdf' })
            console.log(blob);
            const url = window.URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.href = url
            a.download = 'a.pdf' // 设置下载的文件名
            document.body.appendChild(a)
            a.click()
            document.body.removeChild(a)
            window.URL.revokeObjectURL(url)
          } else {
            Notify({
              message: '下载失败，请稍后再试',
              type: 'danger'
            });
          }
        })
        .catch(err => {
          console.error(err);
          Notify({
            message: '下载失败，请稍后再试',
            type: 'danger'
          });
        });
    }
  }
}
</script>
