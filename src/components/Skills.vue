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
        <div v-if="showingFront" class="description" v-html="$t('skills.frontDescription')"></div>
        <div v-else class="description" v-html="$t('skills.backDescription')"></div>
        <div class="flip" tabindex="0">- {{ $t('skills.flip') }} -</div>
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
      return this.showingFront
        ? this.$t("skills.frontTitle")
        : this.$t("skills.backTitle");
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
        filter: brightness(110%);
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
