import axios from "axios";
export default function(vm) {
  axios.interceptors.request.use((config) => {
    // 设置请求拦截器
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  });
  axios.interceptors.response.use(null, (err) => {
    if (err.response.status == 401) {
      vm.$store.dispatch("logout");
      vm.$router.push("/login");
    }
    return Promise.reject(err);
  });
}
