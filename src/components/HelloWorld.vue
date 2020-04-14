<template>
  <div class="hello">
      <div class="content">
          <div class="content-title">数据表单</div>
          <el-table
            :data="tableData"
            border
            :default-sort = "{prop: 'logDate'}"
            style="width: 100%">
            <el-table-column
                prop="logDate"
                label="日期"
                sortable
                width="100">
            </el-table-column>
            <el-table-column
                prop="ctr"
                sortable
                label="平均CTR">
                <template slot-scope="scope">
                    <span>{{scope.row.ctr + '%'}}</span>
                </template>
            </el-table-column>
            <el-table-column
                prop="ecpc"
                sortable
                label="平均CPC">
            </el-table-column>
            <el-table-column
                prop="ecpm"
                sortable
                label="平均CPM">
            </el-table-column>
            <el-table-column
                prop="roi"
                sortable
                label="平均ROI">
            </el-table-column>
            <el-table-column
                prop="alipayInShopNum"
                label="平均展现">
            </el-table-column>
            <el-table-column
                prop="alipayInShopNum"
                label="付款订单">
            </el-table-column>
            <el-table-column
                prop="alipayInshopAmt"
                label="付款订单金额">
            </el-table-column>
            <el-table-column
                prop="click"
                label="平均点击">
            </el-table-column>
            <el-table-column
                prop="charge"
                label="平均花费">
            </el-table-column>
            <el-table-column
                prop="cvr"
                sortable
                label="平均CVR">
            </el-table-column>
            <el-table-column
                prop="gmvInshopNum"
                label="下单订单">
            </el-table-column>
            <el-table-column
                prop="gmvInshopAmt"
                label="下单订单金额">
            </el-table-column>
            <el-table-column
                prop="shopMainCatId"
                label="店铺收藏成本">
            </el-table-column>
            <el-table-column
                prop="campaignModel"
                label="宝贝收藏成本">
            </el-table-column>
        </el-table>
        <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="pageSize"
            layout="prev, pager, next"
            :total="total">
        </el-pagination>
      </div>
      <div class="line">
          <div class="content-title">图形表单</div>
          <ve-line :data="chartData" :settings="chartSettings"></ve-line>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
      this.chartSettings = {
        xAxisType: 'time'
      }
      return {
          tableData:[],
          resData:[],
          lineData:[],
          total:0,
          currentPage:1,
          pageSize:5,
          chartData: {
          columns: ['Date', 'CPM'],
          rows: []
        }
      }
  },
  created() {
      this.getData()
  },
  methods:{
      // 获取数据
      getData(){
        this.$jsonp('https://pm.linkworld.cn/json/test?callback=callbackFunc').then( res=> {
            this.resData = res
            this.total = res.length
            this.fetchData()
          }).catch( error => {
              console.log(error)
        })
      },
      // 分页-数据处理
      fetchData(){
          this.tableData = this.resData.slice((this.currentPage-1) * this.pageSize,this.currentPage * this.pageSize)
          this.lineData = []
          for(let i = 0; i < this.tableData.length; i++){
              let obj = {
                  Date: this.tableData[i].logDate,
                  CPM:this.tableData[i].ecpm
              }
              this.lineData.push(obj)
          }
          this.chartData.rows = this.lineData
      },
      handleSizeChange(val) {
        this.pagesize = val;
        this.fetchData()
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        this.fetchData()
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .el-pagination {
        margin: 20px 0; 
    }
    .content-title {
        height: 40px;
        text-align: left;
        padding:0 20px;
        background: #f5f7fa;
        color:#909399;
        font-weight: bold;
        line-height: 40px;
        border:1px solid #f4f4f5;
        border-bottom: none;
    }
    .line {
        border:1px solid #f4f4f5;
    }
</style>
