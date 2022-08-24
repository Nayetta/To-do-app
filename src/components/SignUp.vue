<template>
  <div
    class="flex flex-col m-1 w-full h-screen bg-red-200 justify-center items-center"
  >
    <div>Sign Up</div>
    <PersonalRouter :route="route" :buttonText="buttonText" />
    <p v-if="errorMsg.length !== 0">{{ errorMsg }}</p>
    <form>
      <!-- DIV EMAIL INPUT AND LABEL -->
      <div class="relative z-0 mb-6 w-full group">
        <input
          type="email"
          name="floating_email"
          id="floating_email"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          v-model="email"
          required
        />
        <label
          for="floating_email"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Email address</label
        >
      </div>
      <!-- DIV PASSWORD INPUT AND LABEL -->

      <div class="relative z-0 mb-6 w-full group">
        <input
          type="password"
          name="floating_password"
          id="floating_password"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          v-model="password"
          required
        />
        <label
          for="floating_password"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Password</label
        >
      </div>
      <!-- DIV PASSWORD INPUT AND LABEL -->
      <div class="relative z-0 mb-6 w-full group">
        <input
          type="password"
          name="floating_confirmPassword"
          id="floating_confirmPassword"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          v-model="confirmPassword"
          required
        />
        <label
          for="floating_confirmPassword"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Confirm Password</label
        >
      </div>

      <button
        type="submit"
        @click.prevent="signUp"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import PersonalRouter from "./PersonalRouter.vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";

// Route Variables
const route = "/auth/login";
const buttonText = "Test the Log In Route";

// Input Fields
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

// Error Message
const errorMsg = ref("");

// Show hide password variable
const passwordFieldType = computed(() =>
  hidePassword.value ? "password" : "text"
);
// Show hide confrimPassword variable
const hidePassword = ref(true);

function checkPassword() {
  if (password.value === confirmPassword.value) {
    return true;
  } else {
    return false;
  }
}

// Router to push user once SignedUp to Log In
const redirect = useRouter();

// Arrow function to SignUp user to supaBase with a timeOut() method for showing the error
const signUp = () => {
  checkPassword()
    ? (useUserStore().signUp(email.value, password.value),
      redirect.push({ path: "/auth/login" }))
    : (errorMsg.value = "Error, la contraseña no coincide");
  // try {
  //   // calls the user store and send the users info to backend to logIn
  //   await useUserStore().signUp(email.value, password.value);
  //   // redirects user to the homeView
  //   redirect.push({ path: "/auth" });
  // } catch (error) {
  //   // displays error message
  //   errorMsg.value = `Error: ${error.message}`;
  //   // hides error message
  //   setTimeout(() => {
  //     errorMsg.value = null;
  //   }, 5000);
  // }
};
</script>

<style></style>
