import Vue from "vue";
import Vuex from "vuex";
import us from "../../server/user";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
  },
  mutations: {
    login(state, b) {
      state.isLogin = b;
    },
  },
  actions: {
    login({ commit }, user) {
      return us.login(user).then((res) => {
        const { code, token } = res.data;
        if (code) {
          commit("login", true);
          localStorage.setItem("token", token);
        }
        return code;
      });
    },
  },
  modules: {},
});
