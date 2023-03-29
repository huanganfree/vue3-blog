<template>
  <div>
    <router-view />
    <!-- 如果整个MainPage组件卸载掉，下面的过渡不触发 -->
    <Transition>
      <TabBar v-if="['/main/home', '/main/me', '/main/photo'].includes(route.path)" /> 
    </Transition> 
  </div>
</template>
<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.4s;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(100px);
}
</style>

<script setup>
// eslint-disable-next-line no-unused-vars
import TabBar from './TabBar.vue'
import { useRoute } from "vue-router";
// eslint-disable-next-line no-unused-vars
const route = useRoute()
</script>