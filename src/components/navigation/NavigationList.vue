<script setup>
import NavigationItem from './NavigationItem.vue';

defineProps({
  items: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <div class="space-y-6">
    <NavigationItem 
      v-for="item in items" 
      :key="item.title"
      :item="item"
    />
  </div>
</template>