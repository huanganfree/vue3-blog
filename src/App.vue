<template>
  <div class="content">
    <router-view />
  </div>
  <template v-if="$route.name !== '登录'">
    <TabBar />  
  </template>
</template>

<script>
import { onMounted } from '@vue/runtime-core';
import TabBar from './components/TabBar.vue'

export default {
  name: "App",
  components: {
    TabBar
  },
  setup() {
    onMounted(() => {
    })
  }
};
</script>

<style>
*{
  padding: 0;
  margin: 0;
  list-style: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
