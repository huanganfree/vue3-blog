<template>
  <div class="me">
    <img
      src="@/assets/me.jpg"
      class="me-mePng"
    >
    <div class="me-logoOut-btn">
      <van-button
        type="primary"
        @click="handleLogOout"
      >
        退出登录
      </van-button> 
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name:'Me',
  components: {},
  setup() {
    const router = useRouter()
    const handleLogOout = () => {
      router.push('/')
    }
    return { 
      handleLogOout
    }
  },
  methods: {

  }
};
</script>

<style scoped lang='scss'>
.me{
  .me-mePng{
    border-radius: 50%;
    width: 200px;
    height: 200px;
    margin: 10px auto;
    display: block;
  }
  .me-logoOut-btn{
    text-align: center;
  }
}
</style>
