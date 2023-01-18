<script setup>
import SvgIcon from '@common/components/SvgIcon.vue';
import { NButton, NInput, NSpace, useMessage } from 'naive-ui';
import { computed, reactive, ref, watch } from 'vue';
import List from './List.vue';

const message = useMessage();

const content = ref('');

const toDoList = reactive(JSON.parse(localStorage.getItem('TO-DO-LIST') || '[]'));

const completedNum = computed(() =>
  toDoList.reduce((prev, item) => prev + (item.completed ? 1 : 0), 0)
);

watch(
  () => [...toDoList],
  () => {
    localStorage.setItem('TO-DO-LIST', JSON.stringify(toDoList));
  },
  {
    deep: true,
  }
);

const addItem = () => {
  if (!content.value) {
    message.warning('请输入内容');
    return;
  }

  toDoList.push({
    id: Date.now(),
    content: content.value,
    completed: false,
  });

  content.value = '';
};

const deleteItem = (id) => {
  for (let i = 0; i < toDoList.length; i++) {
    const item = toDoList[i];
    if (item.id === id) {
      toDoList.splice(i, 1);
      message.success('删除成功');
      break;
    }
  }
};

const changeItem = (id) => {
  for (let i = 0; i < toDoList.length; i++) {
    const item = toDoList[i];
    if (item.id === id) {
      item.completed = !item.completed;
    }
  }
};

const deleteCompleted = () => {
  let flag = false;
  for (let i = toDoList.length - 1; i >= 0; i--) {
    const item = toDoList[i];
    if (item.completed) {
      toDoList.splice(i, 1);
      flag = true;
    }
  }
  if (flag) {
    message.success('删除成功');
  }
};
</script>

<template>
  <div class="to-do-list">
    <div class="header">
      <NInput class="input-box" placeholder="请输入内容" v-model:value="content" />
      <NButton type="primary" @click="addItem">
        <SvgIcon class="icon" name="add-outline" />
        添加
      </NButton>
    </div>
    <List :list="toDoList" @delete="deleteItem" @change="changeItem" />
    <div class="footer">
      <NSpace align="center">
        <div>{{ `${completedNum}/${toDoList.length}` }}</div>
        <NButton type="warning" @click="deleteCompleted" :disabled="!completedNum">
          删除已完成
        </NButton>
      </NSpace>
    </div>
  </div>
</template>

<style lang="scss">
.to-do-list {
  padding: 20px;
  width: 500px;
  .header {
    display: flex;
    padding-bottom: 15px;
    .input-box {
      margin-right: 20px;
    }
    .icon {
      font-size: 20px;
    }
  }
  .footer {
    padding: 10px;
  }
}
</style>
