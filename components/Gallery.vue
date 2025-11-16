<script setup lang="ts">
// Gallery items with bento layout sizes
interface GalleryItem {
  id: number;
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  title: string;
  date: string;
  size: "small" | "medium" | "large" | "wide" | "tall";
}

const galleryItems = ref<GalleryItem[]>([
  {
    id: 1,
    type: "image",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    title: "Церемония награждения 2024",
    date: "15 декабря 2024",
    size: "large",
  },
  {
    id: 2,
    type: "video",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    title: "Highlights 2024",
    date: "15 декабря 2024",
    size: "medium",
  },
  {
    id: 3,
    type: "image",
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    title: "Награждение победителей",
    date: "15 декабря 2024",
    size: "medium",
  },
  {
    id: 4,
    type: "image",
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    title: "Красная дорожка",
    date: "15 декабря 2024",
    size: "tall",
  },
  {
    id: 5,
    type: "image",
    src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80",
    title: "VIP гости мероприятия",
    date: "15 декабря 2024",
    size: "small",
  },
  {
    id: 6,
    type: "video",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80",
    title: "Интервью победителей",
    date: "15 декабря 2024",
    size: "wide",
  },
  {
    id: 7,
    type: "image",
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
    title: "Торжественный момент",
    date: "14 декабря 2024",
    size: "small",
  },
  {
    id: 8,
    type: "image",
    src: "https://images.unsplash.com/photo-1519750783826-e2420f4d687f?w=800&q=80",
    title: "Подготовка к церемонии",
    date: "14 декабря 2024",
    size: "medium",
  },
  {
    id: 9,
    type: "image",
    src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
    title: "Сцена и зал",
    date: "14 декабря 2024",
    size: "wide",
  },
  {
    id: 10,
    type: "image",
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
    title: "Участники церемонии",
    date: "13 декабря 2024",
    size: "small",
  },
]);

// Loading state
const isLoading = ref(true);

// Modal state
const selectedItem = ref<GalleryItem | null>(null);
const isModalOpen = ref(false);

// Simulate loading
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1500);
});

const openModal = (item: GalleryItem) => {
  selectedItem.value = item;
  isModalOpen.value = true;
  // Prevent body scroll
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  selectedItem.value = null;
  isModalOpen.value = false;
  // Restore body scroll
  document.body.style.overflow = "";
};

// Keyboard navigation
onMounted(() => {
  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === "Escape" && isModalOpen.value) {
      closeModal();
    }
  };
  window.addEventListener("keydown", handleKeydown);

  onUnmounted(() => {
    window.removeEventListener("keydown", handleKeydown);
    document.body.style.overflow = "";
  });
});
</script>

