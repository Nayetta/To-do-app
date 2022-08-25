<template>
  <div class="h-full w-8/12 flex justify-start p-7 bgcork">
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

<style>
.bgcork {
  background-image: url("../img/cork.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 66vw;
  grid-template-rows: 600px;
}
</style>
