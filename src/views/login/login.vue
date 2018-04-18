<template>

  <b-container fluid class="vertical-center" style="width: 500px;">
    <div>
      <div>
        <h2>密码登录: <b-badge>SCloud</b-badge></h2>
      </div>

      <b-form v-if="showLogin" @submit="onSubmit">
      <b-row class="my-1">
        <b-col sm="10">
          <b-form-input id="username" v-model="form.username" type="text" placeholder="输入用户名" style="max-width: 20rem;" required></b-form-input>
        </b-col>
      </b-row>

      <b-row class="my-1">
        <b-col sm="10">
          <b-form-input id="password" v-model="form.password" type="password" placeholder="输入密码" style="max-width: 20rem;" required></b-form-input>
        </b-col>
      </b-row>
        <b-row class="my-1">
          <b-col sm="12">
            <b-button variant="primary" type="submit">登录</b-button>
            <b-button variant="secondary" click="ToRegister">没有账号？马上注册</b-button>
          </b-col>
        </b-row>
      </b-form>
    </div>
  </b-container>

</template>


<style>
  .vertical-center{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

</style>

<script>
  import {setCookie,getCookie} from '../../assets/js/cookie.js'
  export default {
    data () {
      return {
        form: {
          username: '',
          password: '',
        },
        showLogin: true

      }
    },
    mounted(){
      /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
      if(getCookie('username')){
        this.$router.push('/home')
      }
    },
    methods:{

      onSubmit (evt) {

        evt.preventDefault();
        alert(JSON.stringify(this.form));

        let data = {'username':this.form.username,'password':this.form.password}
        /*接口请求*/
        this.getData(data)

      },

      login(){
        if(this.username == "" || this.password == ""){
          alert("请输入用户名或密码")
        }else{
          let data = {'username':this.username,'password':this.password}
          /*接口请求*/
          this.getData(data)
        }
      },
      getData (data){
        this.$api.post('/reg/login', data, r => {
          console.log(r)
          /*接口的传值是(-1,该用户不存在),(0,密码错误)，同时还会检测管理员账号的值*/
          let responseData = r.data
          if(responseData == -1){
            this.showInfo = "该用户不存在"
            this.showInfo = true
          }else if(responseData == 0){
            this.showInfo = "密码输入错误"
            this.showInfo = true
          }else if(responseData == 'admin'){
            debugger;
            /*路由跳转this.$router.push*/
            this.$router.push('/main')
          }else{
            this.showInfo = "登录成功"
            this.showInfo = true
            setCookie('username',this.username,1000*60)
            setTimeout(function(){
              this.$router.push('/home')
            }.bind(this),1000)
          }
        })
      },
    }
  }

</script>
