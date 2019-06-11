<template>
  <transition name="slide" mode="out-in">
    <p class="item" v-if="activeItem < items.length - 1" key="items">{{ items[activeItem] }}</p>
    <p class="item" v-else key="message">code efficient and intuitive apps for the user.</p>
  </transition>
</template>

<script>
export default {
  name: "item-runner",
  props: { items: Array },
  data() {
    return {
      activeItem: 0
    };
  },

  methods: {
    itemStep(index, delay, loops, currentLoop = 0) {
      // console.log(currentLoop, loops, this.items[this.activeItem]);
      this.activeItem = index;
      if (index == this.items.length - 1 && currentLoop != loops) {
        currentLoop += 1;
        index = -1;
        // console.log("index reduced to " + index);
        // console.log(index < this.items.length - 1);
      }

      if (index < this.items.length - 1) {
        // console.log("index evaluated");
        setTimeout(() => {
          this.itemStep(index + 1, delay / 1.2, loops, currentLoop);
        }, delay);
      }
    }
  },

  mounted() {
    setTimeout(() => {
      this.itemStep(this.activeItem, 1000, 5);
    }, 100);
  }
};
</script>

<style lang="scss">
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}

.slide-enter {
  left: 100%;
}

.slide-leave-to {
  right: 100%;
}
</style>