<template>
  <section id="gallery" class="relative pb-16 pt-20 md:py-24 overflow-hidden">
    <!-- Background decoration -->
    <!-- <div
      class="absolute left-0 top-1/4 w-96 h-96 opacity-20 bg-no-repeat bg-contain pointer-events-none"
      style="
        background-image: url('/images/white-background-abstract-with-wavy-line-gold-left.png');
      "
      aria-hidden="true"
    />
    <div
      class="absolute right-0 bottom-1/4 w-96 h-96 opacity-20 bg-no-repeat bg-contain pointer-events-none"
      style="
        background-image: url('/images/white-background-abstract-with-wavy-line-gold-right.png');
      "
      aria-hidden="true"
    /> -->

    <!-- Ambient gold glow effects -->
    <div
      class="absolute top-1/3 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px] pointer-events-none"
      aria-hidden="true"
    ></div>
    <div
      class="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gold-400/10 rounded-full blur-[120px] pointer-events-none"
      aria-hidden="true"
    ></div>

    <div class="app-container relative z-10">
      <!-- Page Title with enhanced design -->
      <div class="text-center mb-12 md:mb-20 animate-fade-in-up">
        <h1
          class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-clip-text text-transparent bg-gradient-gold-light mb-6 tracking-tight"
        >
          {{ $t("gallery.title") }}
        </h1>
        <div class="flex items-center justify-center gap-3 mb-8">
          <div
            class="w-16 h-0.5 bg-gradient-to-r from-transparent to-gold-500 rounded-full"
          ></div>
          <div class="w-2 h-2 bg-gold-500 rounded-full animate-pulse"></div>
          <div class="w-32 h-1 bg-gradient-gold rounded-full"></div>
          <div
            class="w-2 h-2 bg-gold-500 rounded-full animate-pulse"
            style="animation-delay: 0.2s"
          ></div>
          <div
            class="w-16 h-0.5 bg-gradient-to-l from-transparent to-gold-500 rounded-full"
          ></div>
        </div>
        <p
          class="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
        >
          {{ $t("gallery.subtitle") }}
        </p>
      </div>

      <!-- Skeleton Loading State -->
      <div v-if="isLoading" class="bento-grid">
        <div
          v-for="n in 10"
          :key="`skeleton-${n}`"
          :class="[
            'bento-item',
            n === 1
              ? 'bento-large'
              : n === 2 || n === 3
              ? 'bento-medium'
              : n === 4
              ? 'bento-tall'
              : n === 6 || n === 9
              ? 'bento-wide'
              : 'bento-small',
          ]"
        >
          <div class="skeleton-card">
            <div class="skeleton-shimmer"></div>
            <div class="absolute bottom-0 left-0 right-0 p-4 space-y-2">
              <div class="h-5 bg-white/10 rounded-md w-3/4"></div>
              <div class="h-3 bg-white/10 rounded-md w-1/2"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bento Grid Gallery with staggered animations -->
      <div v-else class="bento-grid">
        <div
          v-for="(item, index) in galleryItems"
          :key="item.id"
          :class="[
            'bento-item',
            `bento-${item.size}`,
            'group cursor-pointer gallery-card',
          ]"
          :style="{ animationDelay: `${index * 0.08}s` }"
          @click="openModal(item)"
        >
          <div class="gallery-card-inner">
            <!-- Gold border accent on hover -->
            <div class="gallery-border"></div>

            <!-- Image Container -->
            <div class="gallery-media">
              <!-- Image -->
              <img
                v-if="item.type === 'image'"
                :src="item.src"
                :alt="item.title"
                class="gallery-image"
                loading="lazy"
              />

              <!-- Video Thumbnail -->
              <div v-else class="relative w-full h-full">
                <img
                  :src="
                    item.thumbnail || '/images/gallery/video-placeholder.jpg'
                  "
                  :alt="item.title"
                  class="gallery-image"
                  loading="lazy"
                />
                <!-- Play Button Overlay with floating animation -->
                <div class="video-overlay">
                  <div class="play-button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-10 h-10 text-black ml-1"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Text Overlay with improved readability -->
              <div class="gallery-overlay">
                <!-- Gradient backdrop for text readability -->
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                ></div>

                <!-- Content -->
                <div class="relative z-10 p-6 h-full flex flex-col justify-end">
                  <!-- Gold accent line -->
                  <div
                    class="w-12 h-0.5 bg-gradient-gold mb-3 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  ></div>

                  <h3
                    class="text-white font-bold text-xl md:text-2xl mb-2 leading-tight drop-shadow-lg"
                  >
                    {{ item.title }}
                  </h3>
                  <p
                    class="text-gray-300 text-sm md:text-base flex items-center gap-2"
                  >
                    <svg
                      class="w-4 h-4 text-gold-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {{ item.date }}
                  </p>
                </div>
              </div>

              <!-- Type Badge with gold styling -->
              <div class="type-badge">
                <span
                  v-if="item.type === 'video'"
                  class="badge-content badge-video"
                >
                  <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
                    />
                  </svg>
                  Видео
                </span>
                <span v-else class="badge-content badge-photo">
                  <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Фото
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Enhanced Modal for viewing full item -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="isModalOpen && selectedItem"
          class="modal-backdrop"
          @click="closeModal"
        >
          <!-- Modal Container -->
          <div
            class="modal-container"
            @click.stop
            role="dialog"
            aria-modal="true"
            :aria-label="selectedItem.title"
          >
            <!-- Close button -->
            <button
              @click="closeModal"
              class="modal-close-btn"
              aria-label="Закрыть модальное окно"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <!-- Content -->
            <div class="modal-content">
              <!-- Image or Video -->
              <div class="modal-media">
                <img
                  v-if="selectedItem.type === 'image'"
                  :src="selectedItem.src"
                  :alt="selectedItem.title"
                  class="w-full max-h-[70vh] object-contain"
                />
                <iframe
                  v-else
                  :src="selectedItem.src"
                  class="w-full aspect-video"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>

              <!-- Info Section -->
              <div class="modal-info">
                <!-- Gold accent line -->
                <div class="w-16 h-1 bg-gradient-gold rounded-full mb-4"></div>

                <h2
                  class="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight"
                >
                  {{ selectedItem.title }}
                </h2>

                <div class="flex items-center gap-4 text-gray-400">
                  <span class="flex items-center gap-2">
                    <svg
                      class="w-5 h-5 text-gold-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {{ selectedItem.date }}
                  </span>

                  <span class="flex items-center gap-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
                    {{ selectedItem.type === "video" ? "Видео" : "Фотография" }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
/* Fade in up animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

/* Bento Grid Layout - Mobile First */
.bento-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  grid-auto-rows: 280px;
}

@media (min-width: 640px) {
  .bento-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }
}

@media (min-width: 768px) {
  .bento-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    grid-auto-rows: 300px;
  }

  /* Different sizes for bento layout */
  .bento-small {
    grid-column: span 1;
    grid-row: span 1;
  }

  .bento-medium {
    grid-column: span 2;
    grid-row: span 1;
  }

  .bento-large {
    grid-column: span 2;
    grid-row: span 2;
  }

  .bento-wide {
    grid-column: span 3;
    grid-row: span 1;
  }

  .bento-tall {
    grid-column: span 1;
    grid-row: span 2;
  }
}

