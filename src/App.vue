<template>
  <div id="app">
    <hero-comp/>
  </div>
</template>

<script>
import HeroComp from "@/components/Hero.vue";

export default {
  name: "app",
  components: { HeroComp }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Work+Sans:300,400,400i,700&display=swap");

* {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

#app {
  display: grid;
  grid-template-rows: 100vh;
  font-family: $base-font;
  color: $grey;
}
</style>
