<script setup>
import { ref } from 'vue';
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import MainMenu from './MainMenu.vue';
import Logo from './Logo.vue';

const isMenuOpen = ref(false);
</script>

<template>
  <header class="bg-white border-b border-gray-200">
    <nav class="mx-auto flex max-w-[1440px] items-center h-24" aria-label="Global">
      <div class="flex items-center">
        <!-- Hamburger menu -->
        <button 
          type="button" 
          class="h-24 px-8 inline-flex items-center justify-center text-gray-700 hover:text-primary border-r border-gray-100 hover:bg-gray-50 transition-colors"
          @click="isMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-12 w-12" aria-hidden="true" />
        </button>

        <!-- Logo -->
        <div class="px-8">
          <Logo />
        </div>
      </div>

      <!-- Right section -->
      <div class="flex flex-1 justify-end items-center gap-6 px-8">
        <button class="text-gray-700 hover:text-primary">
          <MagnifyingGlassIcon class="h-6 w-6" />
        </button>
        <a href="#" class="text-sm font-semibold leading-6 text-gray-900 hover:text-primary">Log in</a>
      </div>
    </nav>

    <MainMenu :is-open="isMenuOpen" @close="isMenuOpen = false" />
  </header>
</template>