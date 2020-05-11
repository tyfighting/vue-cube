<template>
  <div class="home">
    <cube-button @click="showDialog">Button</cube-button>
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
    showDialog() {
      this.$createDialog({
        type: "alert",
        title: "Alert",
        content: "dialog content"
      }).show();
    }
  }
};
</script>
