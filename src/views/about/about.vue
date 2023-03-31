<template>
  <div class="about">
    <nav-bar title="关于我们" />
    <div class="articel">
      关于我们
    </div>
  </div>
</template>
<style lang="scss" scoped>
.about{
  padding-top: 47px;
}
.articel{
  font-size: 14px;
}
</style>
<script>
import NavBar from '@/components/NavBar.vue'
import { requestAbout } from '@/api/about.js'
export default {
  components:{
    NavBar
  },
  mounted() {
    this.initData()
  },
  methods:{
    initData(){
      requestAbout()
        .then(res => {
          console.log(res);
        })
    }
  }
}
</script>
