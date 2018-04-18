<template>

  <b-container fluid class="vertical-center" style="width: 500px;">
    <div>
      <div>
        <h2>用户注册: <b-badge>SCloud</b-badge></h2>
      </div>

      <b-form v-if="showRegister" @submit="onSubmit"  @reset="onReset">
        <b-row class="my-1">
          <b-col sm="10">
            <b-form-input id="tenant_account" v-model="form.tenant_account" type="text" placeholder="输入用户名" style="max-width: 20rem;" required></b-form-input>
          </b-col>
        </b-row>

        <b-row class="my-1">
          <b-col sm="10">
            <b-form-input id="tenant_password" v-model="form.tenant_password" type="password" placeholder="输入密码" style="max-width: 20rem;" required></b-form-input>
          </b-col>
        </b-row>

        <b-row class="my-1">
          <b-col sm="10">
            <b-form-input id="re_tenant_password" v-model="form.re_tenant_password" type="password" placeholder="请再次输入密码" style="max-width: 20rem;" required></b-form-input>
          </b-col>
        </b-row>

        <b-row class="my-2">
          <b-col sm="10">
            <b-button variant="primary" type="submit">注册</b-button>
            <b-button variant="secondary" type="reset">重置</b-button>
            <b-button variant="secondary" v-on:click="toLogin">已有账号？马上登录</b-button>

          </b-col>
        </b-row>
      </b-form>
    </div>
  </b-container>

</template>


<style>
  .vertical-center{
    position: absolute;
    top: 30%;
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
          tenant_account: '',
          tenant_password: '',
          re_tenant_password: '',
        },
        showRegister: true,
        showInfo:''

      }
    },
    methods:{
      onSubmit (evt) {
        evt.preventDefault();
        let tenant_password = this.form.tenant_password
        let re_tenant_password = this.form.re_tenant_password
        if(re_tenant_password != tenant_password){
          alert('两次密码输入不一致，请重新输入 ');
          return;
        }
        let data = {'username':this.form.tenant_account,'password':this.form.tenant_password}
        this.$api.post('/reg/register/add', data, res => {
          if(res.data == "ok"){
            this.showInfo = "注册成功"
            this.form.tenant_account = ''
            this.form.tenant_password = ''
            this.form.re_tenant_password = ''
            setTimeout(function(){
              this.showRegister = false
            }.bind(this),1000)
          }
        })
      },
      onReset (evt) {
        evt.preventDefault();
        this.form.tenant_account = ''
        this.form.tenant_password = ''
        this.form.re_tenant_password = ''
      },
      toLogin(){
        this.$router.push('/')
      }

    },

  }

</script>
