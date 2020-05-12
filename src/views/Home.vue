<template>
  <div class="home">
    <cube-button @click="logout" v-if="$store.state.isLogin">注销</cube-button>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      model: {
        name: "",
        password: ""
      },
      schema: {
        fields: [
          {
            type: "input",
            modelKey: "name",
            label: "姓名",
            props: {
              placeholder: "请输入用户名"
            },
            trigger: "blur"
          },
          {
            type: "input",
            modelKey: "password",
            label: "密码",
            props: {
              placeholder: "请输入密码"
            },
            trigger: "blur"
          },
          {
            type: "submit",
            label: "submit"
          }
        ]
      }
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>
