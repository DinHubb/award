<template>
  <div class="space-y-8">
    <div class="text-center mb-10">
      <h3
        class="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-gold-light mb-4"
      >
        {{ $t("modal.phoneVerification") }}
      </h3>
      <p class="text-base text-gray-400 leading-relaxed">
        {{ $t("modal.phoneVerificationDesc") }}
      </p>
    </div>

    <!-- Phone Input -->
    <div class="space-y-6">
      <div>
        <label
          for="phone"
          class="block text-base font-semibold text-gray-300 mb-3 flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-5 h-5 text-gold-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            />
          </svg>
          {{ $t("modal.phoneLabel") }}
        </label>
        <div class="relative group">
          <div
            class="absolute left-5 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none z-10"
          >
            <span class="text-lg font-semibold text-gray-300">+992</span>
            <span class="h-6 w-px bg-zinc-700"></span>
          </div>
          <input
            id="phone"
            v-model="phoneNumber"
            type="tel"
            :placeholder="$t('modal.phonePlaceholder')"
            maxlength="9"
            class="w-full pl-24 pr-5 py-4 bg-zinc-900/80 backdrop-blur-sm border-2 rounded-xl text-white text-lg placeholder-gray-500 transition-all duration-300 focus:outline-none"
            :class="[
              isPhoneValid
                ? 'border-gold-500/50 focus:border-gold-500 shadow-lg shadow-gold-500/10'
                : 'border-zinc-800 focus:border-zinc-600 group-hover:border-zinc-700',
            ]"
            @input="formatPhone"
            @keypress.enter="isPhoneValid && submitPhone()"
          />
          <!-- Valid indicator -->
          <div
            v-if="isPhoneValid"
            class="absolute right-5 top-1/2 -translate-y-1/2 text-gold-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <p class="text-sm text-gray-500 mt-3 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
          {{ $t("modal.phoneHint") }}
        </p>
      </div>

      <button
        type="button"
        @click="submitPhone"
        :disabled="!isPhoneValid || isLoading"
        class="relative w-full px-6 py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 overflow-hidden group"
        :class="
          isPhoneValid && !isLoading
            ? 'bg-gradient-gold text-black hover:scale-105 hover:shadow-xl hover:shadow-gold-500/30 cursor-pointer'
            : 'bg-zinc-800/50 text-gray-500 cursor-not-allowed opacity-60'
        "
      >
        <span
          v-if="isPhoneValid && !isLoading"
          class="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        ></span>
        <span
          v-if="!isLoading"
          class="relative flex items-center justify-center gap-2"
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
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          {{ $t("modal.getCode") }}
        </span>
        <span v-else class="relative flex items-center justify-center gap-3">
          <svg
            class="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          {{ $t("modal.sending") }}
        </span>
      </button>
    </div>

    <!-- Navigation -->
    <div class="flex gap-4 pt-4">
      <button
        type="button"
        @click="emit('back')"
        :disabled="isLoading"
        class="flex-1 px-6 py-4 rounded-xl border-2 border-zinc-700/50 text-white font-semibold hover:border-zinc-600 hover:bg-zinc-800/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {{ $t("modal.back") }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

interface Props {
  isLoading?: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  submit: [phone: string];
  back: [];
}>();

const phoneNumber = ref("");

const isPhoneValid = computed(() => {
  return phoneNumber.value.replace(/\s/g, "").length === 9;
});

const formatPhone = (e: Event) => {
  const input = e.target as HTMLInputElement;
  let value = input.value.replace(/\D/g, "");
  if (value.length > 9) {
    value = value.slice(0, 9);
  }
  phoneNumber.value = value;
};

const submitPhone = () => {
  if (isPhoneValid.value && !props.isLoading) {
    emit("submit", "+992" + phoneNumber.value);
  }
};
</script>
