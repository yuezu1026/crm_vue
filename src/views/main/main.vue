<template>
  <div>
    <h3>所有注册用户</h3>
    <ul>
      <li v-for="item in list">
        {{item.username}}
      </li>
    </ul>
  </div>
</template>

<style>
  ul{padding: 0;}
  ul li{list-style: none;}
</style>

<script>
  export default{
    data () {
      return {
        list: []
      }
    },
  //  mounted(){
    //  this.$http.get('http://localhost:9008/register/getUsers').then((res)=>{
    //    debugger;
    //    this.list = res.data
    //  })
    //  debugger;

   // },
    created(){
      this.getData()
    },
    methods: {
      getData () {
        this.$api.get('/reg/register/getUsers', null, r => {
          debugger
          this.list = r.data
        })
      }
    }
  }
</script>
