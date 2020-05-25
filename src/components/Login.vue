<template>
  <div class="login">
    <cube-form
      :model="model"
      :schema="schema"
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
    submitHandler(e) {
      e.preventDefault();
      this.$store
        .dispatch("login", this.model)
        .then(code => {
          if (code) {
            const path = this.$route.query.redirect;
            this.$router.push(path);
          }
        })
        .catch(err => {
          const toast = this.$createToast({
            time: 1000,
            txt: err,
            type: "error"
          });
          toast.show();
        });
    }
  }
};
</script>

<style>
</style>