<template>
  <div class="project-card">
    <transition name="flip" mode="out-in">
      <div v-if="showingFront" class="card-front" key="front">
        <img
          class="image"
          :src="coverImage.thumb"
          :alt="coverImage.alt"
          @click="showingFront = false"
        />
        <div class="card-wrapper">
          <h3 class="name">{{ name }}</h3>
          <div class="description" v-html="description"></div>
          <div class="tag-wrapper">
            <base-tag v-for="tag in tags">{{ tag }}</base-tag>
          </div>
          <div class="flip" @click="showingFront = false" tabindex="0">- flip -</div>
        </div>
      </div>
      <div v-else class="card-back" key="back">
        <div class="images-wrapper">
          <vue-pure-lightbox
            v-for="(image, index) in images"
            class="image-wrapper"
            :thumbnail="image.thumb"
            :images="fullImages"
            :open-at-index="index"
          />
        </div>
        <div class="links">
          <a :href="links.live" target="_blank" rel="nooppener norefferer" class="link">
            <img src="@/assets/images/door-open-solid.svg" alt="An open door" class="icon" />
            <div class="link-text">Visit Site</div>
          </a>
          <a :href="links.repo" target="_blank" rel="nooppener norefferer" class="link">
            <octicon name="mark-github" class="icon" />
            <div class="link-text">Source Code</div>
          </a>
        </div>
        <div class="flip" @click="showingFront = true" tabindex="0">- flip -</div>
      </div>
    </transition>
  </div>
</template>

<script>
import BaseTag from "@/components/base/Tag.vue";

import Octicon from "vue-octicon/components/Octicon.vue";
import "vue-octicon/icons/mark-github";

import VuePureLightbox from "vue-pure-lightbox";
import styles from "@/scss/lightbox.scss";

export default {
  name: "project-card",
  components: { VuePureLightbox, BaseTag, Octicon },
  props: {
    name: String,
    links: Object,
    description: String,
    tags: Array,
    images: Array
  },

  data() {
    return {
      showingFront: true
    };
  },

  computed: {
    coverImage() {
      return this.images[0];
    },

    fullImages() {
      return this.images.map(image => image.full);
    }
  }
};
</script>

<style lang='scss'>
.project-card {
  display: flex;

  // Front side
  .card-front {
    display: flex;
    flex-flow: column;
    background: $white;
    color: $grey;
  }

  .image {
    max-width: 100%;
    height: 200px;
    object-fit: cover;

    &:hover {
      cursor: pointer;
    }
  }

  .card-wrapper {
    flex-grow: 2;
    display: flex;
    flex-flow: column;
    padding: 1em;
  }

  .name {
    text-align: center;
    margin: 0 0 1em;
  }

  .description {
    line-height: 1.25em;
    margin-bottom: 0.5em;
    height: 350px;
    overflow-y: auto;

    p {
      margin: 0.25em;
      font-size: 0.9em;
    }

    &::-webkit-scrollbar {
      width: 0.25rem;
      border-radius: 0.25em;
    }

    &::-webkit-scrollbar-thumb {
      background-color: $green;
    }

    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px rgba($color: $black, $alpha: 0.5);
    }
  }

  .tag-wrapper {
    margin-top: auto;
    margin-bottom: 0.5em;
  }

  // Backside

  .card-back {
    display: flex;
    flex-flow: column;
    align-content: flex-start;
    background: $black;
    height: 100%;
    padding: 1em;
  }

  .images-wrapper {
    height: 80%;
  }

  .image-wrapper {
    height: 25%;
    position: relative;

    &:last-of-type > .lightbox__thumbnail > img {
      border-bottom: 2px solid $grey-light;
    }
  }

  .links {
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    padding: 0.5em 0;
    grid-gap: 0.25em;
  }

  .link {
    color: $grey-light;
    padding: 0.5em;
    text-decoration: none;
    font-size: 0.8em;
    transition: $link;

    &:hover {
      filter: brightness(110%);
    }
  }

  .icon {
    display: block;
    color: $orange;
    height: 32px;
    width: 32px;
    margin: 0 auto;
  }

  .link-text {
    background: $orange;
    color: $black;
    padding: 0.25em 0.5em;
    border-radius: 0.5em;
  }

  .flip {
    margin-top: auto;
    text-align: center;
    width: 100%;
  }
}
</style>
