<template>
  <v-table
    is-horizontal-resize
    style="width:100%"
    :columns="columns"
    :table-data="tableData"
    row-hover-color="#eee"
    row-click-color="#edf7ff"
    @on-custom-comp="customCompFunc"
  ></v-table>
</template>

<script>

  import Vue from 'vue'

  export default{
    data() {
      return {
        tableData: [
          {"name":"赵伟","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼"},
          {"name":"李伟","tel":"182*****1538","hobby":"钢琴、书法、唱歌","address":"上海市奉贤区南桥镇立新路12号2楼"},
          {"name":"孙伟","tel":"161*****0097","hobby":"钢琴、书法、唱歌","address":"上海市崇明县城桥镇八一路739号"},
          {"name":"周伟","tel":"197*****1123","hobby":"钢琴、书法、唱歌","address":"上海市青浦区青浦镇章浜路24号"},
          {"name":"吴伟","tel":"183*****6678","hobby":"钢琴、书法、唱歌","address":"上海市松江区乐都西路867-871号"}
        ],
        columns: [
          {
            field: 'custome', title:'序号', width: 50, titleAlign: 'center', columnAlign: 'center',
            formatter: function (rowData,rowIndex,pagingIndex,field) {
              return rowIndex < 3 ? '<span style="color:red;font-weight: bold;">' + (rowIndex + 1) + '</span>' : rowIndex + 1
            }, isFrozen: true,isResize:true
          },
          {field: 'name', title:'姓名', width: 80, titleAlign: 'center',columnAlign:'center',isResize:true},
          {field: 'tel', title: '手机号码', width: 150, titleAlign: 'center',columnAlign:'center',isResize:true},
          {field: 'hobby', title: '爱好', width: 150, titleAlign: 'center',columnAlign:'center',isResize:true},
          {field: 'address', title: '地址', width: 230, titleAlign: 'center',columnAlign:'left',isResize:true},
          {field: 'custome-adv', title: '操作',width: 200, titleAlign: 'center',columnAlign:'center',componentName:'table-operation',isResize:true}
        ]

      }
    },
    methods:{
      customCompFunc(params){

        console.log(params);

        if (params.type === 'delete'){ // do delete operation

          this.$delete(this.tableData,params.index);

        }else if (params.type === 'edit'){ // do edit operation

          alert(`行号：${params.index} 姓名：${params.rowData['name']}`)
        }

      }
    }
  }

  // 自定义列组件
  Vue.component('table-operation',{
    template:`<span>
        <a href="" @click.stop.prevent="update(rowData,index)">编辑</a>&nbsp;
        <a href="" @click.stop.prevent="deleteRow(rowData,index)">删除</a>
        </span>`,
    props:{
      rowData:{
        type:Object
      },
      field:{
        type:String
      },
      index:{
        type:Number
      }
    },
    methods:{
      update(){

        // 参数根据业务场景随意构造
        let params = {type:'edit',index:this.index,rowData:this.rowData};
        this.$emit('on-custom-comp',params);
      },

      deleteRow(){

        // 参数根据业务场景随意构造
        let params = {type:'delete',index:this.index};
        this.$emit('on-custom-comp',params);

      }
    }
  })
</script>
