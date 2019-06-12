<template>
  <div id="app">
    <header-comp/>
    <hero-comp/>
    <about-comp/>
    <skills-comp/>
    <projects-comp/>
  </div>
</template>

<script>
import HeaderComp from "@/components/Header.vue";
import HeroComp from "@/components/Hero.vue";
import AboutComp from "@/components/About.vue";
import SkillsComp from "@/components/Skills.vue";
import ProjectsComp from "@/components/Projects.vue";

export default {
  name: "app",
  components: { HeaderComp, HeroComp, AboutComp, SkillsComp, ProjectsComp }
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

#header {
  grid-area: header;
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

.flip {
  color: $green;
  letter-spacing: 0.3em;
  transition: all 200ms ease;
  user-select: none;

  &:hover {
    cursor: pointer;
    filter: brightness(120%);
  }
}

// Transitions

.flip-enter-active,
.flip-leave-active {
  transition: all 250ms $rubber-band;
}

.flip-enter,
.flip-leave-to {
  transform: scale(0, 0.95);
}

.flip-enter-to,
.flip-leave {
  transform: scale(1, 1);
}
</style>
