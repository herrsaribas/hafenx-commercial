<script setup>
import ServiceCard from './ServiceCard.vue';

const services = [
  {
    backgroundImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80',
    title: 'Marktanalyse & Strategieentwicklung',
    description: 'Wir analysieren den europäischen Markt und entwickeln maßgeschneiderte Strategien.',
    projectCount: '120+'
  },
  {
    backgroundImage: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80',
    title: 'Produktbeschaffung & -management',
    description: 'Wir übernehmen den gesamten Prozess der Produktbeschaffung.',
    projectCount: '250+'
  },
  {
    backgroundImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80',
    title: 'Logistik & Versand',
    description: 'Expertise für sichere und termingerechte Lieferungen.',
    projectCount: '1000+'
  },
  {
    backgroundImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80',
    title: 'Rechtliche Beratung & Zollabwicklung',
    description: 'Navigation durch komplexe rechtliche Anforderungen.',
    projectCount: '450+'
  },
  {
    backgroundImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80',
    title: 'Software-Integration',
    description: 'Fortschrittliche Software-Infrastruktur für nahtlose Integration.',
    projectCount: '300+'
  },
  {
    backgroundImage: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2371&q=80',
    title: 'Marketing & Vertrieb',
    description: 'Zielgerichtete Marketingkampagnen für optimale Platzierung.',
    projectCount: '800+'
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
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <h2 class="text-lg font-medium">Was wir tun</h2>
          </div>
        </div>

        <!-- Right Column -->
        <div class="flex-1">
          <!-- Section Header -->
          <div class="mb-12 relative">
            <div class="absolute -left-12 top-0 w-1 h-24 bg-primary"></div>
            <h2 class="text-4xl font-bold mb-6">
              Unsere Dienstleistungen:<br>
              Ein sicherer Hafen für Ihren Erfolg
            </h2>
            <p class="text-gray-600 text-lg">
              Mit unserer langjährigen Erfahrung im Handel navigieren wir Ihr Unternehmen sicher durch die europäischen Märkte.
            </p>
          </div>

          <!-- Services Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              v-for="service in services" 
              :key="service.title"
              v-bind="service"
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
        Leistungen in der Übersicht
      </span>
    </div>
  </section>
</template>