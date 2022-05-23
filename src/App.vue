<template>
  <div id="container">
    <header>
      <h1 class="text-7xl mt-0 text-500 text-center uppercase">pokedex</h1>
    </header>
    <main class="max-w-screen w-10 m-auto surface-50 p-3">
      <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transitionName || 'fade'" mode="out-in">
          <KeepAlive>
            <component :is="Component" :key="route.path" />
          </KeepAlive>
        </transition>
      </router-view>
    </main>
    <footer class="flex justify-content-center bg-surface-0">
      <p class="text-xl">
        Developed by <a href="https://github.com/19r3ka">19r3ka</a>
      </p>
    </footer>
  </div>
</template>

<script setup>
import { onErrorCaptured } from "vue";

onErrorCaptured((e) => {
  console.log("error happened", e.message);
});
</script>

<style>
.fade-enter-active,
.fadeinleft-enter-active,
.fadeinright-enter-active {
  transition: all 0.1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.fade-leave-active,
.fadeinleft-leave-active,
.fadeinright-leave-active {
  transition: all 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fadeinleft-enter-from,
.fadeinright-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.fadeinright-enter-from,
.fadeinleft-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
