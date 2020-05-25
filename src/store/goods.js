import gs from "../service/goods";

export default {
  getters: {
    // 添加一个goods属性，将对象形式转化为数组形式便于渲染
    goods: (state) => {
      return state.keys
        .map((key) => state.goodsInfo[key])
        .reduce((pre, cur) => {
          return pre.concat(cur);
        }, []);
    },
  },
  state: {
    slider: [],
    goodsInfo: {},
    keys: [],
  },
  mutations: {
    getGoods(state, { slider, goodsInfo, keys }) {
      state.slider = slider;
      state.goodsInfo = goodsInfo;
      state.keys = keys;
    },
  },
  actions: {
    getGoods({ state, commit }) {
      if (!state.keys.length) {
        // 没有数据去获取
        gs.getGoodsInfo().then((goodsInfo) => {
          commit("getGoods", goodsInfo);
        });
      }
    },
  },
};
