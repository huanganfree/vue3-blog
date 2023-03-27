<template>
  <div class="home">
    home
    {{ num }}
    <div 
      class="bg-img"
    /> 
  </div>
</template>
<style scoped lang='scss'>
.home{
  font-size: 15px;
  img{
    width: 100px;
    display: none;
  }
  .bg-img{
    // display: none;
    background-size: cover;
    width: 200px;
    height: 100px;
  }
}
</style>
<script>
import { ref } from 'vue';
export default {
  name: "Home",
  components:{
  }, 
  setup(){ 
    const num = ref(10) 
    return {
      num, 
      com: 'HomeOutlined'
    }
  },
  methods: {},
};
</script>


