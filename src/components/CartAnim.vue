<template>
  <div class="ball-wrap">
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
    >
      <div class="ball" v-show="show">
        <div class="inner"></div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name:'CartAnim',
  data() {
    return {
      show: false
    };
  },
  methods: {
    start(el) {  
      // 把加号复制给this.el
      this.el = el;
      this.show = true;
    },
    beforeEnter(el) {
      // el是ball
      // this.el是+
      // 获得加号的位置信息：getBoundingClientRect()
      const rect = this.el.getBoundingClientRect();
      //x轴的相对位置(加号的宽度不确定)
      const x = rect.left - window.innerWidth / 2 + rect.width / 2 - 8;
      // y轴的相对位置(10是小球初始的bottom，bottom值是从小球最底部开始算，rect.top是从加号最上边开始算)
      const y = -(window.innerHeight - rect.top - 10 - 16);
      // ball只移动y轴
      el.style.transform = `translate3d(0,${y}px,0)`;
      // inner只移动x轴
      const inner = document.querySelector(".inner");
      inner.style.transform = `translate3d(${x}px,0,0)`;
    },
    enter(el, done) {              
      // 必须重绘  
      document.body.offsetWidth;//0
      //指定动画结束状态
      el.style.transform = "translate3d(0,0,0)";
      const inner = document.querySelector(".inner");
      inner.style.transform = "translate3d(0,0,0)";
      el.addEventListener("transitionend", done);
    },
    afterEnter() {
      this.show = false;
      // el.style.display = "none";
      this.$emit("transitionend");
    }
  }
};
</script>

<style lang="scss" scoped>
.ball-wrap .ball {
  position: fixed;
  left: 50%;
  bottom: 10px;
  z-index: 100000;
  color: red;
  transition: all 0.5s cubic-bezier(0.49, -0.29, 0.75, 0.41);
  .inner {
    width: 16px;
    height: 16px;
    transition: all 0.5s linear;
    background: #f00;
    border-radius: 50%;
  }
}
</style>
