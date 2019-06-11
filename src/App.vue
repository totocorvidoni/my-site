<template>
  <div id="app">
    <hero-comp/>
    <about-comp/>
    <skills-comp/>
    <projects-comp/>
  </div>
</template>

<script>
import HeroComp from "@/components/Hero.vue";
import AboutComp from "@/components/About.vue";
import SkillsComp from "@/components/Skills.vue";
import ProjectsComp from "@/components/Projects.vue";

export default {
  name: "app",
  components: { HeroComp, AboutComp, SkillsComp, ProjectsComp }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Work+Sans:300,400,400i,700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-size: 16pt;
}

// h1,
// h2,
// h3,
// h4,
// h5,
// h6,
// p {
//   margin: 0;
// }

#app {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 100vh auto auto;
  grid-template-areas:
    "hero     hero     hero     hero"
    "about    about    skills   skills"
    "projects projects projects projects";
  font-family: $base-font;
  color: $grey;
}

#hero {
  grid-area: hero;
}

#about {
  grid-area: about;
}

#skills {
  grid-area: skills;
}

#projects {
  grid-area: projects;
}
</style>
