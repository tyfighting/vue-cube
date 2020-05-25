<template>
  <div id="app">
    <Header title="购物车" :showBack="showBack"></Header>
    <transition :name="transitionName">
      <router-view class="route"></router-view>
    </transition>
    <div class="tabbar">
      <cube-tab-bar
        v-model="selectedLabel"
        :data="tabs"
        @change="changeHandler"
      >
      </cube-tab-bar>
    </div>
    <div id="nav" v-show="false">
      <router-link to="/home">Home</router-link> |
      <router-link to="/me">Me</router-link>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  components: { Header },
  data() {
    return {
      tabs: [
        {
          label: "Home",
          icon: "cubeic-home",
          value: "/"
        },
        {
          label: "Cart",
          icon: "cubeic-like",
          value: "/cart"
        },
        {
          label: "Me",
          icon: "cubeic-person",
          value: "/me"
        }
      ],
      selectedLabel: "Home",
      showBack: false,
      transitionName: "route-forward"
    };
  },
  created() {
    // 初始化页签设置，避免页面刷新
    this.selectedLabel = this.$route.path;
  },
  watch: {
    $route(route) {
      // 监听路由变化并动态设置页签选中状态
      this.selectedLabel = route.path;
      this.showBack = this.$routerHistory.canBack();
      this.transitionName = this.$router.transitionName;
    }
  },
  methods: {
    changeHandler(label) {
      this.$router.push(label);
    }
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.tabbar {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1;
  border-top: 1px solid #dedede;
  background: rgb(251, 251, 251);
}
.route-forward-enter-active,
.route-forward-leave-active,
.route-back-enter-active,
.route-back-leave-active {
  transition: transform 0.5s;
}
.route-forward-enter,
.route-back-leave-to {
  transform: translate3d(-100%, 0, 0);
}
.route-forward-leave-to,
.route-back-enter {
  transform: translate(100%, 0, 0);
}
.route {
  position: absolute;
  left: 0;
  top: 44px;
  width: 100%;
}
</style>
