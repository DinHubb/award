<template>
  <header class="fixed top-0 left-0 right-0 z-20">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2">
          <span
            class="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-gold"
          >
            Telecom Awards
          </span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <NuxtLink
            to="/"
            class="text-gray-300 hover:text-white transition-colors"
            activeClass="text-white font-medium"
          >
            {{ $t("nav.home") }}
          </NuxtLink>
          <NuxtLink
            to="/how-to-participate"
            class="text-gray-300 hover:text-white transition-colors"
            activeClass="text-white font-medium"
          >
            {{ $t("nav.howToParticipate") }}
          </NuxtLink>
          <a
            href="award/#about"
            class="text-gray-300 hover:text-white transition-colors"
          >
            {{ $t("nav.about") }}
          </a>
          <NuxtLink
            to="/faq"
            class="text-gray-300 hover:text-white transition-colors"
            activeClass="text-white font-medium"
          >
            {{ $t("nav.faq") }}
          </NuxtLink>
        </nav>

        <!-- CTA Button & Language Switcher -->
        <div class="hidden md:flex items-center space-x-4">
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
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-zinc-800 transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            v-if="!isMobileMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
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
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden bg-black/95 backdrop-blur-md border-b border-zinc-800"
      >
        <nav class="px-4 py-4 space-y-3">
          <NuxtLink
            to="/"
            @click="closeMobileMenu"
            class="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-zinc-800 transition-colors"
            activeClass="text-white bg-zinc-800"
          >
            {{ $t("nav.home") }}
          </NuxtLink>
          <NuxtLink
            to="/how-to-participate"
            @click="closeMobileMenu"
            class="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-zinc-800 transition-colors"
            activeClass="text-white bg-zinc-800"
          >
            {{ $t("nav.howToParticipate") }}
          </NuxtLink>
          <a
            href="award/#about"
            @click="closeMobileMenu"
            class="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            {{ $t("nav.about") }}
          </a>
          <NuxtLink
            to="/faq"
            @click="closeMobileMenu"
            class="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-zinc-800 transition-colors"
            activeClass="text-white bg-zinc-800"
          >
            {{ $t("nav.faq") }}
          </NuxtLink>
          <div class="pt-2">
            <AppLangSwitcher />
          </div>
          <a
            href="/vote"
            class="block px-3 py-2 rounded-lg text-center text-black font-medium bg-gradient-gold hover:opacity-90 transition-opacity"
          >
            {{ $t("nav.vote") }}
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>
