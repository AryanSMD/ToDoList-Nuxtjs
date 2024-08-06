<template>
  <div :class="defaults.getDarkMode ? 'dark' : null">
    <div class="wrraper">
      <NuxtPage />
    </div>
  </div>
</template>


<script setup>
import { onMounted } from 'vue';
import { useDefaults } from './store/defaults';


const defaults = useDefaults();


onMounted(() => {
  defaults.defaultDarkMode();
  defaults.defaultTasks();
})
</script>


<style scoped></style>