<template>
  <div>
    <img class="headerimg" src="./headerimg.png" alt="" />
    <cube-form :model="model" :schema="schema" @submit="submitHandler">
    </cube-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      model: {
        username: "",
        password: "",
      },
      schema: {
        fields: [
          {
            type: "input",
            modelKey: "username",
            label: "用户名",
            props: {
              placeholder: "请输入用户名",
            },
            // 校验规则
            rules: {
              required: true,
              type: "string",
              min: 3,
              max: 15,
            },
            // validating when blur
            trigger: "blur",
            message: {
              required: "用户名不能为空",
              min: "用户名不能少于3个字符",
              max: "用户名不能大于15个字符",
            },
          },
          //密码配置项
          {
            type: "input",
            modelKey: "password",
            label: "密码",
            props: {
              placeholder: "请输入密码",
              type: "password",
              eye: {
                open: false,
              },
            },
            // 校验规则
            rules: {
              required: true,
            },

            trigger: "blur",
          },
          {
            type: "submit",
            label: "注册",
          },
        ],
      },
    };
  },
  methods: {
    submitHandler(e) {
      // 阻止冒泡
      e.preventDefault();
      this.$http
        .get("/api/register", { params: this.model })
        .then((res) => {
          console.log(res.success);
        })
        .catch((err) => {
          console.log("err");
        });
    },
  },
};
</script>
<style lang="stylus">
.headerimg {
  height: 100px;
  width: 200px;
}
</style>