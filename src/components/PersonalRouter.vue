<template>
  <router-link class="text-teal-500 font-medium m-5 text-center" :to="route">{{
    buttonText
  }}</router-link>
</template>

<script setup>
defineProps({
  route: String,
  buttonText: String,
});
</script>

<style></style>
