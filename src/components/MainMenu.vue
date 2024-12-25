<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline';
import NavigationList from './navigation/NavigationList.vue';
import { mainNavigation } from '../data/navigation';

defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
});

defineEmits(['close']);
</script>

<template>
  <div 
    class="fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300"
    :class="isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'"
    @click="$emit('close')"
  >
    <div 
      class="fixed bottom-0 left-0 right-0 bg-white transition-transform duration-300 ease-in-out transform h-[90vh] overflow-y-auto"
      :class="isOpen ? 'translate-y-0' : 'translate-y-full'"
      @click.stop
    >
      <div class="p-6">
        <div class="flex items-center justify-between mb-8">
          <img 
            src="https://abdullahy2.sg-host.com/wp-content/uploads/2024/08/hafenx-logo.png" 
            alt="HafenX Logo" 
            class="h-8 w-auto"
          />
          <button 
            type="button" 
            class="rounded-md p-2 text-gray-700 hover:text-primary"
            @click="$emit('close')"
          >
            <XMarkIcon class="h-6 w-6" />
          </button>
        </div>
        
        <NavigationList :items="mainNavigation" />
      </div>
    </div>
  </div>
</template>