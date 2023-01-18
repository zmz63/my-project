<script setup>
import { useRouter } from 'vue-router';
import ToDoList from '@admin/components/ToDoList/index.vue';
import { NButton } from 'naive-ui';
import { reqGetData } from '@admin/apis';

const router = useRouter();

const handleClick = () => {
  router.push({
    path: 'add',
  });
};

const test = async () => {
  const result = await reqGetData();
  console.log(result);
};
</script>

<template>
  <div>
    <NButton @click="handleClick">跳转到其他页面</NButton>
    <NButton @click="test">发请求</NButton>
    <ToDoList />
  </div>
</template>
