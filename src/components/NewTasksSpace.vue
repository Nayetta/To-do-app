<template>
  <div class="h-full flex justify-around m-7">
    <div class="w-full flex-wrap flex justify-around">
      <TaskItem
        v-for="task in tasks"
        :key="task.id"
        :title="task.title"
        :description="task.description"
        :complete="task.is_complete"
        :id="task.user_id"
        @editTask="$emit('editTask', title, description, id)"
      />
    </div>
  </div>
</template>

<script setup>
import TaskItem from "./TaskItem.vue";

const emit = defineEmits([
  //   ENTER-EMITS-HERE
  "editTask",
]);

const props = defineProps({
  tasks: Array,
});
</script>

<style></style>
