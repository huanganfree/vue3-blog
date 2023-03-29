<template>
  <van-nav-bar
    :title="title"
    left-arrow
    fixed
    @click-left="clickLeftFn"
  />
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "Nav",
  props:{
    title:{
      type: String,
      default: '标题'
    },
    onClickLeft: {
      type: [Function, undefined],
      default: undefined
    }
  },
  setup(props) {
    const router = useRouter()
    const clickLeftFn = props.onClickLeft || (() => router.go(-1))
    return {
      clickLeftFn
    }
  }
};
</script>
