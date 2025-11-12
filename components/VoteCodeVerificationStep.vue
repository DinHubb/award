<template>
  <div class="space-y-8">
    <div class="text-center mb-10">
      <h3
        class="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-gold-light mb-4"
      >
        {{ $t('modal.codeVerification') }}
      </h3>
      <p class="text-base text-gray-400 leading-relaxed">
        {{ $t('modal.codeVerificationDesc') }}
      </p>
    </div>

    <!-- Success message -->
    <div
      class="bg-gradient-to-r from-gold-500/10 via-gold-500/20 to-gold-500/10 border border-gold-500/30 rounded-2xl p-6 animate-in fade-in slide-in-from-top duration-500"
    >
      <div class="flex items-start gap-4">
        <div class="shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-8 h-8 text-gold-500"
          >
            <path
              fill-rule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="flex-1">
          <p class="text-white font-medium mb-1">{{ $t('modal.codeSent') }}</p>
          <p class="text-sm text-gray-400">
            {{ $t('modal.checkSms') }} <span class="text-gold-400 font-semibold">{{ phone }}</span>
          </p>
          <p v-if="expiresInMinutes" class="text-xs text-gray-500 mt-2">
            {{ $t('modal.codeExpires', { minutes: expiresInMinutes }) }}
          </p>
        </div>
      </div>
    </div>

    <div>
      <label
        for="code"
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
            d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
          />
        </svg>
        {{ $t('modal.codeLabel') }}
      </label>
      <input
        id="code"
        ref="codeInput"
        v-model="verificationCode"
        type="text"
        inputmode="numeric"
        :placeholder="$t('modal.codePlaceholder')"
        maxlength="6"
        class="w-full px-6 py-5 bg-zinc-900/80 backdrop-blur-sm border-2 rounded-xl text-white text-center text-3xl md:text-4xl font-bold tracking-[0.5em] placeholder-gray-600 transition-all duration-300 focus:outline-none"
        :class="[
          isCodeValid
            ? 'border-gold-500/50 focus:border-gold-500 shadow-lg shadow-gold-500/10'
            : 'border-zinc-800 focus:border-zinc-600'
        ]"
        @input="formatCode"
        @keypress.enter="isCodeValid && submitCode()"
      />
    </div>

    <!-- Resend Code -->
    <div class="text-center p-4 bg-zinc-900/50 rounded-xl border border-zinc-800">
      <button
        v-if="canResend"
        type="button"
        @click="handleResend"
        :disabled="isLoading"
        class="text-base text-gold-400 hover:text-gold-300 transition-colors font-medium flex items-center justify-center gap-2 mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
        {{ $t('modal.resendCode') }}
      </button>
      <p v-else class="text-base text-gray-500 flex items-center justify-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        {{ $t('modal.resendIn') }}
        <span class="font-bold text-gold-500">{{ resendCountdown }}с</span>
      </p>
    </div>

    <button
      type="button"
      @click="submitCode"
      :disabled="!isCodeValid || isLoading"
      class="relative w-full px-6 py-5 rounded-xl font-bold text-lg shadow-lg transition-all duration-300 overflow-hidden group"
      :class="
        isCodeValid && !isLoading
          ? 'bg-gradient-gold text-black hover:scale-105 hover:shadow-xl hover:shadow-gold-500/30 cursor-pointer'
          : 'bg-zinc-800/50 text-gray-500 cursor-not-allowed opacity-60'
      "
    >
      <span
        v-if="isCodeValid && !isLoading"
        class="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"
      ></span>
      <span v-if="!isLoading" class="relative flex items-center justify-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        {{ $t('modal.submitVote') }}
      </span>
      <span v-else class="relative flex items-center justify-center gap-3">
        <svg
          class="animate-spin h-6 w-6"
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
        {{ $t('modal.verifying') }}
      </span>
    </button>

    <!-- Navigation -->
    <div class="flex gap-4 pt-4">
      <button
        type="button"
        @click="emit('back')"
        :disabled="isLoading"
        class="flex-1 px-6 py-4 rounded-xl border-2 border-zinc-700/50 text-white font-semibold hover:border-zinc-600 hover:bg-zinc-800/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {{ $t('modal.back') }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'

interface Props {
  phone: string
  expiresInMinutes?: number
  isLoading?: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  submit: [code: string]
  back: []
  resend: []
}>()

const verificationCode = ref('')
const codeInput = ref<HTMLInputElement | null>(null)
const canResend = ref(false)
const resendCountdown = ref(60)

let resendTimer: ReturnType<typeof setInterval> | null = null

const isCodeValid = computed(() => {
  return verificationCode.value.length === 6
})

const formatCode = (e: Event) => {
  const input = e.target as HTMLInputElement
  let value = input.value.replace(/\D/g, '')
  if (value.length > 6) {
    value = value.slice(0, 6)
  }
  verificationCode.value = value
}

const startResendTimer = () => {
  canResend.value = false
  resendCountdown.value = 60

  resendTimer = setInterval(() => {
    resendCountdown.value--
    if (resendCountdown.value <= 0) {
      canResend.value = true
      if (resendTimer) {
        clearInterval(resendTimer)
      }
    }
  }, 1000)
}

const submitCode = () => {
  if (isCodeValid.value && !props.isLoading) {
    emit('submit', verificationCode.value)
  }
}

const handleResend = () => {
  emit('resend')
  verificationCode.value = ''
  startResendTimer()
}

onMounted(async () => {
  await nextTick()
  codeInput.value?.focus()
  startResendTimer()
})

onUnmounted(() => {
  if (resendTimer) {
    clearInterval(resendTimer)
  }
})
</script>
