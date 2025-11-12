<template>
  <section class="relative overflow-hidden">
    <img
      class="absolute -left-40 -top-16 w-xl object-cover z-10"
      :src="getAssetPath('/images/white-background-abstract-with-wavy-line-gold-left.png')"
      alt=""
    />
    <img
      class="absolute -right-40 -top-16 w-xl object-cover z-10"
      :src="getAssetPath('/images/white-background-abstract-with-wavy-line-gold-right.png')"
      alt=""
    />

    <div class="w-full md:max-w-6xl relative px-4 sm:px-6 mx-auto">
      <!-- Particles animation -->
      <div aria-hidden="true" class="absolute inset-0 -z-10">
        <canvas ref="particleCanvas"></canvas>
      </div>

      <!-- Illustration -->
      <div
        aria-hidden="true"
        class="pointer-events-none overflow-hidden rounded-b-[3rem] absolute inset-0 -z-10 -mx-28 hidden"
      >
        <!-- Black overlay with opacity -->
        <div class="absolute inset-0 bg-black opacity-70"></div>

        <div class="absolute bottom-0 left-1/2 -translate-x-1/2">
          <img
            alt="Hero Illustration"
            class="max-w-none"
            height="774"
            :src="getAssetPath('/images/glow-bottom.svg')"
            width="2146"
          />
        </div>
      </div>

      <div class="pb-16 md:pb-32 pt-32 md:pt-42 relative z-10">
        <!-- Hero content -->
        <div class="text-center max-w-3xl mx-auto">
          <!-- Main heading -->
          <h2
            class="text-6xl md:text-8xl bg-clip-text text-transparent font-bold inline-flex relative mb-4 bg-gradient-gold"
          >
            2025
          </h2>
          <h1
            class="bg-clip-text text-transparent text-4xl md:text-[3.5rem] leading-tight md:leading-none tracking-[-0.017em] font-extrabold pb-4 bg-gradient-gold"
            data-aos="fade-down"
          >
            Telecom <span class="">Awards</span> Tajikistan
          </h1>

          <!-- Description -->
          <p
            class="px-14 text-lg md:text-xl mb-8 bg-clip-text text-transparent bg-gradient-gold"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Первая народная премия, где жители Таджикистана выбирают лучших
            операторов и интернет-провайдеров
          </p>

          <!-- CTA Button -->
          <div
            class="flex justify-center mt-8"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <a
              href="/vote"
              class="inline-flex items-center justify-center px-8 py-3 rounded-lg text-black font-medium bg-gradient-gold hover:opacity-90 transition-opacity text-lg"
            >
              Голосовать
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5 ml-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <Clients />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useParticles } from "~/composables/useParticles";

const particleCanvas = ref<HTMLCanvasElement | null>(null);
const { initParticleAnimation } = useParticles();
const { getAssetPath } = useAssetPath();

let cleanup: (() => void) | null = null;

onMounted(() => {
  if (particleCanvas.value) {
    cleanup = initParticleAnimation(particleCanvas.value, {
      quantity: 30,
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
