<template>
  <div class="wrapper">
    <transition name="slide">
      <p class="item" v-if="showMessage" key="message">
        <slot/>
      </p>
      <p class="item" v-else :key="activeItem">{{ items[activeItem] }}</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: "item-runner",
  props: {
    items: Array,
    delay: Number,
    loops: Number
  },
  data() {
    return {
      activeItem: 0,
      showMessage: false
    };
  },

  methods: {
    // Messages will keep looping increasigly faster until currentLoop == loops,
    // at which point the final message will be displayed.
    itemStep(index, delay, loops, currentLoop = 0) {
      this.activeItem = index;
      if (index == this.items.length - 1 && currentLoop != loops) {
        currentLoop += 1;
        index = -1;
      }

      if (index < this.items.length - 1) {
        // caps looping speeed at 50ms.
        const nextDelay = delay <= 50 ? 50 : delay / 1.2;
        setTimeout(() => {
          this.itemStep(index + 1, nextDelay, loops, currentLoop);
        }, delay);
      } else {
        this.showMessage = true;
      }
    }
  },

  mounted() {
    setTimeout(() => {
      this.itemStep(this.activeItem, this.delay, this.loops);
    }, 1000);
  }
};
</script>

<style lang="scss">
.wrapper {
  position: relative;
  width: 100%;

  p {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 50%;
    text-align: center;
    text-transform: capitalize;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 150ms $rubber-band;
}

.slide-enter {
  transform: translateX(25%);
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(-25%);
  opacity: 0;
}
</style>
