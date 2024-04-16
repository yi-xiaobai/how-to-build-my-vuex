<template>
  <div id="app">
    123
    <div>
      {{ this.$store.state.a }}
    </div>
    <div>
      {{ this.$store.getters.getNum }}
    </div>

    <button @click="add">测试commit</button>
    <br />
    <br />
    <button @click="asyncAdd">异步+2</button>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {},
  methods: {
    add() {
      this.$store.commit("change", 10);
    },

    asyncAdd() {
      this.$store.dispatch("asyncIncre", 200);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
