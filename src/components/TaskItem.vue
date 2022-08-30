<template>
  <div>
    <!-- all the catd -->
    <div
      class="p-6 max-w-sm rounded-lg shadow-md bg-red-200 border-red-400 dark:bg-teal-500 dark:border-teal-700 m-2 mt-7"
    >
      <div class="relative">
        <div v-if="complete" class="absolute -top-16 left-32">
          <img src="../img/Sticker.png" alt="" class="" />
        </div>
        <!-- if toggle is off, display just the text -->
        <div v-if="editToggle">
          <p class="mb-3 font-bold text-white dark:text-white">
            {{ title }}
          </p>
          <p class="mb-3 font-normal text-white dark:text-white">
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
              class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-red-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-700 focus:outline-none focus:ring-0 focus:border-red-400 peer"
              placeholder=" "
              v-model="title"
              required
            />
            <label
              for="title-task"
              class="peer-focus:font-medium absolute text-sm text-gray-100 dark:text-gray-200 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Add a task title</label
            >
          </div>
          <div class="w-full relative z-0 mb-6 group">
            <input
              type="text"
              name="description"
              id="description"
              class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-red-300 appearance-none dark:text-white dark:border-teal-600 dark:focus:border-teal-700 focus:outline-none focus:ring-0 focus:border-red-400 peer"
              placeholder=" "
              v-model="description"
              required
            />
            <label
              for="description"
              class="peer-focus:font-medium absolute text-sm text-gray-100 dark:text-gray-200 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
            @click="toggleTask(complete, id)"
            id="buttonDone"
            class="inline-flex items-center py-2 px-4 text-sm font-medium bg-transparent rounded-l-lg border border-white hover:bg-red-300 text-white hover:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-teal-700"
          >
            Done!
          </button>
          <button
            @click="editButton()"
            type="button"
            id="buttonEdit"
            class="inline-flex items-center py-2 px-4 text-sm font-medium bg-transparent border-t border-b border-white hover:bg-red-300 text-white hover:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-teal-700"
          >
            Edit
          </button>
          <button
            @click="$emit('deleteTask', id)"
            type="button"
            id="buttonDelete"
            class="inline-flex items-center py-2 px-4 text-sm font-medium bg-transparent rounded-r-md border border-white hover:bg-red-300 text-white hover:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-teal-700"
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
            class="inline-flex rounded-md shadow-sm items-center py-2 px-4 text-sm font-medium text-white bg-transparent border border-white hover:bg-red-300 hover:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-teal-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const editToggle = ref(true);

const toggleTask = (toggle, id) => {
  toggle = !toggle;
  emit("toggleTask", toggle, id);
  //console.log("holaaaa, ja hem editat la info");
};
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
  "toggleTask",
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
