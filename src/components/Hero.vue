<template>
  <div id="hero">
    <div class="hello">
      <h1 class="biggest">Hi, I'm Tomás</h1>
      <h2 class="big">Self-taught full stack web developer.</h2>
      <item-runner
        :items="likes"
        :delay="5000"
        :loops="10"
      >coding efficient and intuitive apps for the user.</item-runner>
    </div>
    <skills-comp/>
  </div>
</template>

<script>
import ItemRunner from "@/components/ItemRunner.vue";
import SkillsComp from "@/components/Skills.vue";

export default {
  name: "hero-comp",
  components: { ItemRunner, SkillsComp },
  data() {
    return {
      likes: ["And I love building stuff.", "I like ", "The notion that "]
    };
  }
};
</script>

<style lang="scss">
#hero {
  display: grid;
  grid-gap: 2em;
  grid-template-columns: 1fr 1fr;
  // grid-template-rows: 1fr 1fr;
  grid-gap: 0.25em;
  align-items: center;
  // justify-items: center;
  padding: 2em 0;
  max-width: 1500px;
  min-height: 100vh;

  .hello {
    // align-self: center;
    grid-column: 1;
    text-align: end;
  }

  .biggest {
    font-size: 3em;
    margin: 0;
  }

  .big {
    font-weight: 400;
    margin: 0;
  }

  #skills {
    grid-column: 2;
  }
}
</style>
