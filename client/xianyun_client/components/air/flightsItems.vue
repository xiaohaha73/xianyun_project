<template>
  <div class="flight-item">
    <div @click="toggleHandler">
      <!-- 显示的机票信息 -->
      <el-row type="flex" align="middle" class="flight-info">
        <el-col :span="6">
          <span>{{ data.airline_name }} </span> {{ data.flight_no }}
        </el-col>
        <el-col :span="12">
          <el-row type="flex" justify="space-between" class="flight-info-center">
            <el-col :span="8" class="flight-airport">
              <strong>{{ data.dep_time }}</strong>
              <span>{{ data.org_airport_name }} {{ data.org_airport_quay }}</span>
            </el-col>
            <el-col :span="8" class="flight-time">
              <span>{{ FlightTimes }}</span>
            </el-col>
            <el-col :span="8" class="flight-airport">
              <strong>{{ data.arr_time }}</strong>
              <span>{{ data.dst_airport_name }} {{ data.dst_airport_quay }}</span>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="6" class="flight-info-right">
          ￥<span class="sell-price">810</span>起
        </el-col>
      </el-row>
    </div>

    <div v-if="toggle" class="flight-recommend">
      <!-- 隐藏的座位信息列表 -->
      <el-row type="flex" justify="space-between" align="middle">
        <el-col :span="4">
          低价推荐
        </el-col>
        <el-col :span="20">
          <!-- 需要展示多个的座位列表,需要循环 -->
          <el-row
            v-for="(item, index) in data.seat_infos"
            :key="index"
            type="flex"
            justify="space-between"
            align="middle"
            class="flight-sell"
          >
            <el-col :span="16" class="flight-sell-left">
              <span>{{ item.name }}</span> |
              {{ item.supplierName }}
            </el-col>
            <el-col :span="5" class="price">
              ￥{{ item.org_settle_price }}
            </el-col>
            <el-col :span="3" class="choose-button">
              <el-button
                type="warning"
                size="mini"
                @click="purchase(item)"
              >
                选定
              </el-button>
              <p>剩余：{{ item.discount }}</p>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 从父组件传递过来的航班数据
    data: {
      type: Object,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: {}
    }
  },
  data () {
    return {
      toggle: false // 控制详情页面开关的变量
    }
  },
  computed: {
    // 定义计算航班时长的计算属性
    FlightTimes () {
      const depTime = this.data.dep_time.split(':')
      const arrTime = this.data.arr_time.split(':')
      // 计算总的分钟数目
      if (arrTime[0] < depTime[0]) {
        arrTime[0] += 24
      }
      const minutes = (Number(arrTime[0] * 60) + Number(arrTime[1])) - (Number(depTime[0] * 60) + Number(depTime[1]))

      // 向下取整计算小时数
      const hours = Math.floor(minutes / 60)
      // 取余数计算分钟数
      const minute = minutes % 60

      return `${hours}时${minute}分`
    }
  },
  methods: {
    // 控制详情页面展开和关闭的函数
    toggleHandler () {
      this.toggle = !this.toggle
    },

    // 购买选中函数
    purchase (item) {
      this.$router.push({
        path: '/air/purchase',
        query: {
          id: this.data.id,
          seat_xid: item.seat_xid
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
  .flight-item{
    border:1px #ddd solid;
    margin-bottom: 10px;

    .flight-info{
      padding:15px;
      cursor: pointer;

      > div{
        &:first-child, &:last-child{
          text-align: center;
        }
      }
    }

    .flight-info-center{
      padding:0 30px;
      text-align: center;

      .flight-airport{
        strong{
          display: block;
          font-size:24px;
          font-weight: normal;
        }
        span{
          font-size: 12px;
          color:#999;
        }
      }

      .flight-time{
        span{
          display: inline-block;
          padding:10px 0;
          border-bottom: 1px #eee solid;
          color:#999;
        }
      }
    }

    .flight-info-right{

      .sell-price{
        font-size: 24px;
        color:orange;
        margin:0 2px;
      }
    }
  }

  .flight-recommend{
    background: #f6f6f6;
    border-top:1px #eee solid;
    padding:0 20px;

    .flight-sell{
      border-bottom:1px #eee solid;
      padding:10px 0;

      &:last-child{
        border-bottom: none;
      }

      .flight-sell-left{
        font-size: 12px;
        span{
          color:green;
        }
      }

      .price{
        font-size: 20px;
        color:orange;
      }

      .choose-button{
        text-align: center;
        color:#666;
        button{
          display: block;
          width:100%;
          margin-bottom:5px;
        }
      }
    }
  }
</style>
