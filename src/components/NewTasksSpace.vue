<template>
  <div class="h-full w-8/12 flex justify-start m-7">
    <div class="w-full flex-wrap flex justify-start">
      <TaskItem
        v-for="task in tasks"
        :key="task.id"
        :title="task.title"
        :description="task.description"
        :complete="task.is_complete"
        :id="task.id"
        @toggleTask="toggleTask"
        @editTask="editedTask"
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
  "toggleTask",
]);

const props = defineProps({
  tasks: Array,
});

const editedTask = (title, description, id) => {
  emit("editTask", title, description, id);
};

const toggleTask = (toggle, id) => {
  emit("toggleTask", toggle, id);
};
</script>

<style></style>
