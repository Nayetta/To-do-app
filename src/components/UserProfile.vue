<template>
  <form class="form-widget">
    <div class="relative z-0 mb-6 w-full group">
      <input
        type="userName"
        name="floating_userName"
        id="floating_userName"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        v-model="userName"
        required
      />
      <label
        for="floating_userName"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >userName</label
      >
    </div>
    <div>
      <button
        type="submit"
        class="button primary block"
        @click.prevent="userToDataBase"
      >
        quejica el HTML
      </button>
    </div>
  </form>
</template>

<script setup>
import { supabase } from "../supabase";
import { ref } from "vue";
import { useUserStore } from "../stores/user";

const userName = ref("");

//supabase.auth.currentUser.id == useUserStore().user.id

const userToDataBase = () => {
  useUserStore().addUser(supabase.auth.currentUser.email);
  useUserStore().updateUser(userName.value);
};
// const userToDataBase = async () => {
//   console.log("holiiiii");
//   await useTaskStore().addUser(supabase.auth.user.email);
//   await useTaskStore().updateUser(userName.value);
// };
</script>
