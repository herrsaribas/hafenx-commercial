<script setup>
defineProps({
  backgroundImage: {
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
  },
  projectCount: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div 
    class="relative bg-gray-100 rounded-lg overflow-hidden group cursor-pointer h-[280px]"
    :style="`background-image: url('${backgroundImage}'); background-size: cover; background-position: center;`"
  >
    <!-- Gray overlay that becomes more transparent on hover -->
    <div class="absolute inset-0 bg-gray-900/60 group-hover:bg-gray-900/40 transition-all duration-300"></div>
    
    <!-- Content -->
    <div class="relative h-full z-10 p-6 flex flex-col justify-between">
      <!-- Top section -->
      <div class="flex justify-between items-start text-white/80">
        <span>{{ projectCount || 'PROJEKTE' }}</span>
        <span class="group-hover:translate-x-2 transition-transform duration-300">
          MEHR →
        </span>
      </div>
      
      <!-- Bottom section -->
      <h3 class="text-2xl font-bold text-white mt-auto">
        {{ title }}
      </h3>
    </div>
  </div>
</template>