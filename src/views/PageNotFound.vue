<template>
  <div class="text-center">
    <h1 class="text-6xl">404</h1>
    <h2 class="text-3xl">{{ error || "Page not found" }}</h2>
    <Button
      label="find pokemons"
      class="text-2xl col-4 uppercase"
      @click="router.push({ name: 'Home' })"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Button from "primevue/button";
const router = useRouter();

const error = ref(null);
// error.value = router.currentRoute.value.meta.error;
</script>
