<script setup>
import PartnerCard from './PartnerCard.vue';

const partners = [
  {
    logo: 'https://cdn.shopify.com/s/files/1/0372/1340/5317/files/LAW_LOGO_250x133-copy_c1d11b84-62ea-42e8-a8bc-0ee7b27b2441.png?height=628&pad_color=ffffff&v=1613782546&width=1200',
    name: 'LAV',
    description: 'Premium Lifestyle Products',
    backgroundImage: 'https://img-lav.mncdn.com/mnresize/600/600/Content/Images/Originals/3425036_0.jpeg'
  },
  {
    logo: 'https://www.pasabahce.com/assets/img/logo.png',
    name: 'Pasabahce',
    description: 'Glassware Excellence',
    backgroundImage: 'https://cdn.covet.pics/postassets/16488999/high_resolution/1694c3a68cc468e830f96d6c19ed659b'
  },
  {
    logo: 'https://abdullahy2.sg-host.com/wp-content/uploads/2024/08/rich-hobby-logo.png',
    name: 'Rich Hobby',
    description: 'Creative Crafts & Hobbies',
    backgroundImage: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2371&q=80'
  },
  {
    logo: 'https://mediacat.com/wp-content/uploads/2024/01/english-home-yeni-amblem-ve-logo-00.jpg',
    name: 'English Home',
    description: 'Home & Living Solutions',
    backgroundImage: 'https://static.ticimax.cloud/cdn-cgi/image/width=399,quality=99,format=webp/61202/uploads/urunresimleri/buyuk/sweet-spring-dijital-baskili-soft-cott-c168f5.jpg'
  },
  {
    logo: 'https://abdullahy2.sg-host.com/wp-content/uploads/2024/08/cralex-logo.png',
    name: 'Cralex',
    description: 'Industrial Innovation',
    backgroundImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80'
  }
];
</script>

<template>
  <section class="relative bg-[#F0F0F0]" style="background-image: url('https://abdullahy2.sg-host.com/wp-content/uploads/2024/08/nautical-map-bg.png'); background-size: cover; background-opacity: 0.1;">
    <!-- Overlay for background -->
    <div class="absolute inset-0 bg-[#F0F0F0]/95"></div>
    
    <!-- Vertical Line -->
    <div class="absolute left-[320px] top-0 bottom-0 w-px bg-gray-200"></div>

    <div class="container mx-auto px-4 py-20 relative">
      <div class="flex gap-24">
        <!-- Left Column -->
        <div class="w-[280px] flex-shrink-0">
          <!-- Title with Icon -->
          <div class="flex items-center gap-3 mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h2 class="text-lg font-medium">Unsere Partner</h2>
          </div>
        </div>

        <!-- Right Column -->
        <div class="flex-1">
          <!-- Section Header -->
          <div class="mb-12 relative">
            <div class="absolute -left-12 top-0 w-1 h-24 bg-primary"></div>
            <h2 class="text-4xl font-bold mb-6">
              Qualität, auf die wir setzen:<br>
              Die Marken vertrauen uns
            </h2>
            <p class="text-gray-600 text-lg">
              Wir arbeiten mit den besten Marken zusammen, um hochwertige Produkte sicher und erfolgreich in die europäischen Märkte zu bringen.
            </p>
          </div>

          <!-- Partners Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PartnerCard 
              v-for="partner in partners" 
              :key="partner.name"
              v-bind="partner"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Circle Button with Text (Positioned at bottom) -->
    <div class="group absolute" style="left: 320px; bottom: 20px; transform: translate(-50%, 50%);">
      <button class="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300 hover:bg-white hover:shadow-lg bg-white z-10 relative">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 group-hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
      </button>
      <span class="absolute left-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-gray-600">
        Alle Partner ansehen
      </span>
    </div>
  </section>
</template>