<template>
  <div
    class="w-full h-screen bg-green-200 flex flex-col justify-center items-center"
  >
    <div>
      <h1 class="text-teal-800 font-bold">Log In</h1>
    </div>

    <PersonalRouter :route="route" :buttonText="buttonText" />
    <form class="w-8/12 md:w-4/12">
      <!-- DIV EMAIL INPUT AND LABEL -->
      <div class="relative z-0 mb-6 w-full group">
        <input
          type="email"
          name="floating_email"
          id="floating_email"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-gray-900 dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
          placeholder=" "
          v-model="email"
          required
        />
        <label
          for="floating_email"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
        <EyeIcon
          :class="[passwordFieldIcon]"
          class="w-7 absolute right-2 bottom-3"
          @click.prevent="hidePassword = !hidePassword"
        />

        <label
          for="floating_password"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Password</label
        >
      </div>
      <button
        type="submit"
        @click.prevent="signIn"
        class="h-10 transition duration-150 ease-in-out text-white font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center bg-gradient-to-r from-green-300 to-red-200 hover:from-red-200 hover:to-green-300 shadow-md"
      >
        Submit
      </button>
    </form>
    <p class="text-red-700 m-2" v-if="errorMsg.length !== 0">{{ errorMsg }}</p>
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
const route = "/auth/sign-up";
const buttonText = "Not registered yet? Sign Up here :)";

// Input Fields
const email = ref("");
const password = ref("");

// Error Message
const errorMsg = ref("");

//Show hide password variables
const passwordFieldType = computed(() =>
  hidePassword.value ? "password" : "text"
);
const hidePassword = ref(true);

// Router to push user once SignedIn to the HomeView
const redirect = useRouter();

// Arrow function to Signin user to supaBase
const signIn = async () => {
  try {
    // calls the user store and send the users info to backend to logIn
    await useUserStore().signIn(email.value, password.value);
    // redirects user to the homeView
    gestorRoute();
  } catch (error) {
    // displays error message
    errorMsg.value = `Error: ${error.message}`;
    // hides error message
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  }
};

const gestorRoute = async () => {
  console.log(useUserStore().checkUserName());
  if (await useUserStore().checkUserName()) {
    console.log("verdaderuuuuu");
    redirect.push({ path: "/" });
  } else {
    console.log("falsisimuuuu");
    redirect.push({ path: "/profile" });
  }
};
</script>

<style>
.form {
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
}
.input {
  color: black;
  margin-bottom: 1rem;
}
.button {
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
