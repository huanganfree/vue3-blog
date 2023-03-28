<template>
  <div class="home">
    home
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
    background-size: cover;
    width: 200px;
    height: 100px;
  }
}
</style>
<script>
export default {
  name: "Home",
  components:{
  }, 
  setup(){ 
    return {
      com: 'HomeOutlined'
    }
  },
  methods: {},
};
</script>


