import axios from "axios";

export default {
  getGoodsInfo() {
    return axios.get("/api/goods").then(({ data }) => {
      const { slider, data: goodsInfo, keys } = data;
      if (data.code) {
        return { slider, goodsInfo, keys };
      } else {
        return null;
      }
    });
  },
};
