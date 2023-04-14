<template>
  <van-tabbar
    :value="active"
    active-color="#007fff"
    inactive-color="#000"
    route
    :before-change="onBeforeChange"
    @change="onChange"
  >
    <van-tabbar-item
      v-for="(item) in barArr"
      :key="item.path"
      :to="item.path"
    >
      {{ item.meta.title }}
      <template #icon>
        <svg
          class="icon"
          aria-hidden="true"
        >
          <use :xlink:href="`#${item.meta.icon}`" />
        </svg>
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { ref } from 'vue'
import { routes } from '../router/index'

export default {
  name: "TabBar",
  setup() {
    const barArr = ref(routes)
    const active = ref()
    return {
      barArr,
      active
    }
  },
  methods: {
    onBeforeChange(data) {
      if([0, 1].includes(parseFloat(data))){
        this.$notify({message: '暂不开放', type: 'warning'})
        this.active = 2
        return false
      } else {
        this.active = data
      }
    }
  },
};
</script>

<style scoped lang='css'>
.icon{
  font-size: 24px;
}
</style>
