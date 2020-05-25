<template>
  <div class="index">
    <!-- <p>goods:{{ goods }}</p> -->
    <cube-slide :data="slider">
      <cube-slide-item
        v-for="(item, index) in slider"
        :key="item.id"
        @click.native="clickHandler(item, index)"
      >
        <router-link :to="`/detail/${item.id}`">
          <img :src="item.img" />
        </router-link>
      </cube-slide-item>
    </cube-slide>
    <good-list :goods="goods" @addCart="start"></good-list>
    <!-- <cart-anim ref="ca"></cart-anim> -->
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import GoodList from "@/components/GoodList";
import CartAnim from "@/components/CartAnim";
export default {
  name: "Index",
  components: {
    GoodList,
    // CartAnim
  },
  computed: {
    ...mapGetters(["goods"]),
    ...mapState({ slider: state => state.goods.slider })
  },
  created() {
    this.getGoods();
  },
  methods: {
    ...mapActions(["getGoods"]),
    start(e) {
      // 方式1：
      // 调用子组件的方法，ca是上边ref起的名字，start是子组件的方法。
      // this.$refs.ca.start(e)
      // 方式2：
      // const anim = this.$createCartAnim({
      //   onTransitionend(){
      //     anim.remove()
      //   }
      // })
      // anim.start(e)
      // 方式3：
      const anim = this.$create(CartAnim);
      anim.start(e);
      anim.$on("transitionend", anim.remove);
    }
  }
};
</script>

<style lang="scss" scoped>
.cube-slide {
  box-shadow: 0px 1px 1px 10px #f5f6fb;
  margin-bottom: 10px;
  .cube-slide-item img {
    width: 100%;
  }
}
</style>
