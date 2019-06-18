<template>
  <div id="hero">
    <div class="hello">
      <div class="biggest">
        <h2>Welcome!</h2>
        <h1>My name is Tomás</h1>
      </div>
      <h2 class="big">Full Stack Web Developer</h2>
      <item-runner
        :items="trivia"
        :delay="2500"
        :loops="4"
      >Just a guy trying to make the web a more awesome of a place.</item-runner>
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
      trivia: [
        "Let me tell you a little about me...",
        "Self-thought developer,",
        "Living in Argentina,",
        "Advertising graduate,",
        "Very detail oriented,",
        "I love clean code,",
        "People enjoying my apps",
        "Preffer things simple,",
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
    font-size: 1.5em;
    text-align: end;

    h1,
    h2 {
      margin: 0;
    }

    h2 {
      color: $grey-light;
      font-weight: 400;
    }
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
