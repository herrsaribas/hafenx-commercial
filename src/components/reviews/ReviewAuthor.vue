<script setup>
defineProps({
  image: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="flex items-center gap-4">
    <img :src="image" :alt="name" class="w-16 h-16 rounded-full object-cover">
    <div>
      <h4 class="font-bold text-gray-900">{{ name }}</h4>
      <p class="text-sm text-gray-600">{{ position }}</p>
      <p class="text-sm text-primary">{{ company }}</p>
    </div>
  </div>
</template>