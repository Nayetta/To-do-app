<template>
  <div
    class="flex justify-start items-start p-4 bgcozy h-full w-full mediaspace"
  >
    <div
      class="w-full min-h-screen flex-wrap flex justify-around items-start h-full"
    >
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
.bgcozy {
  background-image: url("../img/cozy.jpg");
  /* background-position: center center; */
  background-repeat: repeat;
  /* background-size: cover; */
  display: grid;
  align-items: center;
  justify-items: center;
}

@media only screen and (max-width: 862px) {
  .mediaspace {
    width: 100vw;
  }
}
</style>
