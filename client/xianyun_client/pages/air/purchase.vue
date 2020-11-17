<template>
  <div class="container">
    <el-row type="flex" justify="space-between">
      <!-- 订单表单 -->
      <div>
        <OrderForm />
      </div>
      <!-- 侧边栏 -->
      <div class="aside" />
    </el-row>
  </div>
</template>

<script>
import orderForm from '@/components/air/orders'
export default {
  components: {
    OrderForm: orderForm
  }
}
</script>

<style lang="less" scoped>
  .container{
    width:1000px;
    margin:20px auto;
  }

  /*aside*/
  .aside{
    width: 350px;
    height: fit-content;
    border:1px #ddd solid;
  }
</style>
