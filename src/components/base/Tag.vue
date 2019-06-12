<template>
  <span class="tag">
    <slot/>
  </span>
</template>

<script>
export default {
  name: "base-tag"
};
</script>

<style lang="scss">
.tag {
  display: inline-block;
  background: $grey-light;
  color: $white;
  padding: 0.25em 0.5em;
  border-radius: 0.5em;
  margin: 0 0.12em;
  font-size: 0.8em;
  white-space: nowrap;
}
</style>
