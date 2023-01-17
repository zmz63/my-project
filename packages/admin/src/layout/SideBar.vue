<script setup>
import { RouterLink } from 'vue-router';
import menu from '@admin/router/menu';
</script>

<template>
  <div class="side-bar">
    <RouterLink
      v-for="item of menu"
      :to="{ name: item.name }"
      class="item"
      activeClass="active"
      :key="item.name"
    >
      {{ item.meta.label }}
    </RouterLink>
  </div>
</template>

<style lang="scss">
.side-bar {
  display: flex;
  width: 148px;
  flex-direction: column;
  flex-shrink: 0;
  background-color: pink;
  user-select: none;
  .item {
    display: flex;
    height: 48px;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    color: brown;
    text-decoration: none;
    &.active {
      background-color: bisque;
      color: blueviolet;
    }
  }
}
</style>
