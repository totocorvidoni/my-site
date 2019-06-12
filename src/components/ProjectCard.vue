<template>
  <div class="project-card">
    <transition name="flip" mode="out-in">
      <div v-if="showingFront" class="card-front" key="front">
        <img class="image" :src="coverImage.url" :alt="coverImage.alt">
        <div class="card-wrapper">
          <h3 class="name">{{ name }}</h3>
          <p class="description">{{ description}}</p>
          <div class="tag-wrapper">
            <base-tag v-for="tag in tags">{{ tag }}</base-tag>
          </div>
          <div class="flip" @click="showingFront = false">- flip -</div>
        </div>
      </div>
      <div v-else class="card-back" key="back">
        <div class="images-wrapper">
          <div class="image-wrapper" v-for="image in images">
            <img :src="image.url" :alt="image.alt" class="image2">
          </div>
        </div>
        <div class="links">
          <a :href="links.live" target="_blank" rel="nooppener norefferer" class="link">
            <img src="@/assets/images/door-open-solid.svg" alt="An open door" class="icon">
            <div class="link-text">Visit Site</div>
          </a>
          <a :href="links.repo" target="_blank" rel="nooppener norefferer" class="link">
            <img src="@/assets/images/github-brands.svg" alt="GitHub Logo" class="icon">
            <div class="link-text">Source Code</div>
          </a>
        </div>
        <div class="flip" @click="showingFront = true">- flip -</div>
      </div>
    </transition>
  </div>
</template>

<script>
import BaseTag from "@/components/base/Tag.vue";

export default {
  name: "project-card",
  components: { BaseTag },
  props: {
    name: String,
    links: Object,
    description: String,
    tags: Array,
    coverImage: Object,
    images: Array
  },

  data() {
    return {
      showingFront: true
    };
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
    max-height: 100%;
    object-fit: cover;
  }

  .card-wrapper {
    flex-grow: 2;
    display: flex;
    flex-flow: column;
    justify-content: center;
    padding: 1em;
  }

  .name {
    text-align: center;
    margin: 0;
  }

  .description {
    height: 100%;
  }

  .tag-wrapper {
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
    position: relative;
    height: 25%;

    img {
      border: 2px solid $grey-light;
      max-height: 100%;
      width: 100%;
      object-fit: cover;
    }

    &:before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba($color: $black, $alpha: 0.2);
      content: "";
    }

    &:first-child img {
      border-top-left-radius: 0.5em;
      border-top-right-radius: 0.5em;
    }

    &:last-child img {
      border-bottom-left-radius: 0.5em;
      border-bottom-right-radius: 0.5em;
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
    transition: all 200ms ease;

    &:hover {
      filter: brightness(120%);
    }
  }

  .icon {
    display: block;
    margin: 0 auto;
    height: 32px;
    width: 32px;
  }

  .link-text {
    background: $orange;
    color: $black;
    padding: 0.25em 0.5em;
    border-radius: 0.5em;
  }

  .flip {
    color: $green;
    letter-spacing: 0.3em;
    margin-top: auto;
    text-align: center;
    transition: all 200ms ease;
    width: 100%;

    &:hover {
      cursor: pointer;
      filter: brightness(120%);
    }
  }
}
</style>
