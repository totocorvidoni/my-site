<template>
  <div id="navigator">
    <div class="connector"></div>
    <a class="node-wrapper" href="#hero">
      <div class="node"></div>
      <span class="description">to top</span>
    </a>
    <a class="node-wrapper" href="#about">
      <div class="node"></div>
      <span class="description">about me</span>
    </a>
    <a class="node-wrapper" href="#skills">
      <div class="node"></div>
      <span class="description">my skills</span>
    </a>
    <a class="node-wrapper" href="#projects">
      <div class="node"></div>
      <span class="description">my projects</span>
    </a>
    <a class="node-wrapper" href="#contact">
      <div class="node"></div>
      <span class="description">contact me</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "nav-comp"
};
</script>

<style lang="scss">
#navigator {
  position: fixed;
  top: 25%;
  left: 0.5rem;
  font-size: 8pt;
  margin: auto 0;

  .node-wrapper {
    position: relative;
    display: block;
    background: $white-darker;
    border-radius: 50%;
    padding: 0.5em;
    margin: 0.5em 0;
    z-index: 10;

    &:hover {
      cursor: pointer;

      .node, .description {
        filter: brightness(120%);
      }

      .description {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }

  .node {
    background: $orange;
    border-radius: 50%;
    height: 1em;
    width: 1em;
    transition: $link;
  }

  .description {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 125%;
    color: $orange;
    font-weight: 700;
    line-height: 2em;
    white-space: nowrap;
    transition: $link;

    opacity: 0;
    transform: translateX(-25%);
  }

  .connector {
    position: absolute;
    top: 1em;
    right: 0;
    bottom: 1em;
    left: 0;
    background: $white-darker;
    width: 0.5em;
    margin: 0 auto;
    z-index: 5;
  }
}
</style>
