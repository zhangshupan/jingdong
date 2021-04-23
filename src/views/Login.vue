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
            },
            // 校验规则
            rules: {
              required: true,
            },

            trigger: "blur",
          },
          {
            type: "submit",
            label: "登录",
          },
        ],
      },
    };
  },
  methods: {
    async submitHandler(e) {
      // 阻止冒泡
      e.preventDefault();
      try {
        const result = await this.$http.get("/api/login", {
          params: this.model,
        });
        if (result.code == "0") {
          this.$store.commit("settoken", result.token);
          window.localStorage.setItem("token", result.token);

          //判断路由是否带参，带参就去重定向地址，否则就去首页
          if (this.$route.query.redirect) {
            this.$router.replace({ path: this.$route.query.redirect });
          } else {
            this.$router.replace({ path: "/botnav/index" });
          }
        } else {
          alert(result.message);
        }
      } catch (err) {
        console.log(err);
      }
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