<script setup>
import { RouterView } from 'vue-router';
import { NConfigProvider, NMessageProvider, darkTheme } from 'naive-ui';
</script>

<template>
  <NConfigProvider :theme="darkTheme">
    <NMessageProvider>
      <RouterView />
    </NMessageProvider>
  </NConfigProvider>
</template>
