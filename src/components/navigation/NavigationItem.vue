<script setup>
import { ref } from 'vue';
import { ChevronRightIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
});

const isExpanded = ref(false);
</script>

<template>
  <div class="border-b border-gray-200 pb-4">
    <div 
      class="flex items-center justify-between cursor-pointer"
      @click="isExpanded = !isExpanded"
    >
      <span class="text-lg font-semibold text-gray-900">{{ item.title }}</span>
      <ChevronRightIcon 
        class="h-5 w-5 transition-transform duration-200"
        :class="{ 'rotate-90': isExpanded }"
      />
    </div>
    
    <div v-if="isExpanded" class="mt-4 ml-4 space-y-3">
      <a 
        v-for="subItem in item.children" 
        :key="subItem.name"
        :href="subItem.href"
        class="block text-gray-600 hover:text-primary transition-colors"
      >
        {{ subItem.name }}
      </a>
    </div>
  </div>
</template>