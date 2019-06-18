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
            <strong class="skill">Wordpress</strong>.
          </p>
          <p>
            My main focus when developing is keeping the codebase as
            <strong>organized</strong> and
            <strong>efficient</strong> as possible while making sure the end product is
            <strong>easy</strong> and
            <strong>enjoyable</strong> for people to use.
          </p>
        </div>
        <div v-else class="description">
          <p>
            I mostly use
            <strong class="skill">Ruby on Rails</strong> using
            <strong class="skill">PostgreSQl</strong> or
            <strong class="skill">MySQL</strong> as database.
          </p>

          <p>Usually I preffer setting the back end as an API for front end apps to use. But there are always exceptions where it makes more sense to focus the action on the server.</p>

          <p>
            Although my main framework is
            <strong class="skill">Rails</strong> I am open to alternatives. I'm currently learning
            <strong class="skill">Node.js</strong> with
            <strong class="skill">Express</strong> and I have even used
            <strong class="skill">Wordpress's REST API</strong> as the back end of a
            <strong class="skill">Vue</strong> based online store.
          </p>
        </div>
        <div class="flip" tabindex="0">- click to flip -</div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "skills-comp",
  data() {
    return {
      showingFront: true
    };
  },

  computed: {
    activeSkills() {
      return this.showingFront ? this.front : this.back;
    },

    skillsTitle() {
      return `${this.showingFront ? "Front" : "Back"} end toolbox`;
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
    // transition: box-shadow 1000ms ease;

    &:hover {
      cursor: pointer;

      .flip {
        filter: brightness(120%);
        transform: scale(1.02);
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
    text-align: center;
  }
}
</style>