@media (min-width: 1280px) {
  .bento-grid {
    gap: 2rem;
    grid-auto-rows: 320px;
  }
}

/* Gallery Card with staggered animation */
.gallery-card {
  opacity: 0;
  animation: slideInScale 0.6s ease-out forwards;
}

@keyframes slideInScale {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Gallery Card Inner */
.gallery-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 1.5rem;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    rgba(30, 30, 35, 0.6),
    rgba(40, 40, 45, 0.6)
  );
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Gold border effect on hover */
.gallery-border {
  position: absolute;
  inset: 0;
  border-radius: 1.5rem;
  padding: 2px;
  background: linear-gradient(135deg, #d4af37, #ffd700, #d4af37);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 1;
}

.group:hover .gallery-border {
  opacity: 1;
}

/* Gallery Media Container */
.gallery-media {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 1.5rem;
}

/* Gallery Image */
.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

.group:hover .gallery-image {
  transform: scale(1.08);
}

/* Video Overlay */
.video-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3));
  transition: background 0.3s ease;
}

.group:hover .video-overlay {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.45));
}

/* Play Button with floating animation */
.play-button {
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #ffd700, #d4af37);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 40px rgba(212, 175, 55, 0.4);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.group:hover .play-button {
  transform: scale(1.15);
  box-shadow: 0 15px 50px rgba(212, 175, 55, 0.6);
}

/* Gallery Overlay */
.gallery-overlay {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.group:hover .gallery-overlay {
  opacity: 1;
}

/* Type Badge */
.type-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
}

.badge-content {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 0.875rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  backdrop-filter: blur(12px);
  transition: all 0.3s ease;
  animation: badgePulse 2s ease-in-out infinite;
}

@keyframes badgePulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.badge-video {
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.9),
    rgba(255, 215, 0, 0.9)
  );
  color: #000;
  box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
}

.badge-photo {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.15),
    rgba(212, 175, 55, 0.15)
  );
  color: #fff;
  border: 1px solid rgba(212, 175, 55, 0.3);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.group:hover .badge-content {
  transform: translateY(-2px);
}

/* Skeleton Loading */
.skeleton-card {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 1.5rem;
  background: linear-gradient(
    135deg,
    rgba(45, 45, 50, 0.5),
    rgba(55, 55, 60, 0.5)
  );
  overflow: hidden;
}

.skeleton-shimmer {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(212, 175, 55, 0.1) 50%,
    transparent 100%
  );
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

/* Modal Styles */
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(12px);
  overflow: hidden;
}

.modal-container {
  position: relative;
  z-index: 10;
  max-width: 80rem;
  width: 100%;
  max-height: 90vh;
  background: linear-gradient(
    135deg,
    rgba(20, 20, 20, 0.98),
    rgba(30, 30, 30, 0.98)
  );
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 0 40px 10px rgba(255, 255, 255, 0.08),
    0 0 80px 20px rgba(255, 255, 255, 0.05),
    0 0 120px 30px rgba(255, 255, 255, 0.03),
    0 30px 60px -15px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(212, 175, 55, 0.1);
}

.modal-close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(12px);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(212, 175, 55, 0.2);
}

.modal-close-btn:hover {
  background: linear-gradient(135deg, #d4af37, #ffd700);
  color: #000;
  transform: rotate(90deg);
  border-color: transparent;
}

.modal-content {
  display: flex;
  flex-direction: column;
}

.modal-media {
  position: relative;
  background: #000;
}

.modal-info {
  padding: 2rem;
  background: linear-gradient(
    135deg,
    rgba(20, 20, 20, 0.95),
    rgba(30, 30, 30, 0.95)
  );
}

@media (min-width: 768px) {
  .modal-info {
    padding: 2.5rem;
  }
}

/* Modal transitions */
.modal-enter-active {
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-leave-active {
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-leave-active .modal-container {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-enter-from .modal-container {
  opacity: 0;
  transform: scale(0.9) translateY(20px);
}

.modal-leave-to .modal-container {
  opacity: 0;
  transform: scale(0.95) translateY(10px);
}

/* Mobile responsiveness improvements */
@media (max-width: 767px) {
  .bento-item {
    grid-column: span 1 !important;
    grid-row: span 1 !important;
  }

  .modal-container {
    max-height: 95vh;
    margin: 0.5rem;
  }

  .play-button {
    width: 4rem;
    height: 4rem;
  }

  .type-badge {
    top: 0.75rem;
    right: 0.75rem;
  }

  .badge-content {
    font-size: 0.625rem;
    padding: 0.375rem 0.75rem;
  }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  .gallery-card,
  .skeleton-shimmer,
  .play-button,
  .badge-content {
    animation: none;
  }

  .gallery-image,
  .gallery-overlay,
  .modal-container {
    transition: none;
  }
}

/* Focus states for accessibility */
.gallery-card:focus-visible {
  outline: 2px solid #d4af37;
  outline-offset: 4px;
}

.modal-close-btn:focus-visible {
  outline: 2px solid #d4af37;
  outline-offset: 2px;
}
</style>
