<template>

  <b-container fluid>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-input v-model="text1"
                    type="text"
                    style="max-width: 20rem;"
                    placeholder="输入用户名"></b-form-input>

      <b-form-input v-model="text2"
                    type="password"
                    style="max-width: 20rem;"
                    placeholder="请输入密码"></b-form-input>
    </b-form>
  </b-container>

</template>

<script>
  export default {
    data () {
      return {
        show: true,
        text1: ''
      }
    }
  }
</script>
