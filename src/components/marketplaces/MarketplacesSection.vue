<script setup>
import MarketplaceCard from './MarketplaceCard.vue';
import MarketplaceStats from './MarketplaceStats.vue';
import { marketplaces } from '../../data/marketplaces';
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
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <h2 class="text-lg font-medium">Unsere Markplätze</h2>
          </div>

          <!-- Stats -->
          <MarketplaceStats />
        </div>

        <!-- Right Column -->
        <div class="flex-1">
          <!-- Section Header -->
          <div class="mb-12 relative">
            <div class="absolute -left-12 top-0 w-1 h-24 bg-primary"></div>
            <h2 class="text-4xl font-bold mb-6">
              Ihre Produkte auf führenden<br>
              europäischen Marktplätzen
            </h2>
            <p class="text-gray-600 text-lg">
              Erreichen Sie Millionen von Kunden durch unsere integrierten Marketplace-Lösungen.
            </p>
          </div>

          <!-- Marketplaces Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MarketplaceCard 
              v-for="marketplace in marketplaces" 
              :key="marketplace.name"
              v-bind="marketplace"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Circle Button with Text -->
    <div class="group absolute" style="left: 320px; bottom: 20px; transform: translate(-50%, 50%);">
      <button class="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300 hover:bg-white hover:shadow-lg bg-white z-10 relative">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 group-hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
      </button>
      <span class="absolute left-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-gray-600">
        Alle Marktplätze ansehen
      </span>
    </div>
  </section>
</template>