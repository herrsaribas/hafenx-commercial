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
  website: {
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
  <div class="h-full">
    <div class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col group">
      <!-- Large Logo Area -->
      <div class="relative bg-[#F8F8F8] flex items-center justify-center p-8 h-48">
        <img :src="logo" :alt="name" class="max-h-full max-w-full object-contain">
      </div>
      
      <!-- Content Area -->
      <div class="p-6 border-t flex-1 flex flex-col">
        <div class="flex items-start gap-4 mb-6 flex-1">
          <img :src="smallLogo" :alt="name" class="w-12 h-12 object-contain flex-shrink-0">
          <div>
            <h3 class="font-bold text-gray-900 mb-2">{{ name }}</h3>
            <p class="text-sm text-gray-600">{{ description }}</p>
          </div>
        </div>

        <!-- Website Link -->
        <a :href="website" 
           target="_blank" 
           rel="noopener noreferrer"
           class="flex items-center justify-center gap-2 bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors mt-auto group-hover:scale-[1.02] duration-300">
          <span>Website besuchen</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>