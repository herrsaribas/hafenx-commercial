<script setup>
import FlagshipBrandCard from './FlagshipBrandCard.vue';

const brands = [
  {
    logo: 'https://nordicschiller.de/wp-content/uploads/2024/03/nordic-schiller-logo.png',
    smallLogo: 'https://nordicschiller.de/wp-content/uploads/2024/03/nordic-schiller-icon.png',
    name: 'Nordic Schiller',
    description: 'Wohnaccessoires und Textilien spielen eine entscheidende Rolle bei der Gestaltung der Atmosphäre und Persönlichkeit von Wohnräumen. Jenseits der reinen Funktionalität sind sie künstlerische Ausdrücke, die aus einem Haus ein Zuhause machen.',
    website: 'https://nordicschiller.de'
  },
  {
    logo: 'https://smartfarben.de/wp-content/uploads/2024/03/smart-farben-logo.png',
    smallLogo: 'https://smartfarben.de/wp-content/uploads/2024/03/smart-farben-icon.png',
    name: 'Smartfarben',
    description: 'Künstlerbedarf bildet die Grundlage für die Schaffung von Kunstwerken und ermöglicht Künstlern, ihre kreativen Visionen in die Realität umzusetzen.',
    website: 'https://smartfarben.de'
  }
];
</script>

<template>
  <section class="relative bg-[#f0f0f0]" style="background-image: url('https://abdullahy2.sg-host.com/wp-content/uploads/2024/08/nautical-map-bg.png'); background-size: cover; background-opacity: 0.1;">
    <!-- Overlay for background -->
    <div class="absolute inset-0 bg-[#f0f0f0]/95"></div>
    
    <!-- Vertical Line -->
    <div class="absolute left-[320px] top-0 bottom-0 w-px bg-gray-200"></div>

    <div class="container mx-auto px-4 py-20 relative">
      <div class="flex gap-24">
        <!-- Left Column -->
        <div class="w-[280px] flex-shrink-0">
          <!-- Title with Icon -->
          <div class="flex items-center gap-3 mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
            </svg>
            <h2 class="text-lg font-medium">Unsere Flaggschiffmarken</h2>
          </div>
        </div>

        <!-- Right Column -->
        <div class="flex-1">
          <!-- Section Header -->
          <div class="mb-12 relative">
            <div class="absolute -left-12 top-0 w-1 h-24 bg-primary"></div>
            <h2 class="text-4xl font-bold mb-6">
              Entdecken Sie unsere<br>
              exklusiven Marken
            </h2>
            <p class="text-gray-600 text-lg">
              Qualität und Innovation vereint in unseren führenden Marken für Wohnkultur und Künstlerbedarf.
            </p>
          </div>

          <!-- Brands Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FlagshipBrandCard 
              v-for="brand in brands" 
              :key="brand.name"
              v-bind="brand"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>