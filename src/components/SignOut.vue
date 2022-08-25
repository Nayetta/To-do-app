<template>
  <button
    class="h-10 text-white font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center bg-gradient-to-r from-green-300 to-red-200 hover:from-red-200 hover:to-green-300 shadow-md"
    @click.prevent="signOut"
  >
    Log out
  </button>
</template>

<script setup>
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const redirect = useRouter();

const errorMsg = ref("");

const signOut = async () => {
  try {
    // calls the user store and send the users info to backend to logIn
    await useUserStore().signOut();
    // redirects user to the homeView
    console.log("im in logout try");
    redirect.push({ path: "/auth/login" });
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
