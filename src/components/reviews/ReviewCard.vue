<script setup>
defineProps({
  image: String,
  name: String,
  position: String,
  company: String,
  content: String
})
</script>

<template>
  <div class="flex flex-col items-start max-w-4xl">
    <div class="mb-6">
      <div class="text-6xl text-primary font-heading">"</div>
      <p class="text-2xl text-gray-700 mb-6">{{ content }}</p>
      <div class="text-6xl text-primary font-heading text-right">"</div>
    </div>
    
    <div class="flex items-center gap-4">
      <img :src="image" :alt="name" class="w-16 h-16 rounded-full object-cover">
      <div>
        <h4 class="font-bold text-gray-900">{{ name }}</h4>
        <p class="text-sm text-gray-600">{{ position }}</p>
        <p class="text-sm text-primary">{{ company }}</p>
      </div>
    </div>
  </div>
</template>