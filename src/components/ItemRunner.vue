<template>
  <div class="wrapper">
    <transition name="slide">
      <div
        class="finish-message"
        v-if="finish"
        key="message"
        @mouseover="hovering = true"
        @mouseleave="hovering = false"
        @click="onFinishClick"
      >
        <transition name="slide">
          <p class="item rewind" v-if="hovering" key="rewind">
            <img src="@/assets/images/rewind.svg" class="rewind-icon"> Rewind?
          </p>
          <p class="item" v-else key="finish">
            <slot/>
          </p>
        </transition>
      </div>
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
      finish: false,
      hovering: false
    };
  },

  methods: {
    // Messages will keep looping increasigly faster until currentLoop == loops,
    // at which point the finish message will be displayed.
    itemStep(index, delay, loops, currentLoop = 0) {
      this.activeItem = index;
      if (index == this.items.length - 1 && currentLoop != loops) {
        currentLoop += 1;
        index = -1;
      }

      if (index < this.items.length - 1) {
        // caps looping speeed at 50ms.
        const nextDelay = delay <= 50 ? 50 : delay / 1.3;
        setTimeout(() => {
          this.itemStep(index + 1, nextDelay, loops, currentLoop);
        }, delay);
      } else {
        this.finish = true;
      }
    },

    onFinishClick() {
      this.finish = false;
      this.itemStep(0, this.delay, this.loops);
    }
  },

  mounted() {
    setTimeout(() => {
      this.itemStep(0, this.delay, this.loops);
    }, 3000);
  }
};
</script>

<style lang="scss">
.wrapper {
  position: relative;
  width: 100%;
  height: 2em;
  margin: 0.25em 0;

  .item {
    position: absolute;
    right: 0;
    color: $green;
    margin: 0;
    text-align: end;
  }

  .finish-message {
    position: absolute;
    width: 100%;
    height: 100%;

    &:hover {
      cursor: pointer;
    }
  }

  .rewind {
    font-weight: 700;
    display: flex;
  }

  .rewind-icon {
    margin: 0 0.25em;
    height: 24px;
    width: 24px;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 150ms $rubber-band;
}

.slide-enter {
  transform: translateX(75px);
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(-75px);
  opacity: 0;
}
</style>
