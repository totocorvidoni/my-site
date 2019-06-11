<template>
  <div class="project-card">
    <img :src="pictures[0].url" :alt="pictures[0].alt">
    <h3>{{ name }}</h3>
    <p>{{ description}}</p>
    <span v-for="tag in tags">{{ tag }}</span>
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
</style>
