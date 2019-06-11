<template>
  <div class="project-card">
    <img class="cover-picture" :src="pictures[0].url" :alt="pictures[0].alt">
    <div class="card-wrapper">
      <h3 class="name">{{ name }}</h3>
      <p class="description">{{ description}}</p>
      <span v-for="tag in tags">{{ tag }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "project-card",
  props: {
    name: String,
    description: String,
    tags: Array,
    pictures: Array
  }
};
</script>

<style lang='scss'>
.project-card {
  background: $white;
  color: $grey;

  .cover-picture {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .card-wrapper {
    padding: 1em;
    text-align: justify;
    word-break: break-all;
  }
}
</style>
