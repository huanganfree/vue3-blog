<template>
  <van-tabbar
    v-model="active"
    active-color="#007fff"
    inactive-color="#000"
    route
  >
    <van-tabbar-item
      v-for="(item, i) in barArr"
      :key="i"
      :to="item.path"
    >
      {{ item.name }}
      <template #icon>
        <div
          :class="['iconfont', item.meta.icon]"
        />
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
  methods: {},
};
</script>

<style scoped lang='css'>
.iconfont{
  font-size: 23px;
  font-weight: bold;
}
</style>
