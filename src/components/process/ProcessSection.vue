<script setup>
import ProcessStep from './ProcessStep.vue';

const processes = [
  {
    number: '01',
    title: 'Produktauswahl & Einkauf.',
    description: 'Wir beginnen damit, die besten Produkte direkt von führenden Herstellern in der Türkei auszuwählen und zu kaufen. Unsere Expertise gewährleistet, dass wir qualitativ hochwertige und wettbewerbsfähige Produkte beschaffen, die den Anforderungen des europäischen Marktes entsprechen.'
  },
  {
    number: '02',
    title: 'Strategische Planung.',
    description: 'Nach dem Einkauf entwickeln wir eine maßgeschneiderte Strategie, um Ihre Produkte in den europäischen Märkten optimal zu positionieren. Dabei analysieren wir Markttrends und identifizieren die besten Verkaufsplattformen für Ihre Produkte.'
  },
  {
    number: '03',
    title: 'Logistik & Lagerung.',
    description: 'Ihre Produkte werden in unseren modernen Lagern in Deutschland sicher gelagert. Wir übernehmen die gesamte Logistik, von der Einlagerung bis zur termingerechten Auslieferung an die Marktplätze in Europa.'
  },
  {
    number: '04',
    title: 'Marktplatz-Integration & Vertrieb.',
    description: 'Wir integrieren Ihre Produkte nahtlos in führende europäische Marktplätze wie Amazon PAN EU, Kaufland und andere. Durch unsere umfassende Erfahrung im Vertrieb stellen wir sicher, dass Ihre Produkte optimal präsentiert und verkauft werden.'
  },
  {
    number: '05',
    title: 'Marketing & Verkaufsförderung.',
    description: 'Unsere Marketingexperten entwickeln gezielte Kampagnen, um Ihre Produkte bekannt zu machen und die Nachfrage zu steigern. Mit maßgeschneiderten Verkaufsförderungsmaßnahmen unterstützen wir den langfristigen Erfolg Ihrer Marke.'
  },
  {
    number: '06',
    title: 'Monitoring & Optimierung.',
    description: 'Wir überwachen kontinuierlich die Performance Ihrer Produkte und optimieren die Strategien, um den Erfolg nachhaltig zu sichern. So bleiben Sie wettbewerbsfähig und können Ihr Geschäft weiter ausbauen.'
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
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17l6-6-6-6" />
            </svg>
            <h2 class="text-lg font-medium">Unser Arbeitsmodell</h2>
          </div>
        </div>

        <!-- Right Column -->
        <div class="flex-1">
          <!-- Section Header -->
          <div class="mb-12 relative">
            <div class="absolute -left-12 top-0 w-1 h-24 bg-primary"></div>
            <h2 class="text-4xl font-bold mb-6">
              Effiziente Prozesse für<br>
              Ihren Erfolg
            </h2>
            <p class="text-gray-600 text-lg">
              Ein bewährtes, maßgeschneidertes Vorgehen, das Ihre Marke effizient und erfolgreich auf die europäischen Märkte bringt. Vom Produkteinkauf bis zur erfolgreichen Platzierung auf europäischen Marktplätzen – wir bieten Ihnen ein umfassendes und effizientes Geschäftsmodell.
            </p>
          </div>

          <!-- Process Steps Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProcessStep 
              v-for="process in processes" 
              :key="process.number"
              v-bind="process"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>