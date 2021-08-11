<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>订单管理</el-breadcrumb-item>
      <el-breadcrumb-item>订单列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图区域 -->
    <el-card class="box-card">
      <div id="main" style="width: 750px;height:400px;"></div>
    </el-card>
  </div>
</template>

<script>
let echarts = require("echarts");
import _ from "loadsh";
export default {
  data() {
    return {
      // 需要绑定的数据
      options: {
        title: {
          text: "用户来源"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#E9EEF3"
            }
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            boundaryGap: false
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ]
      }
    };
  },
  created() {},
  async mounted() {
    var myChart = echarts.init(document.getElementById("main"));
    const { data: res } = await this.$http.get("reports/type/1");
    if (res.meta.status !== 200) return this.$message.error(res.meta.msg);
    const result = _.merge(res.data, this.options);
    myChart.setOption(result);
  },
  methods: {}
};
</script>
<style lang="less" scoped>
</style>