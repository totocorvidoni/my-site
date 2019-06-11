<template>
  <div id="projects">
    <h2 class="title">Some of my projects</h2>
    <project-card v-for="project in projects" :key="project.name" v-bind="project"/>
  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";

export default {
  name: "projects-comp",
  components: { ProjectCard },

  data() {
    return {
      projects: [
        {
          name: "Placeholder Project 1",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut soluta eligendi, autem tempore sed quisquam, deleniti exercitationem deserunt dolore provident rerum maxime doloribus laboriosam excepturi adipisci? Iure placeat officiis maiores?",
          tags: ["tag1", "tag two", "longer tag", "tag4"],
          pictures: [
            {
              url: require("@/assets/images/picture.png"),
              alt: "placeholder alternate text."
            },
            {
              url: require("@/assets/images/picture.png"),
              alt: "placeholder alternate text."
            },
            {
              url: require("@/assets/images/picture.png"),
              alt: "placeholder alternate text."
            },
            {
              url: require("@/assets/images/picture.png"),
              alt: "placeholder alternate text."
            }
          ]
        },
        {
          name: "Placeholder Project 2",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut soluta eligendi, autem tempore sed quisquam, deleniti exercitationem deserunt dolore provident rerum maxime doloribus laboriosam excepturi adipisci? Iure placeat officiis maiores?",
          tags: ["tag1", "tag two", "longer tag", "tag4"],
          pictures: [
            {
              url: require("@/assets/images/picture.png"),
              alt: "placeholder alternate text."
            },
            {
              url: require("@/assets/images/picture.png"),
              alt: "placeholder alternate text."
            },
            {
              url: require("@/assets/images/picture.png"),
              alt: "placeholder alternate text."
            },
            {
              url: require("@/assets/images/picture.png"),
              alt: "placeholder alternate text."
            }
          ]
        },
        {
          name: "Placeholder Project 3",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut soluta eligendi, autem tempore sed quisquam, deleniti exercitationem deserunt dolore provident rerum maxime doloribus laboriosam excepturi adipisci? Iure placeat officiis maiores?",
          tags: ["tag1", "tag two", "longer tag", "tag4"],
          pictures: [
            {
              url: require("@/assets/images/picture.png"),
              alt: "placeholder alternate text."
            },
            {
              url: require("@/assets/images/picture.png"),
              alt: "placeholder alternate text."
            },
            {
              url: require("@/assets/images/picture.png"),
              alt: "placeholder alternate text."
            },
            {
              url: require("@/assets/images/picture.png"),
              alt: "placeholder alternate text."
            }
          ]
        },
        {
          name: "Placeholder Project 4",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut soluta eligendi, autem tempore sed quisquam, deleniti exercitationem deserunt dolore provident rerum maxime doloribus laboriosam excepturi adipisci? Iure placeat officiis maiores?",
          tags: ["tag1", "tag two", "longer tag", "tag4"],
          pictures: [
            {
              url: require("@/assets/images/picture.png"),
              alt: "placeholder alternate text."
            },
            {
              url: require("@/assets/images/picture.png"),
              alt: "placeholder alternate text."
            },
            {
              url: require("@/assets/images/picture.png"),
              alt: "placeholder alternate text."
            },
            {
              url: require("@/assets/images/picture.png"),
              alt: "placeholder alternate text."
            }
          ]
        },
        {
          name: "Placeholder Project 5",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut soluta eligendi, autem tempore sed quisquam, deleniti exercitationem deserunt dolore provident rerum maxime doloribus laboriosam excepturi adipisci? Iure placeat officiis maiores?",
          tags: ["tag1", "tag two", "longer tag", "tag4"],
          pictures: [
            {
              url: require("@/assets/images/picture.png"),
              alt: "placeholder alternate text."
            },
            {
              url: require("@/assets/images/picture.png"),
              alt: "placeholder alternate text."
            },
            {
              url: require("@/assets/images/picture.png"),
              alt: "placeholder alternate text."
            },
            {
              url: require("@/assets/images/picture.png"),
              alt: "placeholder alternate text."
            }
          ]
        },
        {
          name: "Placeholder Project 6",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut soluta eligendi, autem tempore sed quisquam, deleniti exercitationem deserunt dolore provident rerum maxime doloribus laboriosam excepturi adipisci? Iure placeat officiis maiores?",
          tags: ["tag1", "tag two", "longer tag", "tag4"],
          pictures: [
            {
              url: require("@/assets/images/picture.png"),
              alt: "placeholder alternate text."
            },
            {
              url: require("@/assets/images/picture.png"),
              alt: "placeholder alternate text."
            },
            {
              url: require("@/assets/images/picture.png"),
              alt: "placeholder alternate text."
            },
            {
              url: require("@/assets/images/picture.png"),
              alt: "placeholder alternate text."
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss">
#projects {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  background: $grey;
  color: $white;
  padding: 1em;

  & > .title {
    grid-column: 1 / -1;
    text-align: center;
  }
}
</style>
