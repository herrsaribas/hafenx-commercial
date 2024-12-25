<script setup>
import { ChatBubbleLeftRightIcon } from '@heroicons/vue/24/outline'

defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  mainTitle: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="w-[280px] flex-shrink-0">
    <div class="flex items-center gap-3 mb-8">
      <ChatBubbleLeftRightIcon v-if="icon === 'chat'" class="h-6 w-6 text-gray-400" />
      <h2 class="text-lg font-medium">{{ title }}</h2>
    </div>
    <div class="relative">
      <div class="absolute -left-12 top-0 w-1 h-24 bg-primary"></div>
      <h2 class="text-4xl font-bold">{{ mainTitle }}</h2>
    </div>
  </div>
</template>