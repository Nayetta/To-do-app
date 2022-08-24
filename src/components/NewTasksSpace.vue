<template>
  <div class="h-full flex justify-around m-7">
    <div class="w-full flex-wrap flex justify-around">
      <TaskItem
        v-for="task in tasks"
        :key="task.id"
        :title="task.title"
        :description="task.description"
        :complete="task.is_complete"
        :id="task.id"
        @editTask="$emit('editTask', task.title, task.description, task.id)"
        @deleteTask="$emit('deleteTask', task.id)"
      />
    </div>
  </div>
</template>

<script setup>
import TaskItem from "./TaskItem.vue";

const emit = defineEmits([
  //   ENTER-EMITS-HERE
  "editTask",
  "deleteTask",
]);

const props = defineProps({
  tasks: Array,
});
</script>

<style></style>
