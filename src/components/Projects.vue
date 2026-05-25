<template>
  <div id="projects">
    <h2 class="title">{{ $t("projects.title") }}</h2>
    <div class="project-grid">
      <project-card v-for="project in projects" :key="project.name" v-bind="project" />
    </div>
  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";
import projectListEn from "@/assets/projectListEn";
import projectListEs from "@/assets/projectListEs";

export default {
  name: "projects-comp",
  components: { ProjectCard },

  computed: {
    projects() {
      return this.$i18n.locale == "es" ? projectListEs : projectListEn;
    }
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
    display: grid;
    grid-template-columns: repeat(3, 1fr); // Always 3 per row, each filling its column.
    gap: 1em;
    color: $white;
    margin: 0 auto;
    padding: 1em;
    max-width: 1100px;

    & > * {
      min-width: 0; // Let cards shrink to fit their column instead of overflowing.
      height: 750px;
    }

    @media screen and (max-width: 770px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 500px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
