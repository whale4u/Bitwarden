import axios from 'axios';

// axios 配置
axios.defaults.timeout = 8000;
axios.defaults.baseURL = 'http://localhost:8090';

// http request 拦截器
axios.interceptors.request.use(
  config => {
    console.log('token', token_cache.token);
    if (localStorage.getItem('cache-token')) { //判断token是否存在
      config.headers.Authorization = localStorage.getItem('cache-token');  //将token设置成请求头
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.code === 2002) {
      router.replace('/login');
      console.log("token过期");
    }
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);
export default axios;
