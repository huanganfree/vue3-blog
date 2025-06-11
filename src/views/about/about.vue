<template>
  <div class="about">
    <nav-bar
      title="关于我们"
      :on-click-left="() => $router.push('/main/me')"
    />
    <div class="article-wrapper">
      <div v-if="listData.length">
        <van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          :immediate-check="true"
          :offset="10"
          @load="initData"
        >
          <van-cell
            v-for="item in (listData)"
            :key="item.id"
            class="article"
            :title="item.article"
          />
        </van-list>
      </div>
      <van-empty
        v-else
        image="error"
        description="暂无数据"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.about {
  padding: 46px 15px 0 15px;
}

.article-wrapper {
  height: calc(100vh - 47px);
}

.article {
  font-size: 14px;
  line-height: 23px;
  text-indent: 2em;
}
</style>
<script>
import NavBar from '@/components/NavBar.vue'
import { requestAbout } from '@/api/about.js'
export default {
  components: {
    NavBar
  },
  data() {
    return {
      listData: [],
      loading: false,
      finished: true,
      pageSize: 10,
      pageNum: 1
    };
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      this.loading = true
      requestAbout({
        pageSize: this.pageSize,
        pageNum: this.pageNum
      })
        .then(res => {
          const { code, message, data } = res
          if (code == 200) {
            this.loading = false
            const { records, total } = data
            this.listData = this.listData.concat(records || [])
            if(total == this.listData.length) {
              this.finished = true
            } else {
              this.pageNum += 1
              this.finished = false
            }
          } else {
            this.listData = []
            this.pageNum = 1
            message && this.$notify(message)
          }
        })
    },
    onRefresh() {
      this.initData()
    }
  }
}
</script>
