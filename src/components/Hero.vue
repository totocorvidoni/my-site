<template>
  <div id="hero">
    <div class="hello">
      <div class="biggest">
        <h2>Welcome!</h2>
        <h1>My name is Tomás</h1>
      </div>
      <h2 class="big">Full Stack Web Developer</h2>
      <item-runner
        :items="trivia"
        :delay="2500"
        :loops="4"
      >Trying to make the web a little bit more awesome</item-runner>
      <div class="links">
        <a
          href="https://github.com/totocorvidoni"
          target="_blank"
          rel="nooppener norefferer"
          class="link"
          title="Github Profile"
        >
          <octicon name="mark-github" class="icon"/>
          <span class="link-text">GitHub @TotoCorvidoni</span>
        </a>
        <a
          href="https://github.com/totocorvidoni/my-site"
          target="_blank"
          rel="nooppener norefferer"
          class="link"
        >
          <octicon name="repo" class="icon"/>
          <span class="link-text">Portfolio Repository</span>
        </a>
      </div>
    </div>
    <skills-comp/>
    <a class="to-projects" href="#projects">Check out some of my Works ↓</a>
  </div>
</template>

<script>
import ItemRunner from "@/components/ItemRunner.vue";
import SkillsComp from "@/components/Skills.vue";
import Octicon from "vue-octicon/components/Octicon.vue";

import "vue-octicon/icons/repo";
import "vue-octicon/icons/mark-github";
import "vue-octicon/icons/logo-github";

export default {
  name: "hero-comp",
  components: { ItemRunner, SkillsComp, Octicon },
  data() {
    return {
      trivia: [
        "Let me tell you a little about me...",
        "Self-taught developer,",
        "Living in Argentina,",
        "Graduated in Advertising,",
        "Very detail oriented,",
        "I love clean code,",
        "People enjoying my apps,",
        "Preffer things simple,",
        "Polished,",
        "Elegant,",
        "Responsive,",
        "Snappy,",
        "Fun"
      ]
    };
  }
};
</script>

<style lang="scss">
#hero {
  position: relative;
  display: grid;
  grid-gap: 2em;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.25em;
  align-items: center;
  background: linear-gradient(45deg, $background-gradient),
    linear-gradient(135deg, $background-gradient);
  margin: 0 auto;
  min-height: 100vh;
  padding: 2em 0;

  .hello {
    grid-column: 1;
    text-align: end;
    max-width: 1500px;
  }

  .biggest {
    font-size: 1.5em;
    text-align: end;

    h1,
    h2 {
      margin: 0;
    }

    h2 {
      color: $grey-light;
      font-weight: 400;
    }
  }

  .big {
    font-weight: 400;
    margin: 0;
  }

  #skills {
    grid-column: 2;
    grid-row: 1 / -1;
  }

  .links {
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 0.25em;
    justify-content: end;
    margin-top: 0.5em;
  }

  .link {
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 0.5em;
    place-items: center;
    place-content: center;
    background: $orange;
    border-radius: 0.25em;
    font-size: 0.7em;
    padding: 0.5em;
    text-decoration: none;
    transition: $link;

    &:hover {
      filter: brightness(110%);
    }
  }

  .icon {
    // FIXME - sometimes on resize icons don;t adapt to the new space.
    color: $white;
    height: 100%;
    width: auto;
  }

  .link-text {
    color: $white;
    font-weight: 700;
  }

  .to-projects {
    position: absolute;
    bottom: 1em;
    right: 1em;
    background: $white;
    border-radius: 0.25em;
    color: $orange;
    font-size: 0.75em;
    padding: 0.25em;
    text-decoration: none;
    transition: $link;

    &:hover {
      cursor: pointer;
      filter: brightness(110%);
    }
  }
}

@media screen and (max-width: 770px) {
  #hero {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: center;

    .hello {
      grid-column: 1 / -1;
      grid-row: span 1;
    }

    #skills {
      grid-column: 1 / -1;
      grid-row: span 1;
    }
  }
}
</style>
