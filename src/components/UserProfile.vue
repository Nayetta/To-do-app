<template>
  <div
    class="flex flex-col w-full h-screen bg-red-100 justify-center items-center"
  >
    <form class="form-widget">
      <div class="relative z-0 mb-6 w-full group">
        <input
          type="userName"
          name="floating_userName"
          id="floating_userName"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-900 dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
          placeholder=" "
          v-model="userName"
          autocomplete="off"
          required
        />
        <label
          for="floating_userName"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Change User Name</label
        >
      </div>
      <div>
        <button
          type="submit"
          class="h-10 transition duration-150 ease-in-out text-white font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center bg-gradient-to-r from-green-300 to-red-200 hover:from-red-200 hover:to-green-300 shadow-md"
          @click.prevent="userToDataBase"
        >
          UpDate
        </button>
        <router-link
          class="h-10 transition duration-150 ease-in-out text-white font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center bg-gradient-to-r from-green-300 to-red-200 hover:from-red-200 hover:to-green-300 shadow-md m-5"
          to="/"
          >Home</router-link
        >
      </div>
    </form>
  </div>
</template>

<script setup>
import { supabase } from "../supabase";
import { ref } from "vue";
import { useUserStore } from "../stores/user";
import { useRouter } from "vue-router";

const userName = ref("");
const redirect = useRouter();

//supabase.auth.currentUser.id == useUserStore().user.id

const userToDataBase = () => {
  useUserStore().addUser(supabase.auth.currentUser.email);
  useUserStore().updateUser(userName.value);
  redirect.push({ path: "/" });
};
// const userToDataBase = async () => {
//   console.log("holiiiii");
//   await useTaskStore().addUser(supabase.auth.user.email);
//   await useTaskStore().updateUser(userName.value);
// };
</script>
