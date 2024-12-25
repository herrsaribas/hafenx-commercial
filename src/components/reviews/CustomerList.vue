<script setup>
const customers = [
  {
    name: 'Simon Luff',
    company: 'Sanacorp Pharmahandel GmbH',
    image: 'https://abdullahy2.sg-host.com/wp-content/uploads/2024/08/simon-luff.jpg'
  },
  {
    name: 'Dr. Michael Weber',
    company: 'MediCare Solutions',
    image: 'https://abdullahy2.sg-host.com/wp-content/uploads/2024/08/customer-2.jpg'
  },
  {
    name: 'Anna Schmidt',
    company: 'HealthTech GmbH',
    image: 'https://abdullahy2.sg-host.com/wp-content/uploads/2024/08/customer-3.jpg'
  }
]
</script>

<template>
  <div class="mt-8 space-y-6">
    <div v-for="customer in customers" :key="customer.name" 
         class="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
      <img :src="customer.image" :alt="customer.name" 
           class="w-12 h-12 rounded-full object-cover">
      <div>
        <h4 class="font-medium text-gray-900">{{ customer.name }}</h4>
        <p class="text-sm text-gray-500">{{ customer.company }}</p>
      </div>
    </div>
  </div>
</template>