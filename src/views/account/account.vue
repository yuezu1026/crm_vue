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

  .title-cell-class-name-test{
    background-color: #f60;
    color:#fff;
  }
  .column-cell-class-name-test{
    background-color: #187;
  }
  .column-cell-class-name-test .v-table-body-cell{
    border-color: #187;
  }
  .column-cell-class-name-test2{
    background-color: #2db7f5;
    font-weight: bold;
  }
  .column-cell-class-name-test2 .v-table-body-cell{
    border-color: #2db7f5;
  }

</style>
<script>

  import tableDate from '../../mock/tableData2.js'

  export default{
    data(){
      return {
        pageIndex:1,
        pageSize:5,
        totalCount:0,
        tableConfig: {
          multipleSort: false,
          tableData: [],
          titleRows: [
            [
              {fields: ['id'], title: 'ID', titleAlign: 'center'},
              {fields: ['username'], title: '用户名', titleAlign: 'center',titleCellClassName:'title-cell-class-name-test'},
              {fields: ['password'], title: '密码', titleAlign: 'center'}
            ]
          ],
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
        let url = '/reg/register/findByPage/'+this.pageIndex+'/'+ this.pageSize
        this.$api.get(url, null, res => {
          this.tableConfig.tableData = res.data
          this.totalCount = res.count
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
