<template>
  <div class="about">
    <nav-bar
      title="关于我们"
      :on-click-left="() => $router.push('/main/me')"
    />
    <van-pull-refresh
      v-model="isLoading"
      @refresh="onRefresh"
    >
      <div class="article-wrapper">
        <div v-if="listData.map(item => item.article).join('').length">
          <div
            v-for="item in (listData)"
            :key="item.id"
            class="article"
          >
            {{ item.article }}
          </div>
        </div>
        <van-empty
          v-else
          image="error"
          description="暂无数据"
        />
      </div>
      <template #success>
        <van-icon
          name="checked"
          color="#4fc08d"
        />
        <span style="margin-left: 10px;">刷新成功</span>
      </template>
    </van-pull-refresh>
  </div>
</template>
<style lang="scss" scoped>
.about{
  padding: 46px 15px 0 15px;
}
.article-wrapper{
  height: calc(100vh - 47px);
}
.article{
  font-size: 14px;
  line-height: 23px;
  text-indent: 2em;
}
</style>
<script>
import NavBar from '@/components/NavBar.vue'
import { requestAbout } from '@/api/about.js'
export default {
  components:{
    NavBar
  },
  data() {
    return {
      listData: [],
      isLoading: false
    };
  },
  mounted() {
    this.initData()
  },
  methods:{
    initData(){
      this.isLoading = true
      requestAbout()
        .then(res => {
          this.isLoading = false
          const { code, message, data } = res
          if(code == 200){
            this.listData = data || []
          } else {
            this.listData = []
            message && this.$notify(message)
          }
        })
    },
    onRefresh(){
      this.initData()
    }
  }
}
</script>
