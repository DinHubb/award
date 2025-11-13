<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import {
  Dialog,
  DialogPanel,
  TransitionRoot,
  TransitionChild,
} from "@headlessui/vue";

interface Props {
  isOpen: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  close: [];
}>();

const { t } = useI18n();

const menuItems = computed(() => [
  { name: t("nav.home"), path: "/" },
  { name: t("nav.howToParticipate"), path: "/how-to-participate" },
  { name: t("nav.about"), path: "/about" },
  { name: t("nav.faq"), path: "/faq" },
]);

const closeMenu = () => {
  emit("close");
};
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
      <div class="fixed inset-0 flex justify-end">
        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-300 transform"
          enter-from="translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0"
          leave-to="translate-x-full"
        >
          <DialogPanel
            class="relative w-full sm:max-w-sm overflow-y-auto bg-linear-to-br from-black via-gold-950/80 to-black backdrop-blur-xl border-l-2 border-gold-500/30 shadow-2xl shadow-gold-900/20"
          >
            <div class="p-6 space-y-6 h-full flex flex-col">
              <!-- Close Button -->
              <div class="flex justify-end">
                <button
                  @click="closeMenu"
                  class="p-2 text-gray-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-lg"
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
              <nav class="flex flex-col space-y-4 flex-1">
                <NuxtLink
                  v-for="item in menuItems"
                  :key="item.path"
                  :to="item.path"
                  class="block text-gray-300 hover:text-white transition-colors text-lg py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-lg px-2"
                  activeClass="text-white font-medium"
                  @click="closeMenu"
                >
                  {{ item.name }}
                </NuxtLink>
              </nav>

              <!-- Mobile Language Switcher & CTA -->
              <div class="pt-4 border-t border-gray-800 space-y-4">
                <AppLangSwitcher />
                <NuxtLink
                  to="/vote"
                  class="inline-flex items-center justify-center w-full px-6 py-3 rounded-lg text-black font-medium bg-gradient-gold hover:opacity-90 transition-opacity text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  @click="closeMenu"
                >
                  {{ $t("nav.vote") }}
                </NuxtLink>
              </div>
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
