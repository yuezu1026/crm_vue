<template>
  <div>
    <v-table is-vertical-resize=""
             :vertical-resize-offset="60" is-horizontal-resize style="width:100%"
             :multiple-sort="false" :min-height="350" even-bg-color="#f2f2f2"
             :title-rows="tableConfig.titleRows"
             :columns="tableConfig.columns"
             :table-data="tableConfig.tableData" row-hover-color="#eee" row-click-color="#edf7ff" @sort-change="sortChange"
             :paging-index="(pageIndex-1)*pageSize">

    </v-table>

    <div class="mt20 mb20 bold"></div>
    <v-pagination @page-change="pageChange" @page-size-change="pageSizeChange" :total="totalCount" :page-size="pageSize" :layout="['total', 'prev', 'pager', 'next', 'sizer', 'jumper']"></v-pagination>
  </div>

</template>




<style>
  .title-cell-class-name-test1 {
    background-color: #2db7f5;
    color:#fff;
  }
  .title-cell-class-name-test2 {
    background-color: #f60;
    color:#fff;
  }
</style>
<script>

  import tableDate from '../../mock/tableData2.js'

  export default{
    data(){
      return {
        pageIndex:1,
        pageSize:2,
        totalCount:0,
        tableConfig: {
          multipleSort: false,
          tableData: [],
          columns: [

            {field: 'id', width: 100, columnAlign: 'center', isFrozen: true},
            {field: 'username', width: 100, columnAlign: 'center', isFrozen: true},
            {field: 'password', width: 90, columnAlign: 'center', isFrozen: false,isResize:true}

          ]
        }
      }
    },
    methods:{
      getTableData(){

      // this.tableConfig.tableData = tableDate.slice((this.pageIndex-1)*this.pageSize,(this.pageIndex)*this.pageSize)
      let url = '/reg/register/findByPage/'+this.pageIndex+'/'+ this.pageSize
        debugger

       this.$api.get(url, null, r => {
          debugger
          this.tableConfig.tableData = r.data
          this.totalCount = r.count
        })
      },
      pageChange(pageIndex){

        this.pageIndex = pageIndex;
        this.getTableData();
        console.log(pageIndex)
      },
      pageSizeChange(pageSize){

        this.pageIndex = 1;
        this.pageSize = pageSize;
        this.getTableData();
      },
      sortChange(params){

        if (params.height.length > 0){

          this.tableConfig.tableData.sort(function (a, b) {

            if (params.height === 'asc'){

              return a.height - b.height;
            }else if(params.height === 'desc'){

              return b.height - a.height;
            }else{

              return 0;
            }
          });
        }
      },
    },
    created(){
      this.getTableData();
    }
  }
</script>
