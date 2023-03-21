<template>
  <div class="home">
    home
    {{ num }}
    <img
      :src="imgUrl"
      alt=""
    >
    <div
      class="bg-img"
    />
  </div>
  <component :is="com" />
</template>

<script>
import {
  HomeOutlined,
} from '@ant-design/icons-vue';
import { ref } from '@vue/reactivity';
export default {
  name: "Home",
  components:{
    HomeOutlined
  },
  setup(){
    const num = ref(10)
    const imgUrl = ref(require('@/assets/me.jpg'))
    return {
      num,
      imgUrl,
      com: 'HomeOutlined'
    }
  },
  methods: {},
};
</script>

<style scoped lang='scss'>
.home{
  font-size: 15px;
  img{
    width: 100px;
    display: none;
  }
  .bg-img{
    // display: none;
    background: url('../../assets/1.png');
    background-size: cover;
    width: 200px;
    height: 100px;
  }
}
</style>
