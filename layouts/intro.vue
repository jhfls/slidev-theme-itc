<script setup lang="ts">
import { computed } from 'vue';
import { handleBackground } from './layoutHelper';

const props = defineProps({
  background: {
    default: undefined,
  },
});

const style = computed(() => handleBackground(props.background, true));
</script>

<template>
  <div class="slidev-layout intro" :style="style">
    <div class="my-auto">
      <slot />
    </div>
  </div>
</template>
