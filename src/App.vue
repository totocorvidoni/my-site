<template>
  <div id="app">
    <header-comp/>
    <hero-comp/>
    <projects-comp/>
    <contact-comp/>
  </div>
</template>

<script>
import HeaderComp from "@/components/Header.vue";
import HeroComp from "@/components/Hero.vue";
import ProjectsComp from "@/components/Projects.vue";
import ContactComp from "@/components/Contact.vue";

export default {
  name: "app",
  components: {
    HeaderComp,
    HeroComp,
    ProjectsComp,
    ContactComp
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-size: 16pt;
  // scroll-behavior: smooth;
}

#app {
  font-family: $base-font;
  color: $grey;
}

.flip {
  color: $green;
  letter-spacing: 0.3em;
  transition: all 200ms ease;
  user-select: none;

  &:hover,
  &:focus {
    cursor: pointer;
    filter: brightness(110%);
  }

  &:focus {
    outline: none;
  }
}

.link {
  color: $orange;
  text-decoration: none;
  transition: $link;

  &:visited {
    color: $orange;
  }

  &:hover {
    cursor: pointer;
    filter: brightness(110%);
    text-decoration: underline;
  }

  &:active {
    filter: brightness(90%);
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

.slide-enter-active,
.slide-leave-active {
  transition: all 150ms $rubber-band;
}

.slide-enter {
  transform: translateX(75px);
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(-75px);
  opacity: 0;
}
</style>
