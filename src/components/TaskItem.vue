<template>
  <div>
    <!-- all the catd -->
    <div
      class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <!-- if toggle is off, display just the text -->
      <div v-if="editToggle">
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {{ title }}
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {{ description }}
        </p>
      </div>
      <!-- if toggle is on, display the form -->
      <div v-else>
        <div class="w-full relative z-0 mb-6 group">
          <input
            type="text"
            name="title-task"
            id="title-task"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
      </div>
      <!-- 3 Butons group if edit toggle is true -->
      <div
        class="inline-flex rounded-md shadow-sm"
        role="group"
        v-if="editToggle"
      >
        <button
          type="button"
          id="buttonDone"
          class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-l-lg border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          Done!
        </button>
        <button
          @click="editButton()"
          type="button"
          id="buttonEdit"
          class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          Edit
        </button>
        <button
          @click="$emit('deleteTask', id)"
          type="button"
          id="buttonDelete"
          class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-r-md border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          Delete
        </button>
        <!-- 1 only button Confirm, if toggle is false -->
      </div>
      <div v-else>
        <button
          @click="editedTask(title, description, id)"
          type="button"
          id="buttonEdit"
          class="inline-flex rounded-md shadow-sm items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          Confirm
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const editToggle = ref(true);

const editButton = (title, description, id) => {
  editToggle.value = !editToggle.value;
  //console.log("holaaaa, ja hem editat la info");
};
const editedTask = (title, description, id) => {
  emit("editTask", title, description, id);
  editToggle.value = !editToggle.value;
};

const emit = defineEmits([
  //   ENTER-EMITS-HERE
  "editTask",
  "deleteTask",
]);

const props = defineProps({
  id: Number,
  title: String,
  description: String,
  complete: Boolean,
});
// const props = defineProps(["ENTER-PROP-HERE"]);
</script>

<style></style>

<!-- 
**Hints**
1. ref() or reactive() can be used here to store the following, think if you want to store them either individually or like an object, up to you.
2. Data properties need here are the following: a boolean to store a false**Important variable, a string to store an error, a string to store the value of the task that the user can edit, an initial false boolean to hide the inputFIeld used to edit the new task detail or details[this is in reference of the task title and the task description].
3. Store the custom emit events that will be used to call the functions of the homeView for editing, deleting and toggling the status[completed, not complted] of the taskItem.
4. Function to handle the error with the data properties used to control the error and the the boolean controlling the boolean empty variable.
5. Function to handle the edit dialogue where the inputField is displayed and the string used to store the value of the inputField will be used here to save the value as a prop on this function.
6. Function to emmit a custom event emit() that takes 2 parameters a name for the custom event and the value that will be send via the prop to the parent component. This function can control the toggle completion of the task on the homeview.
7. Function to edit the task information that you decided that the user can edit. This function's body takes in a conditional that first checks if the value of the task [either title and description or just title] is empty which if true it runs the function used to handle the error on hint4. Else, the conditional sets the first mentioned boolean data property on hint2 back to its inital boolean value to hide the error message and repeat the same for the data property mentioned 4th on hint2; a constant that stores an object that holds the oldValue from the prop item and the value of the task coming from the data property mentioned 3rd on hint2; a custom event emit() that takes 2 parameters a name for the custom event and the value from the object used on this part of the conditional and lastly this part of the conditional sets the value of input field to an empty string to clear it from the ui. 
8. Function to emmit a custom event emit() that takes 2 parameters a name for the custom event and the value that will be send via the prop to the parent component. This function can control the removal of  the task on the homeview.
-->
