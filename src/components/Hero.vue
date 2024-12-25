<script setup>
defineProps({
  subtitle: {
    type: String,
    default: 'CONNECTING PRODUCTS WITH GLOBAL MARKETS'
  },
  title: {
    type: String,
    default: "We bring your products to the heart of Europe"
  },
  description: {
    type: String,
    default: "Connect your products with international markets through our expertise and global partnerships."
  }
})
</script>

<template>
  <div class="relative h-[80vh]">
    <!-- Background Image -->
    <div 
      class="absolute inset-0 bg-cover bg-center"
      style="background-image: url('https://abdullahy2.sg-host.com/wp-content/uploads/2024/08/top-view-speed-boat-paradise-turquoise-ocean-water-generative-ai-copy.jpg');"
    >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/30"></div>
    </div>

    <!-- Content -->
    <div class="relative h-full z-10">
      <div class="h-full flex items-center" style="padding-left: 96px;">
        <div class="max-w-3xl">
          <h2 class="text-primary font-medium text-lg mb-4">
            {{ subtitle }}
          </h2>
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            {{ title }}
          </h1>
          <p class="text-xl text-white/90 mb-8 max-w-2xl">
            {{ description }}
          </p>
          <a 
            href="#" 
            class="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded hover:bg-primary/90 transition-colors"
          >
            Explore New Horizons
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>