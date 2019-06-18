<template>
  <div id="hero">
    <div class="hello">
      <h1 class="biggest">
        Hello!
        <br>My name is Tomás
      </h1>
      <h2 class="big">and I am a full stack web developer</h2>
      <item-runner
        :items="likes"
        :delay="2000"
        :loops="4"
      >Just a guy trying to make the internet more of an awesome place.</item-runner>
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
      likes: [
        "Let me tell you a little about me...",
        "Self-thought developer",
        "Living in Argentina",
        "Who also graduated in Advertising.",
        "Very detail oriented,",
        "I Love clean code,",
        "People enjoing my apps,",
        "Keeping things simple,",
        "Polished,",
        "Elegant,",
        "Responsive,",
        "Snappy,",
        "Fun"
      ]
    };
  }
};
</script>

<style lang="scss">
#hero {
  display: grid;
  grid-gap: 2em;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.25em;
  align-items: center;
  padding: 2em 0;
  margin: 0 auto;
  max-width: 1500px;
  min-height: 100vh;

  .hello {
    grid-column: 1;
    text-align: end;
  }

  .biggest {
    font-size: 3em;
    margin: 0;
    text-align: end;
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
