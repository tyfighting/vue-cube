import us from "../service/user";

export default {
  state: {
    isLogin: localStorage.getItem("token") ? true : false,
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
    logout({ commit }) {
      commit("login", false);
      localStorage.removeItem("token");
    },
  },
};
