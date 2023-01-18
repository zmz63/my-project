<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <svg class="svg-icon">
    <use :xlink:href="`#icon-${props.name}`" />
  </svg>
</template>

<style lang="scss">
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentcolor;
  vertical-align: baseline;
}
</style>
