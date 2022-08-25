<template>
  <main
    class="bg-teal-100 p-6 flex flex-col justify-start items-center w-4/12 h-full pt-7"
  >
    <div class="flex flex-col justify-center items-center">
      <h1 class="font-bold">Add a new Task</h1>
    </div>
    <form class="w-8/12">
      <div class="w-full m-0 flex flex-col justify-center items-center">
        <div class="w-full relative z-0 mb-6 group">
          <input
            type="text"
            name="title-task"
            id="title-task"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:gray-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            v-model="title"
            required
          />
          <label
            for="title-task"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Add a task title</label
          >
        </div>
        <div class="w-full relative z-0 mb-6 group">
          <input
            type="text"
            name="description"
            id="description"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:gray-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            v-model="description"
            required
          />
          <label
            for="description"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Add a task description</label
          >
        </div>
        <button
          type="submit"
          @click.prevent="submitTask"
          class="w-6/12 h-10 transition duration-150 ease-in-out text-white font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center bg-gradient-to-r from-green-300 to-red-200 hover:from-red-200 hover:to-green-300 shadow-md"
        >
          Add task
        </button>
      </div>
    </form>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "../stores/task";

const emit = defineEmits(["add-task"]);

const title = ref("");
const description = ref("");

const submitTask = async () => {
  try {
    // calls the user store and send the users info to backend to logIn
    if (title.value) {
      emit("add-task", title.value, description.value);
      title.value = "";
      description.value = "";
    } else {
      errorMsg.value = `Error: Please, write a title!!!`;
    }
    // redirects user to the homeView
  } catch (error) {
    // displays error message
    errorMsg.value = `Error: ${error.message}`;
    // hides error message
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  }
};
</script>

<style></style>
