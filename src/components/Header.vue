<template>
  <div id="header">
    <nav-comp/>
    <p>Want me to make something awesome for you?</p>
    <a
      href="mailto:totocorvidoni@gmail.com"
      target="_blank"
      rel="nooppener norefferer"
    >Let's get in touch!</a>
  </div>
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
  color: $grey-light;
  font-size: 0.7em;

  & > p {
    flex-grow: 2;
    margin: 0 0.5em 0 0;
    font-style: italic;
    margin: auto 0;
  }

  & > a {
    color: $grey-light;
    transition: $link;
    color: $orange;
    text-decoration: none;
    margin: auto 0 auto 0.25em;

    &:visited {
      color: $orange;
    }

    &:active {
      transform: scale(0.95);
    }

    &:hover {
      text-decoration: underline;
      filter: brightness(1.1);
    }
  }
}
</style>
