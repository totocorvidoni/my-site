<template>
  <header id="header">
    <button class="button language" @click="toggleLang">{{ langTag }}</button>
    <nav-comp />
    <p class="tagline">{{ $t('header.tagline') }}</p>
    <a href="#contact" class="link">{{ $t('header.contact') }}</a>
  </header>
</template>

<script>
import NavComp from "@/components/Navigator.vue";

export default {
  name: "header-comp",
  components: { NavComp },

  methods: {
    toggleLang() {
      const lang = this.$i18n.locale == "en" ? "es" : "en";
      this.$i18n.locale = lang;
      this.$validator.localize(lang);
    }
  },

  computed: {
    langTag() {
      return this.$i18n.locale == "en" ? "English" : "Español";
    }
  }
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

  .language {
    background: $orange;
    color: $white;
    border: none;
    font-weight: 700;
    text-transform: uppercase;

    &:hover {
      cursor: pointer;
    }
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
