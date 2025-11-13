<template>
  <div aria-hidden="true" class="absolute inset-0 z-0 pointer-events-none">
    <canvas ref="particleCanvas" class="w-full h-full"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useParticles } from "~/composables/useParticles";

const particleCanvas = ref<HTMLCanvasElement | null>(null);
const { initParticleAnimation } = useParticles();

let cleanup: (() => void) | null = null;

onMounted(() => {
  if (particleCanvas.value) {
    cleanup = initParticleAnimation(particleCanvas.value, {
      quantity: 40,
      staticity: 50,
      ease: 50,
    });
  }
});

onUnmounted(() => {
  if (cleanup) {
    cleanup();
  }
});
</script>
