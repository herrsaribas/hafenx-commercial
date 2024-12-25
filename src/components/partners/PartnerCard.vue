<script setup>
defineProps({
  logo: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  backgroundImage: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="relative group overflow-hidden rounded-lg">
    <!-- Background Image -->
    <div 
      class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
      :style="`background-image: url('${backgroundImage}')`"
    >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300"></div>
    </div>
    
    <!-- Content -->
    <div class="relative p-8 min-h-[320px] flex flex-col">
      <div class="bg-white/90 rounded-lg p-4 backdrop-blur-sm">
        <img :src="logo" :alt="name" class="h-12 object-contain mb-4">
        <h3 class="text-xl font-bold text-gray-900 mb-2">{{ name }}</h3>
        <p class="text-gray-600 text-sm">{{ description }}</p>
      </div>
    </div>
  </div>
</template>