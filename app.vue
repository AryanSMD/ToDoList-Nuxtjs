<template>
  <div :class="getDarkMode ? 'dark' : null">
    <div class="wrraper">
      <NuxtPage />
    </div>
  </div>
</template>


<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex'


const store = useStore();


const getDarkMode = computed(()=>{
    return store.getters['getDarkMode']
})


onMounted(() => {
  store.dispatch('defaultDarkMode');
  store.dispatch('defaultTasks');
})
</script>


<style scoped></style>