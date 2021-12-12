<template>
  <van-nav-bar title="标题" />
</template>

<script>
import { Toast } from "vant";

export default {
  name: "Nav",
  setup() {
    const onClickLeft = () => Toast("返回");
    const onClickRight = () => Toast("按钮");
    return {
      onClickLeft,
      onClickRight,
    };
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  list-style: none;
  padding: 0;
  outline: none;
}
</style>
