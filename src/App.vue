<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import ServicesSection from './components/services/ServicesSection.vue'
import ReviewsSection from './components/reviews/ReviewsSection.vue'
import PartnersSection from './components/partners/PartnersSection.vue'
import MarketplacesSection from './components/marketplaces/MarketplacesSection.vue'
import ProcessSection from './components/process/ProcessSection.vue'
import StrategicPartnersSection from './components/strategic/StrategicPartnersSection.vue'
import FlagshipBrandsSection from './components/flagship/FlagshipBrandsSection.vue'
</script>

<template>
  <Header />
  <Hero />
  <ServicesSection />
  <ReviewsSection />
  <PartnersSection />
  <MarketplacesSection />
  <ProcessSection />
  <StrategicPartnersSection />
  <FlagshipBrandsSection />
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>