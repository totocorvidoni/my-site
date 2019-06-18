<template>
  <div id="skills">
    <transition name="flip" mode="out-in">
      <div
        class="wrapper"
        :key="showingFront"
        :class="showingFront ? 'front' : 'back'"
        @click="showingFront = !showingFront"
      >
        <h2 class="title">{{ skillsTitle }}</h2>
        <div v-if="showingFront" class="description">
          <p>
            I mostly develop
            <strong class="skill">Vue.js</strong> web apps setting them up using
            <strong class="skill">Webpack</strong> and
            <strong class="skill">npm</strong>.
            The building blocks I use according the projects needs are
            <strong
              class="skill"
            >HTML5</strong>,
            <strong class="skill">CSS3 + Sass</strong> and
            <strong class="skill">Javascript</strong>.
          </p>
          <p>
            I also have also worked on projects using
            <strong class="skill">React</strong> and
            <strong class="skill">Wordpress</strong>
          </p>
          <p>
            My main focus when developing are keeping the codebase
            <strong>organized</strong> and
            <strong>efficient</strong> as possible and making as
            <strong>easy</strong> as possible for the user to use the app.
          </p>
        </div>
        <div v-else class="description">
          <p>
            I mostly use
            <strong class="skill">Ruby on Rails</strong> using
            <strong class="skill">PostgreSQl</strong> or
            <strong class="skill">MySQL</strong> as database.
          </p>
        </div>
        <div class="flip" tabindex="0">- flip -</div>
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
      return `My ${this.showingFront ? "front" : "back"} end toolbox`;
    }
  }
};
</script>

<style lang="scss">
#skills {
  width: 80%;
  justify-self: center;

  & > .wrapper {
    padding: 1em;
    border-radius: 0.5em;
    height: 100%;
    margin: auto;
    transition: all 200ms $rubber-band;

    &:hover {
      cursor: pointer;

      .flip {
        filter: brightness(120%);
      }
    }
  }

  .title {
    margin: 0;
  }

  .front {
    background: $grey-lightest;
  }

  .back {
    background: $black;
    color: $grey-light;
  }

  .flip {
    padding: 0.5em;
    text-align: end;
  }
}
</style>
