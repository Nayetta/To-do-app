<template>
  <nav class="h-20 w-full bg-teal-100 flex justify-around items-center">
    <div class="flex flex-col">
      <p class="">Today is {{ date1 }}</p>
      <p>{{ date2 }}</p>
    </div>
    <!-- <MoonIcon /> -->
    TO DO TASK
    <SignOut />
  </nav>
</template>

<script setup>
import SignOut from "./SignOut.vue";
//import { MoonIcon, MoonOffIcon } from "@heroicons/vue/outline";

const now = new Date();
const mon = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const date1 = `${week[now.getDay()]}`;
const date2 = `${mon[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
//constant to save a variable that will hold the use router method

// constant to save a variable that will get the user from store with a computed function imported from vue

// constant that calls user email from the useUSerStore

// constant that saves the user email and cleans out the @client from the user

// async function that calls the signOut method from the useUserStore and pushes the user back to the Auth view.
</script>

<style></style>
