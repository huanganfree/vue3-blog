<template>
  <div class="content">
    <router-view />
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core';
export default {
  name: "App",
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
