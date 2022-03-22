<script setup lang='ts'>
import { UserService, GoodsService, OrderService } from '@/api/api'

const userNumber = ref<number>(0)
const goodsNumber = ref<number>(0)
const orderNumber = ref<number>(0)

const getNumber = async (dataType: string) => {
  if (dataType == 'user') {
    const res = await UserService.num({})
    userNumber.value = res.result.number
  }
  if (dataType == 'goods') {
    const res = await GoodsService.num({})
    goodsNumber.value = res.result.number
  }
  if (dataType == 'order') {
    const res = await OrderService.num({})
    orderNumber.value = res.result.number
  }
}

onMounted(() => {
  getNumber('user')
  getNumber('goods')
  getNumber('order')
})

</script>

<template>
  <el-card shadow="hover">
    <div class="user_box">
      <div class="user_icon">
        <el-icon>
          <component is="user"></component>
        </el-icon>
      </div>
      <div class="user_info">
        <div class="info_number">{{ userNumber }}</div>
        <div class="info_title">用户数量</div>
      </div>
    </div>
  </el-card>
  <el-card shadow="hover">
    <div class="user_box">
      <div class="user_icon bc">
        <el-icon>
          <component is="goods"></component>
        </el-icon>
      </div>
      <div class="user_info">
        <div class="info_number fc">{{ goodsNumber }}</div>
        <div class="info_title">商品数量</div>
      </div>
    </div>
  </el-card>
  <el-card shadow="hover">
    <div class="user_box">
      <div class="user_icon bca">
        <el-icon>
          <component is="list"></component>
        </el-icon>
      </div>
      <div class="user_info">
        <div class="info_number fca">{{ orderNumber }}</div>
        <div class="info_title">订单数量</div>
      </div>
    </div>
  </el-card>
</template>

<style scoped lang="less">
.el-card {
  width: 30%;
  .user_box {
    display: flex;
    .user_icon {
      width: 40%;
      height: 121px;
      background-color: #2d8cf0;
      display: flex;
      justify-content: center;
      align-items: center;
      .el-icon {
        font-size: 70px;
        color: #fff;
      }
    }
    .user_info {
      width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .info_number {
        color: #2d8cf0;
        font-size: 30px;
        font-weight: 600;
      }
      .info_title {
        color: #999999;
      }
    }
  }
}
.bc {
  background-color: #f25e43 !important;
}
.fc {
  color: #f25e43 !important;
}
.bca {
  background-color: #64d572 !important;
}
.fca {
  color: #64d572 !important;
}
</style>
