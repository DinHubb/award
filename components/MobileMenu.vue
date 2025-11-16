<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import {
  Dialog,
  DialogPanel,
  TransitionRoot,
  TransitionChild,
} from "@headlessui/vue";

interface NavItem {
  name: string;
  sectionId: string;
}

interface Props {
  isOpen: boolean;
  navItems: NavItem[];
}

const props = defineProps<Props>();

const emit = defineEmits<{
  close: [];
}>();

const activeSectionId = ref<string>("home");
const observer = ref<IntersectionObserver | null>(null);

const closeMenu = () => {
  emit("close");
};

const scrollToSection = (sectionId: string) => {
  activeSectionId.value = sectionId;
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
  closeMenu();
};

const createObserver = () => {
  const options: IntersectionObserverInit = {
    root: null,
    threshold: 0.25,
  };

  observer.value = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          activeSectionId.value = entry.target.id;
        }
      });
    },
    options
  );

  props.navItems.forEach((item) => {
    const sectionEl: HTMLElement | null = document.getElementById(
      item.sectionId
    );
    if (sectionEl) {
      observer.value?.observe(sectionEl);
    }
  });
};

onMounted(() => {
  createObserver();
});

onUnmounted(() => {
  if (observer.value) {
    observer.value.disconnect();
  }
});
</script>

<template>
  <TransitionRoot :show="isOpen" as="template">
    <Dialog as="div" class="relative z-50 lg:hidden" @close="closeMenu">
      <!-- Backdrop -->
      <TransitionChild
        as="template"
        enter="transition-opacity ease-linear duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/50" />
      </TransitionChild>

      <!-- Menu Panel -->
      <div class="fixed inset-0 flex items-end p-4">
        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-300 transform"
          enter-from="translate-y-full"
          enter-to="translate-y-0"
          leave="transition ease-in-out duration-300 transform"
          leave-from="translate-y-0"
          leave-to="translate-y-full"
        >
          <DialogPanel
            class="relative w-full rounded-2xl bg-linear-to-br from-black via-gold-950/80 to-black backdrop-blur-xl border border-gold-500/30 overflow-hidden shadow-2xl shadow-gold-900/20"
          >
            <div class="p-6 space-y-3 h-full flex flex-col">
              <!-- Close Button -->
              <div class="flex justify-end">
                <button
                  @click="closeMenu"
                  class="p-1 text-gray-400 hover:text-white transition-colors outline-none focus-visible:ring-gold-500 rounded-lg"
                  aria-label="Close menu"
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <!-- Navigation Links -->
              <nav class="flex flex-col space-y-1 flex-1">
                <a
                  v-for="item in navItems"
                  :key="item.sectionId"
                  :href="`#${item.sectionId}`"
                  :class="[
                    'block transition-colors text-lg py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-lg px-2',
                    activeSectionId === item.sectionId
                      ? 'text-white font-semibold'
                      : 'text-gray-400 hover:text-gray-300',
                  ]"
                  @click.prevent="scrollToSection(item.sectionId)"
                >
                  {{ item.name }}
                </a>
              </nav>

              <!-- Mobile Language Switcher & CTA -->
              <div class="pt-4 border-t border-gray-500 space-y-4">
                <AppLangSwitcher />
                <a
                  href="/vote"
                  class="inline-flex items-center justify-center w-full px-6 py-3 rounded-lg text-black font-medium bg-gradient-gold hover:opacity-90 transition-opacity text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  @click="closeMenu"
                >
                  {{ $t("nav.vote") }}
                </a>
              </div>
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
