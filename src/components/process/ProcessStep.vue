<script setup>
defineProps({
  number: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="relative pl-12 pb-8">
    <!-- Number -->
    <div class="absolute left-0 top-0 text-primary opacity-50 font-bold">
      {{ number }}
    </div>
    
    <!-- Content -->
    <h3 class="text-xl font-bold mb-3">{{ title }}</h3>
    <p class="text-gray-600">{{ description }}</p>
  </div>
</template>