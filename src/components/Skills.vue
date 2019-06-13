<template>
  <div id="skills">
    <transition name="flip" mode="out-in">
      <div class="wrapper" :key="showingFront" :class="showingFront ? 'front' : 'back'">
        <h2 class="title">{{ skillsTitle }}</h2>
        <ul>
          <li v-for="skill in activeSkills" :key="skill.name">{{ skill.name }}</li>
        </ul>
        <span class="flip" @click="showingFront = !showingFront" tabindex="0">- flip -</span>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "skills-comp",
  data() {
    return {
      showingFront: true,
      front: [
        { name: "Vue.js" },
        { name: "Vanilla Javascript" },
        { name: "HTML" },
        { name: "CSS + Sass" },
        { name: "Webpack" }
      ],

      back: [
        { name: "Rails" },
        { name: "Ruby" },
        { name: "PostgreSQl" },
        { name: "MySql" }
      ]
    };
  },

  computed: {
    activeSkills() {
      return this.showingFront ? this.front : this.back;
    },

    skillsTitle() {
      return `${this.showingFront ? "Front" : "Back"}-end skills and tools`;
    }
  }
};
</script>

<style lang="scss">
#skills {
  background: $grey;
  // padding: 1rem 2rem 0;

  & > .wrapper {
    padding: 1em;
    text-align: center;
    height: 100%;
    margin: auto;
  }

  .title {
    margin: 0;
  }

  .front {
    background: $white;
  }

  .back {
    background: $black;
    color: $grey-light;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
  }

  .flip {
    padding: 1em;
  }
}
</style>
