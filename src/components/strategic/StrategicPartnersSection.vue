<script setup>
import StrategicPartnerCard from './StrategicPartnerCard.vue';

const partners = [
  {
    logo: 'https://www.admirise.com/assets/img/logo.svg',
    smallLogo: 'https://www.admirise.com/assets/img/logo.svg',
    name: 'Admirise GmbH',
    description: 'Performance Marketing'
  },
  {
    logo: 'https://mentoramazon.com/wp-content/uploads/2024/04/Yesil-Carpici-Ramazan-Bayrami-Mesaji-Instagram-Gonderisi-13-300x300.png',
    smallLogo: 'https://mentoramazon.com/wp-content/uploads/2024/04/Yesil-Carpici-Ramazan-Bayrami-Mesaji-Instagram-Gonderisi-13-300x300.png',
    name: 'Mentor Amazon',
    description: 'Amazon Fullservice'
  },
  {
    logo: 'https://www.sellerway.de/tema/genel/uploads/logo/footer/SW_logo_Gri-k.png',
    smallLogo: 'https://www.sellerway.de/tema/genel/uploads/logo/footer/SW_logo_Gri-k.png',
    name: 'Sellerway',
    description: 'E-Commerce Consulting'
  }
];
</script>

<template>
  <section class="relative bg-white">
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
            <h2 class="text-lg font-medium">Unsere Strategische</h2>
          </div>
        </div>

        <!-- Right Column -->
        <div class="flex-1">
          <!-- Section Header -->
          <div class="mb-12 relative">
            <div class="absolute -left-12 top-0 w-1 h-24 bg-primary"></div>
            <h2 class="text-4xl font-bold mb-6">
              Lösungs Partner
            </h2>
            <p class="text-gray-600 text-lg">
              Wir arbeiten mit führenden Partnern zusammen, um Ihnen erstklassige E-Commerce-Lösungen zu bieten.
            </p>
          </div>

          <!-- Partners Grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StrategicPartnerCard 
              v-for="partner in partners" 
              :key="partner.name"
              v-bind="partner"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>