<template>
  <BaseDialog :is-open="isOpen" size="md" @close="handleClose">
    <!-- Content -->

    <!-- Success Icon -->
    <div class="flex justify-center mb-6">
      <div
        class="relative w-24 h-24 flex items-center justify-center rounded-full bg-gradient-gold shadow-xl shadow-gold-500/30 animate-in zoom-in duration-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-12 h-12 text-black"
        >
          <path
            fill-rule="evenodd"
            d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
            clip-rule="evenodd"
          />
        </svg>
        <!-- Animated rings -->
        <div
          class="absolute inset-0 rounded-full border-4 border-gold-400 animate-ping opacity-75"
        ></div>
      </div>
    </div>

    <!-- Title -->
    <h3
      class="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-gold-light mb-4 animate-in fade-in slide-in-from-bottom duration-500"
    >
      {{ $t("success.title") }}
    </h3>

    <!-- Message -->
    <p
      class="text-lg text-gray-300 leading-relaxed mb-8 animate-in fade-in slide-in-from-bottom duration-700"
    >
      {{ $t("success.message") }}
    </p>

    <!-- Additional Info -->
    <div
      class="bg-zinc-800/50 border border-zinc-700/50 rounded-2xl p-6 mb-8 animate-in fade-in slide-in-from-bottom duration-900"
    >
      <div class="flex items-start gap-3">
        <div class="shrink-0 mt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-6 h-6 text-gold-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
        </div>
        <p class="text-sm text-gray-400 text-left">
          {{ $t("success.info") }}
        </p>
      </div>
    </div>

    <!-- Close Button -->
    <button
      type="button"
      @click="handleClose"
      class="w-full px-8 py-4 rounded-xl bg-gradient-gold text-black font-bold text-lg shadow-lg hover:scale-105 hover:shadow-xl hover:shadow-gold-500/30 transition-all duration-300 group relative overflow-hidden"
    >
      <span
        class="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"
      ></span>
      <span class="relative">{{ $t("success.close") }}</span>
    </button>
  </BaseDialog>
</template>

<script setup lang="ts">
interface Props {
  isOpen: boolean;
}

defineProps<Props>();

const emit = defineEmits<{
  close: [];
}>();

const handleClose = () => {
  emit("close");
};
</script>
