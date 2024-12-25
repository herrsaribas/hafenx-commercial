<script setup>
const stats = [
  {
    value: '8+',
    label: 'Integrierte Marktplätze'
  },
  {
    value: '260K+',
    label: 'Aktive Produkte'
  },
  {
    value: '130K+',
    label: 'Monatliche Bestellungen'
  },
  {
    value: '12+',
    label: 'Europäische Länder'
  }
];
</script>

<template>
  <div class="space-y-8">
    <div v-for="stat in stats" :key="stat.label" 
         class="border-b border-gray-100 pb-6 last:border-0">
      <div class="text-primary text-3xl font-bold font-heading">
        {{ stat.value }}
      </div>
      <div class="text-gray-600 text-sm mt-1">
        {{ stat.label }}
      </div>
    </div>
  </div>
</template>