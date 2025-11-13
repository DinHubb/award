<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-4"
    >
      <div
        v-if="isVisible"
        class="fixed top-6 left-1/2 -translate-x-1/2 z-[100] max-w-md w-full mx-4"
      >
        <div
          class="bg-zinc-900 border-2 border-gold-500/50 rounded-2xl shadow-2xl shadow-gold-500/20 p-6 backdrop-blur-sm"
        >
          <div class="flex items-start gap-4">
            <!-- Icon -->
            <div
              class="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 text-black"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>

            <!-- Content -->
            <div class="flex-1 min-w-0">
              <h3 class="text-lg font-semibold text-white mb-1">
                {{ title }}
              </h3>
              <p class="text-sm text-gray-400 mb-3">
                {{ message }}
              </p>
              <div
                class="flex items-center justify-between bg-zinc-800/50 rounded-lg p-3 border border-zinc-700"
              >
                <div class="flex items-center gap-2">
                  <span class="text-xs font-medium text-gray-500">OTP:</span>
                  <span
                    class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-gold tracking-wider"
                  >
                    {{ otpCode }}
                  </span>
                </div>
                <button
                  @click="copyCode"
                  class="p-2 rounded-lg hover:bg-zinc-700 transition-colors group"
                  :title="copied ? 'Copied!' : 'Copy code'"
                >
                  <svg
                    v-if="!copied"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-5 h-5 text-gray-400 group-hover:text-gold-500 transition-colors"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                    />
                  </svg>
                  <svg
                    v-else
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
            </div>

            <!-- Close button -->
            <button
              @click="close"
              class="flex-shrink-0 p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-zinc-800 transition-all"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <!-- Progress bar -->
          <div class="mt-4 h-1 bg-zinc-800 rounded-full overflow-hidden">
            <div
              class="h-full bg-gradient-gold transition-all ease-linear"
              :style="{ width: `${progress}%` }"
            ></div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch, onUnmounted } from "vue";

interface Props {
  otpCode: string;
  duration?: number;
  title?: string;
  message?: string;
}

const props = withDefaults(defineProps<Props>(), {
  duration: 8000,
  title: "Временный OTP код",
  message: "Используйте этот код для верификации (временно показан для отладки)",
});

const emit = defineEmits<{
  close: [];
}>();

const isVisible = ref(false);
const progress = ref(100);
const copied = ref(false);

let closeTimer: NodeJS.Timeout | null = null;
let progressTimer: NodeJS.Timeout | null = null;

const show = () => {
  isVisible.value = true;
  progress.value = 100;

  // Update progress bar
  const updateInterval = 50;
  const totalSteps = props.duration / updateInterval;
  let currentStep = 0;

  progressTimer = setInterval(() => {
    currentStep++;
    progress.value = 100 - (currentStep / totalSteps) * 100;

    if (currentStep >= totalSteps) {
      if (progressTimer) clearInterval(progressTimer);
    }
  }, updateInterval);

  // Auto close after duration
  closeTimer = setTimeout(() => {
    close();
  }, props.duration);
};

const close = () => {
  isVisible.value = false;
  if (closeTimer) clearTimeout(closeTimer);
  if (progressTimer) clearInterval(progressTimer);
  emit("close");
};

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(props.otpCode);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error("Failed to copy:", err);
  }
};

// Watch for otpCode changes to show alert
watch(
  () => props.otpCode,
  (newCode) => {
    if (newCode) {
      show();
    }
  },
  { immediate: true }
);

onUnmounted(() => {
  if (closeTimer) clearTimeout(closeTimer);
  if (progressTimer) clearInterval(progressTimer);
});

// Expose show method for manual control
defineExpose({
  show,
  close,
});
</script>
