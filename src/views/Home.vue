<template>
  <div class="home">
    <cube-button @click="logout" v-if="$store.state.isLogin">注销</cube-button>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>
