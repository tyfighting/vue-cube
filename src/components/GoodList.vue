<template>
  <div class="goodList">
    <div v-for="good in goods" :key="good.id" class="list">
      <div class="left">
        <img :src="good.img" />
      </div>
      <div class="content">
        <p>{{ good.title }}</p>
        <p>
          <span>{{ good.count }}</span>
          <span>{{ good.price }}</span>
        </p>
      </div>
      <div class="right">
        <i class="cubeic-add" @click="addCart($event)"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["goods"],
  methods:{
    addCart(e){      
      this.$emit('addCart',e.target)
    }
  }
};
</script>

<style lang="scss" scoped>
.goodList {
  margin-bottom: 50px;
  .list {
    display: flex;
    box-shadow: 0px 1px 1px 3px #f4f4f4;
    margin-bottom: 3px;
    .left {
      flex: 1.5;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .content {
      display: flex;
      flex: 3;
      text-align: left;
      justify-content: center;
      flex-direction: column;
      p {
        padding: 10px 10px;
      }
    }
    .right {
      display: flex;
      flex: 1;
      justify-content: center;
      flex-direction: column;
    }
  }
}
</style>
