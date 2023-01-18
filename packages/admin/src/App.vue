<script setup>
import { RouterView } from 'vue-router';
import { NConfigProvider, NMessageProvider } from 'naive-ui';

const themeOverrides = {
  Button: {
    colorPrimary: '#336699',
    textColorPrimary: '#fff',
    colorFocusPrimary: '#336699',
    colorPressedPrimary: '#336699',
    borderPrimary: '1px solid #336699',
  },
};
</script>

<template>
  <NConfigProvider :theme-overrides="themeOverrides">
    <NMessageProvider>
      <RouterView />
    </NMessageProvider>
  </NConfigProvider>
</template>
