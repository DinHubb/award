<template>
  <section id="features" class="relative overflow-hidden pt-32 pb-20">
    <!-- Background Video -->
    <video
      autoplay
      loop
      muted
      playsinline
      class="absolute inset-0 w-full h-full object-cover -z-10"
    >
      <source src="/video/server_rack.mp4" type="video/mp4" />
    </video>

    <!-- Black overlay with opacity -->
    <div class="absolute inset-0 bg-black opacity-20"></div>

    <div class="max-w-6xl mx-auto relative z-10 space-y-10">
      <div class="flex items-center">
        <div class="p-10 w-1/2 bg-black/70 backdrop-blur-sm rounded-3xl">
          <h2
            class="text-3xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-gold text-center mb-4"
          >
            Связь и инновации
          </h2>
          <p class="bg-clip-text text-transparent gold-gradient text-center">
            Telecom Awards Tajikistan учреждена по инициативе Службы связи при
            Правительстве Республики Таджикистан в рамках реализации Стратегии
            развития Таджикистана на 2025–2030 годы, сосредоточенной на Годах
            развития цифровой экономики и инноваций.
          </p>
        </div>
      </div>

      <div class="flex items-center">
        <div class="flex-1"></div>
        <div class="p-10 w-1/2 bg-black/70 backdrop-blur-sm rounded-3xl">
          <h2
            class="text-3xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-gold text-center mb-4"
          >
            Объединение телекоммуникаций
          </h2>
          <p class="bg-clip-text text-transparent gold-gradient text-center">
            Премия направлена на объединение операторов и интернет-провайдеров,
            стимулирование внедрения современных технологий и повышение качества
            мобильной связи и интернета по всей стране.
          </p>
        </div>
      </div>

      <div class="flex items-center">
        <div class="p-10 w-1/2 bg-black/70 backdrop-blur-sm rounded-3xl">
          <h2
            class="text-3xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-gold text-center mb-4"
          >
            Государство, бизнес, пользователи
          </h2>
          <p class="bg-clip-text text-transparent gold-gradient text-center">
            Telecom Awards формирует открытую платформу, где государство, бизнес
            и пользователи совместно оценивают качество услуг, уровень инноваций
            и вклад компаний в развитие цифрового общества Таджикистана.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const particleCanvas = ref<HTMLCanvasElement | null>(null);
const { initParticleAnimation } = useParticles();

onMounted(() => {
  if (particleCanvas.value) {
    const quantity = Number(particleCanvas.value.dataset.particleQuantity || 8);
    initParticleAnimation(particleCanvas.value, { quantity, staticity: 30 });
  }
});
</script>
