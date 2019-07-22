<template>
  <div id="projects">
    <h2 class="title">Projects</h2>
    <div class="project-grid">
      <project-card v-for="project in projects" :key="project.name" v-bind="project" />
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

  .title {
    text-align: center;
    color: $grey-lightest;
    text-transform: uppercase;
    letter-spacing: 0.25em;
    font-size: 2em;
    margin: 0;
    padding-top: 1em;
  }

  .project-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    color: $white;
    margin: 0 auto;
    padding: 1em;

    & > * {
      width: 300px;
      margin: 0.5em;
      height: 750px;
    }
  }
}
</style>
