<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";

const { locale, locales, setLocale } = useI18n();

const isDropdownOpen = ref(false);

const availableLocales = computed(() => {
  return locales.value.map((loc: any) => ({
    code: loc.code,
    name: loc.name,
  }));
});

const currentLocaleName = computed(() => {
  const current = availableLocales.value.find(
    (loc) => loc.code === locale.value
  );
  return current?.name || "RU";
});

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const changeLocale = (code: any) => {
  setLocale(code);
  isDropdownOpen.value = false;
};

// Close dropdown when clicking outside
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (!target.closest(".relative")) {
    isDropdownOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div class="relative">
    <button
      @click="toggleDropdown"
      class="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-zinc-800 transition-colors"
      aria-label="Change language"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
        />
      </svg>
      <span class="text-sm font-medium">{{ currentLocaleName }}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4 h-4 transition-transform duration-200"
        :class="{ 'rotate-180': isDropdownOpen }"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </button>

    <!-- Dropdown -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="isDropdownOpen"
        class="absolute right-0 mt-2 w-40 rounded-lg bg-zinc-900 border border-zinc-800 shadow-xl overflow-hidden z-50"
      >
        <button
          v-for="loc in availableLocales"
          :key="loc.code"
          @click="changeLocale(loc.code)"
          class="w-full px-4 py-3 text-left text-sm transition-colors flex items-center justify-between"
          :class="
            locale === loc.code
              ? 'bg-zinc-800 text-white font-medium'
              : 'text-gray-300 hover:bg-zinc-800 hover:text-white'
          "
        >
          <span>{{ loc.name }}</span>
          <svg
            v-if="locale === loc.code"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-5 h-5 text-gold-500"
          >
            <path
              fill-rule="evenodd"
              d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </Transition>
  </div>
</template>
