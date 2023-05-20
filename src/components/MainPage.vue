<template>
  <div class="mainPage">
    <router-view />
    <!-- 如果整个MainPage组件卸载掉，下面的过渡不触发 -->
    <Transition>
      <TabBar v-if="['/main/home', '/main/me', '/main/photo'].includes($route.path)" /> 
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
<!-- 这个组件，我用了script setup 后，开发环境路由正常，生产环境嵌套路由就出问题了。 -->