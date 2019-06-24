<template>
  <header id="header">
    <nav-comp/>
    <p class="tagline">Want me to make something awesome for you?</p>
    <a href="#contact" class="link">Let's get in touch!</a>
  </header>
</template>

<script>
import NavComp from "@/components/Navigator.vue";

export default {
  name: "header-comp",
  components: { NavComp }
};
</script>

<style lang="scss">
#header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-content: center;
  background: $white;
  padding: 0.2em 0.5em;
  z-index: 100;
  text-align: end;
  border-right: 4px solid $orange;
  border-left: 4px solid $orange;
  color: $grey-light;
  font-size: 0.8em;

  & > .tagline {
    flex-grow: 2;
    margin: 0 0.5em 0 0;
    font-style: italic;
    margin: auto 0;
  }

  & > .link {
    flex-grow: auto;
    margin: auto 0 auto 0.25em;
  }
}

@media screen and (max-width: 770px) {
  #header {
    & > .tagline {
      display: none;
    }

    & > .link {
      flex-grow: 2;
    }
  }
}
</style>
