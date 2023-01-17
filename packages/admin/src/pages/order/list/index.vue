<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
setTimeout(() => {
  router.replace({
    path: 'add',
  });
}, 1000);
</script>

<template>
  <div>test1</div>
</template>
