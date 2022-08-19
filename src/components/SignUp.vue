<template>
  <div>Sign Up</div>
  <PersonalRouter :route="route" :buttonText="buttonText" />
  <p v-if="errorMsg.length !== 0">{{ errorMsg }}</p>
  <form>
    <input type="text" v-model="email" placeholder="your email" />
    <input type="password" v-model="password" placeholder="******" />
    <input type="password" v-model="confirmPassword" placeholder="******" />
    {{ password }}
    <input type="submit" @click.prevent="SignUp" />
  </form>
  <p>Good Music, Patience and a lot effort</p>
  <p>Keep calm and code on!</p>
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

function checkPassword() {
  if (password.value === confirmPassword.value) {
    return true;
  } else {
    return false;
  }
}
// Show hide confrimPassword variable
const hidePassword = ref(true);

// Router to push user once SignedUp to Log In
const redirect = useRouter();

// Arrow function to SignUp user to supaBase with a timeOut() method for showing the error
const SignUp = () => {
  checkPassword()
    ? useUserStore().signUp(email.value, password.value)
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
