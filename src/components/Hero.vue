<template>
  <div id="hero">
    <h1 class="big">Hi,</h1>
    <h2>I'm a full-stack web developer.</h2>
    <h3 class="likes">I enjoy...</h3>
    <item-runner
      :items="likes"
      :delay="1500"
      :loops="20"
    >coding efficient and intuitive apps for the user.</item-runner>
  </div>
</template>

<script>
import ItemRunner from "@/components/ItemRunner.vue";

export default {
  name: "hero-comp",
  components: { ItemRunner },
  data() {
    return {
      likes: ["efficent code", "simple designs", "snappy performance"]
    };
  }
};
</script>

<style lang="scss">
#hero {
  display: grid;
  grid-gap: 0.5em;
  align-content: center;
  justify-items: center;

  .big {
    font-size: 5em;
    margin: 0;
  }

  .likes {
    margin-top: 3em;
    color: $green;
  }

  h1,
  h2,
  h3,
  p {
    margin-top: 0;
    margin-bottom: 0;
  }
}
</style>
