<template>
  <nav id="navigator">
    <a v-for="link in links" :key="link.ref" class="node-wrapper" :href="link.ref">
      <div class="node"></div>
      <span class="description">{{ link.description }}</span>
    </a>
  </nav>
</template>

<script>
export default {
  name: "nav-comp",

  computed: {
    links() {
      return [
        { ref: "#hero", description: this.$t("navigator.top") },
        { ref: "#projects", description: this.$t("navigator.works") },
        { ref: "#contact", description: this.$t("navigator.contact") }
      ];
    }
  }
};
</script>

<style lang="scss">
#navigator {
  position: relative;
  display: flex;
  font-size: 16pt;
  margin-left: 1em;

  .node-wrapper {
    display: flex;
    border-radius: 50%;
    text-decoration: none;

    &:not(:last-of-type)::after {
      content: "";
      background: $grey-lightest;
      line-height: 0;
      margin: auto -0.25em;
      height: 0.5em;
      transition: $link;
      width: 1em;
    }

    &:hover {
      cursor: pointer;

      .description {
        margin-left: 0.25em;
        opacity: 1;
        transform: translateX(0);
        width: auto;
      }

      &::after {
        opacity: 0;
      }
    }
  }

  .node {
    background: $orange;
    border: 0.25em solid $grey-lightest;
    border-radius: 50%;
    height: 1em;
    width: 1em;
    margin: auto 0;
    transition: $link;
  }

  .description {
    color: $orange;
    white-space: nowrap;
    transition: $link;

    width: 0;
    opacity: 0;
    text-align: start;
    transform: translateX(-50%);
  }
}
</style>
