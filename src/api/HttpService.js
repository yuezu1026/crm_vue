var axios = require('axios')

let port = 10000;
let host ='://localhost:' + port
let baseURL ="http" + host

let axiosConfig = {
  baseURL,
  timeout:1000
}

let instanceTmp = axios.create(axiosConfig)

export default {
  getAxios: instanceTmp,
  getCancelToken: axios.cancelToken
}
