<template>
  <div id="projects">
    <h2 class="title">Some of my projects</h2>
    <project-card v-for="project in projects" :key="project.name" v-bind="project"/>
  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";
import projectList from "@/assets/projectList";

export default {
  name: "projects-comp",
  components: { ProjectCard },

  data() {
    return {
      projects: projectList
    };
  }
};
</script>

<style lang="scss">
#projects {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: auto;
  grid-auto-rows: 30rem;
  background: $grey;
  color: $white;
  padding: 1em;

  & > .title {
    grid-column: 1 / -1;
    text-align: center;
  }
}
</style>
