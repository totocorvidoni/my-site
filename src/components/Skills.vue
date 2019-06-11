<template>
  <div id="skills">
    <transition name="flip" mode="out-in">
      <div class="wrapper" :key="showingFront" :class="showingFront ? 'front' : 'back'">
        <h2>{{ skillsTitle }}</h2>
        <ul>
          <li v-for="skill in activeSkills" :key="skill.name">{{ skill.name }}</li>
        </ul>
        <span class="flip" @click="showingFront = !showingFront">flip↪</span>
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
        { name: "Vue.js", mastery: 80 },
        { name: "Raw Javascript", mastery: 90 },
        { name: "HTML", mastery: 100 },
        { name: "CSS + Sass", mastery: 80 },
        { name: "Webpack", mastery: 60 }
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
      return `${this.showingFront ? "Front" : "Back"}-End`;
    }
  }
};
</script>

<style lang="scss">
#skills {
  background: $grey;
  padding: 2rem;

  & > .wrapper {
    padding: 1em;
    text-align: center;
    border-radius: 0.5em;
    height: 100%;
    margin: auto 0;
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
    position: absolute;
    right: 0;
    bottom: 0;
    color: $grey;
    padding: 1em;
    writing-mode: vertical-lr;
    text-orientation: upright;
    letter-spacing: 0.3em;
    transition: all 200ms ease;

    &:hover {
      cursor: pointer;
      filter: brightness(150%);
    }
  }
}

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
