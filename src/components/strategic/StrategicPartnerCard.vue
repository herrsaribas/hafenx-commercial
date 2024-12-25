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
  smallLogo: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
    <!-- Large Logo -->
    <div class="h-32 flex items-center justify-center mb-8">
      <img :src="logo" :alt="name" class="max-h-full max-w-full object-contain">
    </div>
    
    <!-- Info Section -->
    <div class="flex items-start gap-4">
      <img :src="smallLogo" :alt="name" class="w-12 h-12 object-contain flex-shrink-0">
      <div>
        <h3 class="font-bold text-gray-900 mb-1">{{ name }}</h3>
        <p class="text-sm text-gray-600">{{ description }}</p>
      </div>
    </div>
  </div>
</template>