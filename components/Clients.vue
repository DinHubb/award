<template>
  <section data-aos="fade-up">
    <div class="max-w-6xl relative mx-auto px-4">
      <!-- Particles animation -->
      <div class="absolute inset-0 -z-10">
        <div aria-hidden="true" class="absolute inset-0 -z-10">
          <canvas
            ref="particleCanvas"
            data-particle-animation=""
            data-particle-quantity="5"
          ></canvas>
        </div>
      </div>

      <div class="mb-28 sm:mb-10">
        <div class="overflow-hidden">
          <div class="inline-flex flex-nowrap w-full clients-mask">
            <ul
              class="flex items-center justify-start animate-infinite-scroll mx-8"
            >
              <li v-for="i in 9" :key="i" class="mx-8">
                <div class="client-logo-wrapper">
                  <img
                    :src="getImagePath(i)"
                    :alt="`Client ${i}`"
                    class="max-w-none h-9 client-logo transition-opacity duration-300"
                  />
                </div>
              </li>
            </ul>
            <ul
              aria-hidden="true"
              class="flex items-center justify-start animate-infinite-scroll mx-8"
            >
              <li v-for="i in 9" :key="`dup-${i}`" class="mx-8">
                <div class="client-logo-wrapper">
                  <img
                    :src="getImagePath(i)"
                    :alt="`Client ${i}`"
                    class="max-w-none h-9 client-logo transition-opacity duration-300"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const particleCanvas = ref<HTMLCanvasElement | null>(null);
const { initParticleAnimation } = useParticles();
const { getAssetPath } = useAssetPath();

const getImagePath = (index: number) => {
  return getAssetPath(`/images/client-0${index}.svg`);
};

onMounted(() => {
  if (particleCanvas.value) {
    const quantity = Number(particleCanvas.value.dataset.particleQuantity || 5);
    initParticleAnimation(particleCanvas.value, { quantity });
  }
});
</script>

<style scoped>
.clients-mask {
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0,
    black 128px,
    black calc(100% - 128px),
    transparent 100%
  );
  mask-image: linear-gradient(
    to right,
    transparent 0,
    black 128px,
    black calc(100% - 128px),
    transparent 100%
  );
}

.client-logo-wrapper {
  display: inline-block;
}

.client-logo {
  filter: brightness(0) saturate(100%) invert(78%) sepia(33%) saturate(551%)
    hue-rotate(359deg) brightness(102%) contrast(96%);
  opacity: 0.6;
  transition: all 300ms;
}

.client-logo-wrapper:hover .client-logo {
  filter: brightness(0) saturate(100%) invert(95%) sepia(62%) saturate(1084%)
    hue-rotate(305deg) brightness(104%) contrast(97%);
  opacity: 1;
}
</style>
