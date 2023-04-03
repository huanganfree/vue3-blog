<template>
  <div class="me">
    <div
      class="me-bg"
      :style="{'backgroundImage': `url(${require('@/assets/image/me-bg.png')})`}"
    >
      <div class="user-info">
        <div class="user-name">
          <div class="name">
            <span>用户名：</span>
            <span>admin</span>
          </div>
          <div class="signature">
            <svg
              class="icon"
              aria-hidden="true"
            >
              <use :xlink:href="`#icon-shuziqianming`" />
            </svg>:
            路在脚下
          </div>
        </div>
        <img :src="require('@/assets/image/avatar.jpg')">
      </div>
    </div>
    <div class="userInfo-operation">
      <div
        v-for="item in operationList"
        :key="item.icon"
        class="operation"
        @click="$router.push(item.path)"
      >
        <div class="operation-name">
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use :xlink:href="`#${item.icon}`" />
          </svg>
          {{ item.name }}
        </div>
        <van-icon name="arrow" />
      </div>
    </div>
    <van-button
      type="danger"
      class="logoOut-btn"
      round
      @click="handleLogOout"
    >
      退出登录
    </van-button> 
  </div>
</template>
<style scoped lang='scss'>
.me{
  background-color: #f5f5f5;
  min-height: 100vh;
  position: relative;
  .me-bg{
    height: 3.3rem;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 0 0 10px 10px;
    .user-info{
      display: flex;
      justify-content: space-between;
      padding: 20px;
      .user-name{
        font-size: 18px;
        color: #fff;
        flex: 1;
        >span:first-child{
          font-weight: bold
        }
        .signature{
          margin-top: 5px;
          font-size: 14px;
          .icon{
            font-size: 20px
          }
        }
      }
      img{
        width: 60px;
        border-radius: 8px;
        align-self: flex-start;
      }
    }
  }
  .logoOut-btn{
    text-align: center;
    position: absolute;
    bottom: 60px;
    width: 90%;
    left: 50%;
    transform: translateX(-50%)
  }
  .userInfo-operation{
      width: 90%;
      position: absolute;
      top: 140px;
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      box-shadow: 0rem 0rem 0.3rem 0.1rem rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      z-index: 10;
      background: #fff;
      .operation{
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 16px;
        margin-left: 20px;
        padding: 15px 15px 15px 0;
        &:not(:last-child){
          border-bottom: 1px solid #dcdcdc;
        }
        .operation-name{
          font-size: 16px;
          display: flex;
          align-items: center;
          .icon{
            margin-right: 20px;
            font-size: 18px;
          }
        }
      }
  }
}
</style>
<script>
import { useRouter } from 'vue-router'

export default {
  name:'Me',
  setup() {
    const operationList = [
      {icon: 'icon-xiugai',  name: '用户信息修改', path: '/userInfo'},
      {icon: 'icon-A',  name: '重置密码'},
      {icon: 'icon-guanyuwomen',  name: '关于我们', path: '/about'}
    ]
    const router = useRouter()
    const handleLogOout = () => {
      router.push('/')
    }
    return {
      handleLogOout,
      operationList
    }
  },
  methods: {}
};
</script>

