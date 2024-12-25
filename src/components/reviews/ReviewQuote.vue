<script setup>
defineProps({
  content: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="relative">
    <div class="text-6xl text-primary font-heading absolute -left-8 -top-6">"</div>
    <p class="text-lg text-gray-700 mb-6 pl-4">{{ content }}</p>
    <div class="text-6xl text-primary font-heading text-right absolute -right-4 -bottom-8">"</div>
  </div>
</template>