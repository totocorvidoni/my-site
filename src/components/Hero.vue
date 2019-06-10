<template>
  <div id="hero">
    <h1 class="big">Hi,</h1>
    <h2>I'm a full-stack web developer.</h2>
    <h3 class="likes">I like to...</h3>
    <p>code efficently</p>
  </div>
</template>

<script>
export default {
  name: "hero-comp"
};
</script>

<style lang="scss">
#hero {
  display: grid;
  grid-gap: 0.5em;
  place-content: center;
  justify-items: center;

  .big {
    font-size: 5em;
    margin: 0;
  }

  .likes {
    margin-top: 3em;
  }
}
</style>
