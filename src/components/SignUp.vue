<template>
  <div
    class="flex flex-col w-full h-screen bg-red-100 justify-center items-center"
  >
    <div>
      <h1 class="text-teal-800 font-bold">Sign Up</h1>
    </div>
    <PersonalRouter :route="route" :buttonText="buttonText" />
    <p v-if="errorMsg.length !== 0">{{ errorMsg }}</p>
    <form class="w-8/12 md:w-4/12">
      <!-- DIV EMAIL INPUT AND LABEL -->
      <div class="relative z-0 mb-6 w-full group">
        <input
          type="email"
          name="floating_email"
          id="floating_email"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-900 dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
          placeholder=" "
          v-model="email"
          autocomplete="off"
          required
        />
        <label
          for="floating_email"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Email address</label
        >
      </div>
      <!-- DIV PASSWORD INPUT AND LABEL -->

      <div class="relative z-0 mb-6 w-full group">
        <input
          :type="passwordFieldType"
          name="floating_password"
          id="floating_password"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-900 dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
          placeholder=" "
          v-model="password"
          required
        />
        <label
          for="floating_password"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Password (6 caracters min)</label
        >
      </div>
      <!-- DIV PASSWORD INPUT AND LABEL -->
      <div class="relative z-0 mb-6 w-full group">
        <input
          :type="passwordFieldType"
          name="floating_confirmPassword"
          id="floating_confirmPassword"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-900 dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
          placeholder=" "
          v-model="confirmPassword"
          required
        />
        <EyeIcon
          :class="[passwordFieldIcon]"
          class="w-7 absolute right-2 bottom-3"
          @click.prevent="hidePassword = !hidePassword"
        />
        <label
          for="floating_confirmPassword"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Confirm Password</label
        >
      </div>

      <button
        type="submit"
        @click.prevent="signUp"
        class="h-10 transition duration-150 ease-in-out text-white font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center bg-gradient-to-r from-green-300 to-red-200 hover:from-red-200 hover:to-green-300 shadow-md"
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
import { EyeIcon, EyeOffIcon } from "@heroicons/vue/outline";

// Route Variables
const route = "/auth/login";
const buttonText = "Already registered? Log In here :)";

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
      alert(
        "your user has been successfully registered. Please, confirm your email and enjoy the app"
      ))
    : //useUserStore().addUser(email.value))
      //redirect.push({ path: "/" })
      (errorMsg.value = "Error, la contraseña no coincide");

  // useUserStore().addUser(email.value);
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
