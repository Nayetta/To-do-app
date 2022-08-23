<template>
  <div class="h-full flex justify-around m-7">
    <div>
      <TaskItem
        v-for="task in tasks"
        :key="task"
        :title="task.title"
        :description="task.description"
        :complete="task.is_complete"
        :id="task.user_id"
      />
    </div>
  </div>
</template>

<script setup>
import TaskItem from "./TaskItem.vue";
import { useTaskStore } from "../stores/task";
import { ref } from "vue";

const useTask = useTaskStore();
const tasks = ref([]);

const pullTasks = async () => {
  tasks.value = await useTask.fetchTasks();
};

pullTasks();
</script>

<style></style>
