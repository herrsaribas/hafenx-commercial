<script setup>
import ReviewCard from './ReviewCard.vue';
import CustomerStats from './CustomerStats.vue';

const reviews = [
  {
    image: 'https://abdullahy2.sg-host.com/wp-content/uploads/2024/08/simon-luff.jpg',
    name: 'Simon Luff',
    position: 'Product Owner',
    company: 'Sanacorp Pharmahandel GmbH',
    content: 'Mit codeculture haben wir einen Entwicklungspartner gefunden, der nicht nur durch eine herausragende Umsetzungsqualität überzeugt, sondern sich auch als Teil des Teams versteht und uns in allen Belangen der Produktentwicklung tatkräftig zur Seite steht.'
  }
];
</script>

<template>
  <section class="relative bg-white" style="background-image: url('https://abdullahy2.sg-host.com/wp-content/uploads/2024/08/nautical-map-bg.png'); background-size: cover; background-opacity: 0.1;">
    <!-- Overlay for background -->
    <div class="absolute inset-0 bg-white/95"></div>
    
    <!-- Vertical Line -->
    <div class="absolute left-[320px] top-0 bottom-0 w-px bg-gray-200"></div>

    <div class="container mx-auto px-4 py-20 relative">
      <div class="flex gap-24">
        <!-- Left Column -->
        <div class="w-[280px] flex-shrink-0">
          <!-- Title with Icon -->
          <div class="flex items-center gap-3 mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <h2 class="text-lg font-medium">Kundenstimmen</h2>
          </div>

          <!-- Customer Stats -->
          <CustomerStats />
        </div>

        <!-- Right Column -->
        <div class="flex-1">
          <!-- Reviews Grid -->
          <div class="grid grid-cols-1 gap-12">
            <ReviewCard 
              v-for="review in reviews" 
              :key="review.name"
              v-bind="review"
            />
          </div>

          <!-- Ship Image -->
          <div class="absolute top-0 right-0">
            <img 
              src="https://abdullahy2.sg-host.com/wp-content/uploads/2024/08/ship-icon.png" 
              alt="Ship Icon" 
              class="w-32 h-32 opacity-10"
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
        Alle Referenzen ansehen
      </span>
    </div>
  </section>
</template>