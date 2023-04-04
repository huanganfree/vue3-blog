<template>
  <div class="userInfo">
    <nav-bar
      title="用户信息修改"
      :on-click-left="() => $router.push('/main/me')"
    />
    <div class="avatar">
      <div style="margin: 10px 0;">
        头像上传
      </div>
      <van-uploader
        v-model="imgList"
        :after-read="afterRead"
        :max-count="1"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.userInfo{
  padding: 46px 15px 0 15px;
}
div.avatar{
    font-size: 15px;
    margin-bottom: 10px
}
</style>
<script>
import NavBar from '@/components/NavBar.vue'
import { requestUserInfoUpload } from '@/api/userInfo.js'
import { ref } from 'vue'

export default {
  name: 'UserInfo',
  components:{
    'nav-bar': NavBar,
  },
  setup(){
    const imgList = ref([])
    const afterRead = (file) => {
      const formData = new FormData()
      formData.append('file', file.file)
      requestUserInfoUpload(formData)
        .then(res => {
          const { code, message, data } = res
          if(code == 200){
            imgList.value = [{url: data}]
          } else {
            this.$notify(message)
          }
        })
    };
    return {
      afterRead,
      imgList
    }
  },
  data() {
    return {
      property: 'value',
    };
  }
}
</script>
