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
        <nav class="hidden lg:flex items-center space-x-8">
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
          <NuxtLink
            to="/about"
            class="text-gray-300 hover:text-white transition-colors"
            activeClass="text-white font-medium"
          >
            {{ $t("nav.about") }}
          </NuxtLink>
          <NuxtLink
            to="/faq"
            class="text-gray-300 hover:text-white transition-colors"
            activeClass="text-white font-medium"
          >
            {{ $t("nav.faq") }}
          </NuxtLink>
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
        <MobileMenu :is-open="isMobileMenuOpen" @close="isMobileMenuOpen = false" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isMobileMenuOpen = ref(false);
</script>
