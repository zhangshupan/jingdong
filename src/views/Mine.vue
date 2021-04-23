<template>
  <div>
    <img class="headerimg" src="./headerimg.png" alt="" />
    <ul>
      <li
        v-for="item in minearry"
        @click="itemclick(item)"
        :key="item.lable"
        class="mineitem"
      >
        <span class="minetile">{{ item.lable }}</span>
        <i class="cubeic-arrow"></i>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      minearry: [
        { lable: "商品收藏" },
        { lable: "我的足迹" },
        { lable: "我的订单" },
        { lable: "店铺收藏" },
        { lable: "退出", type: "exit" },
      ],
    };
  },
  methods: {
    itemclick(item) {
      if (item.type == "exit") {
        this.$store.commit("settoken", "");
        localStorage.removeItem("token");
        this.$router.push({ path: "/login" });
      }
    },
  },
};
</script>
<style lang="stylus">
.mineitem {
  font-size: 0.373333rem;
  text-align: left;
  height: 1.333333rem;
  line-height: 1.333333rem;
  padding-left: 7%;
  border-bottom: 1px solid #eee;
}

.minetile {
  display: inline-block;
  width: 90%;
}

.headerimg {
  height: 100px;
  width: 200px;
}
</style>