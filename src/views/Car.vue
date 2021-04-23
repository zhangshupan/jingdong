<template>
  <div>
    <div class="goods" v-for="(item, index) in cararr" :key="index">
      {{ item.title }}
      <div class="goodsright">
        <i class="cubeic-remove" @click="removeCar"></i>
        <span>{{ item.carCount }}</span>
        <i class="cubeic-add" @click="addCar"></i>
      </div>
    </div>
    <cube-button style="margin: 10px 0">下单</cube-button>
    <cube-button style="margin: 10px 0" @click="clearCar"
      >清空购物车</cube-button
    >
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      //cararr: [],
    };
  },
  //计算属性computed
  computed: {
    ...mapState({
      cararr: (state) => state.cararry,
    }),
  },
  methods: {
    //减少商品
    removeCar(index) {
      this.$store.commit("carremove", index);
    },
    //增加商品
    addCar(index) {
      this.$store.commit("caradd", index);
    },
    //清空购物车
    clearCar() {
      this.$store.commit("carclear");
    },
  },
};
</script>
<style lang="stylus">
.goods {
  padding: 10px;
  text-align: left;
}

.goodsright {
  float: right;
}

i {
  font-size: 14px;
}
</style>