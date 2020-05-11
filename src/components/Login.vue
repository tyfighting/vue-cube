<template>
  <div class="login">
    <cube-form
      :model="model"
      :schema="schema"
      @validate="validateHandler"
      @submit="submitHandler"
    ></cube-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        user: "",
        password: ""
      },
      schema: {
        fields: [
          {
            type: "input",
            modelKey: "user",
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
    validateHandler() {},
    submitHandler(e) {
      e.preventDefault();
      this.$store.dispatch("login", this.model).then(code => {
        if (code) {
          const path = this.$router.qurey.redirect;
          this.$router.push(path);
        }
      });
    }
  }
};
</script>

<style>
</style>