<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const isMobileMenuOpen = ref(false);
const navItemRefs = ref<(HTMLElement | null)[]>([]);
const activeNavStyle = ref<any>("");
const observer = ref<IntersectionObserver | null>(null);

const navItems = computed(() => [
  { name: t("nav.home"), sectionId: "home" },
  { name: t("nav.howToParticipate"), sectionId: "how-to-participate" },
  { name: t("nav.about"), sectionId: "about" },
  { name: t("nav.gallery"), sectionId: "gallery" },
  { name: t("nav.faq"), sectionId: "faq" },
]);

const setNavItemRef = (el: any, index: number) => {
  if (el) {
    navItemRefs.value[index] = el as HTMLElement;
  }
};

onBeforeUpdate(() => {
  navItemRefs.value = [];
});

const updateHighlight = (index: number) => {
  const el = navItemRefs.value[index];
  if (!el) return; // Если элемент еще не отрисовался

  activeNavStyle.value = {
    // Устанавливаем ширину подсветки = ширине пункта
    width: `${el.offsetWidth}px`,
    // Сдвигаем подсветку по горизонтали
    transform: `translateX(${el.offsetLeft}px)`,
  };
};

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 80; // Высота header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

const handleNavClick = (sectionId: string, index: number) => {
  scrollToSection(sectionId);
  updateHighlight(index);
};

const createObserver = () => {
  // 8. Типизируем опции
  const options: IntersectionObserverInit = {
    root: null,
    threshold: 0.25,
  };

  // 9. Типизируем 'entries'
  observer.value = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        // и 'entry'
        if (entry.isIntersecting) {
          const visibleSectionId: string = entry.target.id;

          const activeIndex = navItems.value.findIndex(
            (item) => item.sectionId === visibleSectionId
          );

          if (activeIndex !== -1) {
            updateHighlight(activeIndex);
          }
        }
      });
    },
    options
  );

  navItems.value.forEach((item) => {
    const sectionEl: HTMLElement | null = document.getElementById(
      item.sectionId
    );
    if (sectionEl) {
      observer.value?.observe(sectionEl); // Используем 'optional chaining'
    }
  });
};

onMounted(() => {
  setTimeout(() => {
    updateHighlight(0);
  }, 0);

  createObserver();
});

onUnmounted(() => {
  if (observer.value) {
    observer.value.disconnect();
  }
});
</script>
<template>
  <header class="fixed top-0 left-0 right-0 z-20">
    <div class="app-container py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2">
          <span
            class="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-gold"
          >
            Telecom Awards
          </span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center relative">
          <ul class="flex items-center relative z-10">
            <li
              v-for="(item, index) in navItems"
              :key="item.sectionId"
              :ref="(el) => setNavItemRef(el, index)"
              class="text-gray-300 hover:text-white transition-colors cursor-pointer relative z-10 px-4 py-2"
              @click.prevent="handleNavClick(item.sectionId, index)"
            >
              <a :href="`#${item.sectionId}`">
                {{ item.name }}
              </a>
            </li>

            <li
              v-if="activeNavStyle.width"
              class="absolute rounded-full transition-all duration-300 ease-out liquid-gold-glass"
              :style="activeNavStyle"
            ></li>
          </ul>
        </nav>

        <!-- CTA Button & Language Switcher -->
        <div class="hidden lg:flex items-center space-x-4">
          <AppLangSwitcher />
          <a
            href="/vote"
            class="inline-flex items-center justify-center px-6 py-2 rounded-lg text-black font-medium bg-gradient-gold hover:opacity-90 transition-opacity text-sm"
          >
            {{ $t("nav.vote") }}
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="lg:hidden p-2 text-gray-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-lg"
          aria-label="Toggle menu"
          @click="isMobileMenuOpen = true"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <!-- Mobile Menu Dialog -->
        <MobileMenu
          :is-open="isMobileMenuOpen"
          :nav-items="navItems"
          @close="isMobileMenuOpen = false"
        />
      </div>
    </div>
  </header>
</template>

<style scoped>
.liquid-gold-glass {
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: 80%;
  z-index: -1;
  /* Визуальный стиль */
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.2),
    rgba(255, 215, 0, 0.3)
  ); /* Золотой градиент */
  border: 1px solid rgba(212, 175, 55, 0.3);
  backdrop-filter: blur(5px);
}
</style>
