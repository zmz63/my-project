<script setup>
import { NList } from 'naive-ui';
import ListItem from './ListItem.vue';

const props = defineProps({
  list: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['delete', 'change']);

const handleDelete = (id) => {
  emit('delete', id);
};

const handleChange = (id) => {
  emit('change', id);
};
</script>

<template>
  <NList hoverable bordered>
    <ListItem
      v-for="item of props.list"
      :item="item"
      :key="item.id"
      @delete="handleDelete"
      @change="handleChange"
    />
  </NList>
</template>
