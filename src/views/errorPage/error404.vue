<template>
  <van-empty
    image="error"
  >
    <template #description>
      <div class="description">
        404
      </div>
    </template>
    <van-button
      round
      type="primary"
      class="bottom-button"
      @click="$router.push('/login')"
    >
      返回登录
    </van-button>
  </van-empty>
</template>
<style lang="scss" scoped>
.bottom-button {
  width: 160px;
  height: 40px;
}
.description{
  font-size:23px;
}
</style>
