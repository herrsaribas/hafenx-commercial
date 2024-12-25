<script setup>
import { ref, onMounted } from 'vue';

const words = ['DIGITAL', 'ECOMMERCE', 'BERATUNG', 'STRATEGIE'];
const currentIndex = ref(0);
const isVisible = ref(true);

const animate = () => {
  isVisible.value = false;
  
  setTimeout(() => {
    currentIndex.value = (currentIndex.value + 1) % words.length;
    isVisible.value = true;
  }, 500);
};

onMounted(() => {
  setInterval(animate, 3000);
});
</script>

<template>
  <div class="flex items-center h-12">
    <!-- Separator bar with gradient -->
    <div class="h-full w-[2px] bg-gradient-to-b from-gray-300 to-gray-100 mx-4"></div>
    
    <!-- Animated text -->
    <div class="relative w-48 flex items-center">
      <transition name="fade">
        <span 
          v-if="isVisible" 
          class="absolute text-gray-600 text-xl font-sans tracking-wide font-medium"
        >
          {{ words[currentIndex] }}
        </span>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>