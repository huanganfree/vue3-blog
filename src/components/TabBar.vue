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
  methods: {},
};
</script>

<style scoped lang='css'>
.icon{
  font-size: 24px;
}
</style>
