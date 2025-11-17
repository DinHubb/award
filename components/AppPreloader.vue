<template>
  <Transition name="fade">
    <div
      v-if="isLoading"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div class="flex flex-col items-center space-y-8">
        <!-- Logo/Text -->
        <div class="text-center animate-pulse-slow">
          <h2
            class="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-gold mb-3"
          >
            Telecom Awards
          </h2>
          <p class="text-xl text-gold-400">Tajikistan 2025</p>
        </div>

        <!-- Animated loader -->
        <div class="relative flex items-center justify-center">
          <!-- Outer spinning ring with gradient -->
          <div class="relative w-20 h-20">
            <div
              class="absolute inset-0 rounded-full border-4 border-transparent border-t-gold-500 border-r-gold-400 animate-spin"
            ></div>
            <div
              class="absolute inset-2 rounded-full border-4 border-transparent border-b-gold-600 border-l-gold-500 animate-spin-reverse"
            ></div>
          </div>
        </div>

        <!-- Loading text with dots animation -->
        <div class="flex items-center space-x-1">
          <p class="text-sm text-gold-400">
            {{ $t("preloader.loading") }}
          </p>
          <span class="flex space-x-1">
            <span
              class="w-1 h-1 bg-gold-500 rounded-full animate-bounce"
            ></span>
            <span
              class="w-1 h-1 bg-gold-500 rounded-full animate-bounce"
              style="animation-delay: 0.1s"
            ></span>
            <span
              class="w-1 h-1 bg-gold-500 rounded-full animate-bounce"
              style="animation-delay: 0.2s"
            ></span>
          </span>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const isLoading = ref(true);

const preloadImages = async (imageUrls: string[]): Promise<void> => {
  const promises = imageUrls.map((url) => {
    return new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
      img.src = url;
    });
  });

  try {
    await Promise.all(promises);
  } catch (error) {
    console.error("Error loading images:", error);
  }
};

onMounted(async () => {
  // Список изображений для предзагрузки
  const imagesToPreload = [
    "/images/hero-bg-left.png",
    "/images/hero-bg-right.png",
  ];

  try {
    await preloadImages(imagesToPreload);
    // Небольшая задержка для плавности
    setTimeout(() => {
      isLoading.value = false;
    }, 300);
  } catch (error) {
    // Даже если изображения не загрузились, скрываем preloader
    setTimeout(() => {
      isLoading.value = false;
    }, 1000);
  }
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes spin-reverse {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}

@keyframes pulse-slow {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

.animate-spin-reverse {
  animation: spin-reverse 1.5s linear infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}
</style>
