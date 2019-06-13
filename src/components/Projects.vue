<template>
  <div id="projects">
    <div class="project-grid">
      <h2 class="title">Some of my projects</h2>
      <project-card v-for="project in projects" :key="project.name" v-bind="project"/>
    </div>
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
  background: $grey;
  width: 100%;

  .project-grid {
    justify-self: stretch;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, 300px);
    grid-template-rows: auto;
    grid-auto-rows: 30rem;
    justify-content: center;
    color: $white;
    margin: 0 auto;
    max-width: 1500px;
    padding: 1em 3em;

    & > .title {
      grid-column: 1 / -1;
      text-align: center;
    }
  }
}
</style>
