<template>
  <div
    class="group relative bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-8 border-2 transition-all duration-300 overflow-hidden"
    :class="[
      'border-zinc-700/50',
      'hover:border-gold-500/60',
      'hover:shadow-2xl',
      'hover:shadow-gold-500/20',
      'hover:-translate-y-1',
      'active:scale-98',
    ]"
    @click="$emit('select')"
    role="button"
    tabindex="0"
    :aria-label="`Голосовать за ${companyName}`"
    @keypress.enter="$emit('select')"
    @keypress.space.prevent="$emit('select')"
  >
    <!-- Animated background gradient on hover -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-gold-500/0 via-gold-500/5 to-gold-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    ></div>

    <!-- Spotlight effect -->
    <div
      class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style="
        background: radial-gradient(
          circle at 50% 0%,
          rgba(203, 155, 81, 0.1),
          transparent 70%
        );
      "
    ></div>

    <div class="relative flex flex-col items-center text-center">
      <!-- Company Logo/Icon -->
      <div
        class="relative w-28 h-28 rounded-full bg-gradient-gold flex items-center justify-center mb-6 transition-all duration-500 shadow-lg group-hover:shadow-2xl group-hover:shadow-gold-500/30 group-hover:scale-110"
      >
        <!-- Rotating ring on hover -->
        <div
          class="absolute inset-0 rounded-full border-2 border-white/20 group-hover:border-white/40 transition-all duration-500 group-hover:rotate-180"
        ></div>
        <span class="text-4xl font-bold text-black relative z-10">
          {{ companyName.charAt(0) }}
        </span>
      </div>

      <!-- Company Name -->
      <h3
        class="text-2xl font-bold text-white mb-8 group-hover:text-transparent group-hover:bg-clip-text cursor-default group-hover:bg-gradient-gold-light transition-all duration-300"
      >
        {{ companyName }}
      </h3>

      <!-- Vote Button -->
      <button
        type="button"
        class="w-full cursor-pointer px-6 py-4 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg group-hover:shadow-xl relative overflow-hidden"
        :class="[
          'bg-gradient-gold text-black',
          'group-hover:scale-105',
          'group-hover:shadow-gold-500/30',
        ]"
        @click.stop="$emit('select')"
      >
        <!-- Shimmer effect -->
        <span
          class="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        ></span>
        <span class="relative flex items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {{ t("vote.voteButton") }}
        </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Provider } from "~/composables/useProviders";

// Use i18n
const { locale, t } = useI18n();

interface Props {
  company: Provider;
}

const props = defineProps<Props>();

defineEmits<{
  select: [];
}>();

// Get company name based on locale
const companyName = computed(() => {
  return locale.value === "tj" ? props.company.name_tj : props.company.name_ru;
});
</script>
