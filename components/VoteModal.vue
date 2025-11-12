<template>
  <TransitionRoot :show="isOpen" as="template">
    <Dialog as="div" class="relative z-50" @close="handleClose">
      <!-- Backdrop -->
      <TransitionChild
        as="template"
        enter="transition duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-black/80 backdrop-blur-sm"
          aria-hidden="true"
        />
      </TransitionChild>

      <!-- Dialog container -->
      <div class="fixed inset-0 flex items-center justify-center p-4">
        <TransitionChild
          as="template"
          enter="transition duration-300 ease-out"
          enter-from="opacity-0 scale-95"
          enter-to="opacity-100 scale-100"
          leave="transition duration-200 ease-in"
          leave-from="opacity-100 scale-100"
          leave-to="opacity-0 scale-95"
        >
          <DialogPanel
            class="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-zinc-900 rounded-3xl border-2 border-zinc-800 shadow-2xl"
          >
            <!-- Close Button -->
            <button
              type="button"
              @click="handleClose"
              class="absolute top-6 right-6 z-10 p-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-zinc-800/80 transition-all duration-300 hover:rotate-90 group"
              aria-label="Close"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <!-- Modal Content -->
            <div class="p-8 md:p-10">
              <!-- Progress Indicator -->
              <div class="mb-10">
                <div class="flex items-center justify-center gap-2 md:gap-3">
                  <!-- Step 1 -->
                  <div class="flex flex-col items-center gap-2">
                    <div
                      class="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full transition-all duration-300 shadow-lg relative"
                      :class="
                        currentStep === 1
                          ? 'bg-gradient-gold text-black font-bold scale-110 shadow-gold-500/30'
                          : currentStep > 1
                          ? 'bg-gold-500/20 text-gold-400 border-2 border-gold-500/50'
                          : 'bg-zinc-800 text-gray-500'
                      "
                    >
                      <svg
                        v-if="currentStep > 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-5 h-5 md:w-6 md:h-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span v-else class="text-base md:text-lg">1</span>
                    </div>
                    <span
                      class="text-xs font-medium transition-colors duration-300"
                      :class="
                        currentStep === 1
                          ? 'text-gold-400'
                          : currentStep > 1
                          ? 'text-gold-500/70'
                          : 'text-gray-500'
                      "
                    >
                      {{ $t('vote.step1') }}
                    </span>
                  </div>

                  <!-- Connector Line 1 -->
                  <div
                    class="h-1 w-12 md:w-20 rounded-full transition-all duration-500 relative overflow-hidden"
                    :class="
                      currentStep > 1 ? 'bg-gold-500/30' : 'bg-zinc-800'
                    "
                  >
                    <div
                      v-if="currentStep > 1"
                      class="absolute inset-0 bg-gradient-gold animate-pulse"
                    ></div>
                  </div>

                  <!-- Step 2 -->
                  <div class="flex flex-col items-center gap-2">
                    <div
                      class="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full transition-all duration-300 shadow-lg"
                      :class="
                        currentStep === 2
                          ? 'bg-gradient-gold text-black font-bold scale-110 shadow-gold-500/30'
                          : currentStep > 2
                          ? 'bg-gold-500/20 text-gold-400 border-2 border-gold-500/50'
                          : 'bg-zinc-800 text-gray-500'
                      "
                    >
                      <svg
                        v-if="currentStep > 2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-5 h-5 md:w-6 md:h-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span v-else class="text-base md:text-lg">2</span>
                    </div>
                    <span
                      class="text-xs font-medium transition-colors duration-300"
                      :class="
                        currentStep === 2
                          ? 'text-gold-400'
                          : currentStep > 2
                          ? 'text-gold-500/70'
                          : 'text-gray-500'
                      "
                    >
                      {{ $t('vote.step2') }}
                    </span>
                  </div>

                  <!-- Connector Line 2 -->
                  <div
                    class="h-1 w-12 md:w-20 rounded-full transition-all duration-500 relative overflow-hidden"
                    :class="
                      currentStep === 3 ? 'bg-gold-500/30' : 'bg-zinc-800'
                    "
                  >
                    <div
                      v-if="currentStep === 3"
                      class="absolute inset-0 bg-gradient-gold animate-pulse"
                    ></div>
                  </div>

                  <!-- Step 3 -->
                  <div class="flex flex-col items-center gap-2">
                    <div
                      class="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full transition-all duration-300 shadow-lg"
                      :class="
                        currentStep === 3
                          ? 'bg-gradient-gold text-black font-bold scale-110 shadow-gold-500/30'
                          : 'bg-zinc-800 text-gray-500'
                      "
                    >
                      <span class="text-base md:text-lg">3</span>
                    </div>
                    <span
                      class="text-xs font-medium transition-colors duration-300"
                      :class="
                        currentStep === 3 ? 'text-gold-400' : 'text-gray-500'
                      "
                    >
                      {{ $t('vote.step3') }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Step 1: Rating -->
              <VoteRatingStep
                v-if="currentStep === 1"
                :company-name="companyName"
                :category-id="company?.category_id"
                @next="handleRatingComplete"
                @back="handleClose"
              />

              <!-- Step 2: Phone Input -->
              <VotePhoneVerificationStep
                v-if="currentStep === 2"
                :is-loading="isLoading"
                @submit="handlePhoneSubmit"
                @back="handleBack"
              />

              <!-- Step 3: Code Verification -->
              <VoteCodeVerificationStep
                v-if="currentStep === 3"
                :phone="phoneNumber"
                :expires-in-minutes="expiresInMinutes"
                :is-loading="isLoading"
                @submit="handleCodeSubmit"
                @back="handleBack"
                @resend="handleResendCode"
              />
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import {
  Dialog,
  DialogPanel,
  TransitionRoot,
  TransitionChild,
} from '@headlessui/vue'
import type { Provider } from '~/composables/useProviders'
import type { CriterionScore } from '~/composables/useVote'

// Use i18n
const { locale } = useI18n()
const { initiateVote, confirmVote, isLoading, reset } = useVote()

interface Props {
  isOpen: boolean
  company: Provider | null
}

const props = defineProps<Props>()

// Get company name based on locale
const companyName = computed(() => {
  if (!props.company) return ''
  return locale.value === 'tj' ? props.company.name_tj : props.company.name_ru
})

const emit = defineEmits<{
  close: []
  success: []
}>()

const currentStep = ref(1)
const ratings = ref<Record<string, number>>({})
const phoneNumber = ref('')
const expiresInMinutes = ref(0)

watch(
  () => props.isOpen,
  (newValue) => {
    if (newValue) {
      // Reset state when modal opens
      currentStep.value = 1
      ratings.value = {}
      phoneNumber.value = ''
      expiresInMinutes.value = 0
      reset()
    }
  }
)

const handleRatingComplete = (ratingData: Record<string, number>) => {
  ratings.value = ratingData
  currentStep.value = 2
}

const handleBack = () => {
  if (currentStep.value === 3) {
    currentStep.value = 2
  } else if (currentStep.value === 2) {
    currentStep.value = 1
  }
}

const handleClose = () => {
  emit('close')
}

const handlePhoneSubmit = async (phone: string) => {
  if (!props.company) return

  try {
    // Convert ratings to criteria scores format
    const criteriaScores: CriterionScore[] = Object.entries(ratings.value).map(
      ([criterion_id, score]) => ({
        criterion_id,
        score,
      })
    )

    // Initiate vote - sends SMS code
    const response = await initiateVote(
      props.company.id,
      phone,
      criteriaScores
    )

    phoneNumber.value = phone
    expiresInMinutes.value = response.expires_in_minutes
    currentStep.value = 3
  } catch (err) {
    console.error('Failed to initiate vote:', err)
    // Handle error - you can show a toast notification here
  }
}

const handleCodeSubmit = async (code: string) => {
  if (!props.company) return

  try {
    // Confirm vote with SMS code (only phone and otp_code needed)
    await confirmVote(
      phoneNumber.value,
      code
    )

    // Success - close modal and notify parent
    emit('success')
    emit('close')
  } catch (err) {
    console.error('Failed to confirm vote:', err)
    // Handle error - you can show a toast notification here
  }
}

const handleResendCode = async () => {
  if (!props.company) return

  try {
    // Convert ratings to criteria scores format
    const criteriaScores: CriterionScore[] = Object.entries(ratings.value).map(
      ([criterion_id, score]) => ({
        criterion_id,
        score,
      })
    )

    // Resend SMS code
    const response = await initiateVote(
      props.company.id,
      phoneNumber.value,
      criteriaScores
    )

    expiresInMinutes.value = response.expires_in_minutes
  } catch (err) {
    console.error('Failed to resend code:', err)
    // Handle error - you can show a toast notification here
  }
}
</script>
