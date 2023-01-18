<script setup>
import { NButton, NCheckbox, NListItem } from 'naive-ui';

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['delete', 'change']);

const handleDelete = () => {
  emit('delete', props.item.id);
};

const handleChange = () => {
  emit('change', props.item.id);
};
</script>

<template>
  <NListItem>
    {{ props.item.content }}
    <template #suffix>
      <div class="action">
        <NCheckbox :checked="props.item.completed" size="large" @update:checked="handleChange" />
        <NButton @click="handleDelete">删除</NButton>
      </div>
    </template>
  </NListItem>
</template>

<style lang="scss">
.action {
  width: 100px;
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
