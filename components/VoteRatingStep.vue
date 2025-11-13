<template>
  <div class="space-y-8">
    <div class="text-center mb-10">
      <h3
        class="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-gold-light mb-4"
      >
        {{ $t("modal.rateCompany", { company: companyName }) }}
      </h3>
      <p class="text-base text-gray-400 leading-relaxed">
        {{ $t("modal.rateDescription") }}
      </p>
    </div>

    <!-- Loading State -->
    <div v-if="isLoading" class="space-y-5">
      <div
        v-for="i in 3"
        :key="i"
        class="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-7 border-2 border-zinc-800 animate-pulse"
      >
        <div class="h-6 bg-zinc-800 rounded w-1/3 mb-4"></div>
        <div class="h-4 bg-zinc-800 rounded w-2/3 mb-6"></div>
        <div class="flex justify-center gap-3">
          <div
            v-for="j in 5"
            :key="j"
            class="w-10 h-10 bg-zinc-800 rounded-full"
          ></div>
        </div>
      </div>
    </div>

    <!-- Criteria Ratings -->
    <div v-else class="space-y-5">
      <div
        v-for="criterion in displayCriteria"
        :key="criterion.id"
        class="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-3 md:p-7 border-2 transition-all duration-300"
        :class="[
          ratings[criterion.id]
            ? 'border-gold-500/40 shadow-lg shadow-gold-500/10'
            : 'border-zinc-800 hover:border-zinc-700',
        ]"
      >
        <div class="mb-6">
          <h4 class="text-xl font-bold text-white mb-2 flex items-center gap-2">
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
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              />
            </svg>
            {{ criterion.name }}
          </h4>
          <p class="text-sm text-gray-400 leading-relaxed ml-7">
            {{ criterion.description }}
          </p>
        </div>

        <!-- Modern Star Rating Interface -->
        <div class="space-y-4">
          <!-- Star Rating Buttons -->
          <div class="flex items-center justify-center gap-2 md:gap-3">
            <button
              v-for="star in 5"
              :key="star"
              type="button"
              @click="setRating(criterion.id, star)"
              @mouseenter="hoverRating[criterion.id] = star"
              @mouseleave="hoverRating[criterion.id] = 0"
              class="group relative transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 rounded-lg p-1"
              :class="[
                ratings[criterion.id] === star
                  ? 'scale-110'
                  : 'hover:scale-110',
              ]"
              :aria-label="`Оценка ${star} из 5 звезд для ${criterion.name}`"
            >
              <div
                class="w-full h-full sm:w-10 sm:h-10 md:w-12 md:h-12 transition-all duration-300"
                :class="[
                  (hoverRating[criterion.id] || ratings[criterion.id]) >= star
                    ? 'drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]'
                    : '',
                ]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke-width="2"
                  class="w-full h-full transition-all duration-300"
                  :class="[
                    (hoverRating[criterion.id] || ratings[criterion.id]) >= star
                      ? 'fill-[url(#star-gradient)] stroke-[url(#star-gradient)]'
                      : 'stroke-gold-600 group-hover:stroke-gold-400',
                  ]"
                >
                  <defs>
                    <linearGradient
                      id="star-gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        style="stop-color: #f6f2c0; stop-opacity: 1"
                      />
                      <stop
                        offset="50%"
                        style="stop-color: #f5cd79; stop-opacity: 1"
                      />
                      <stop
                        offset="100%"
                        style="stop-color: #cb9b51; stop-opacity: 1"
                      />
                    </linearGradient>
                  </defs>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </div>
            </button>
          </div>

          <!-- Selected Rating Display -->
          <div
            v-if="ratings[criterion.id]"
            class="text-center px-1 py-3 rounded-xl bg-gradient-to-r from-gold-500/10 via-gold-500/20 to-gold-500/10 border border-gold-500/30 animate-in fade-in slide-in-from-bottom-2 duration-300"
          >
            <span class="text-sm text-gray-400 mr-1"
              >{{ $t("modal.yourRating") }}:
            </span>
            <span class="text-lg font-bold text-gold-400">
              {{ getRatingLabel(ratings[criterion.id]) }}
            </span>
            <span class="text-sm text-gold-500/70 ml-2">
              ({{ ratings[criterion.id] }}/5)
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Buttons -->
    <div class="flex flex-col sm:flex-row gap-4 pt-6">
      <button
        type="button"
        @click="$emit('back')"
        class="flex-1 px-6 py-4 rounded-xl border-2 border-zinc-700/50 text-white font-semibold hover:border-zinc-600 hover:bg-zinc-800/50 transition-all duration-300"
      >
        {{ $t("modal.back") }}
      </button>
      <button
        type="button"
        @click="handleNext"
        :disabled="!isAllRated"
        class="relative flex-1 px-6 py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 overflow-hidden group"
        :class="
          isAllRated
            ? 'bg-gradient-gold text-black hover:scale-105 hover:shadow-xl hover:shadow-gold-500/30 cursor-pointer'
            : 'bg-zinc-800/50 text-gray-500 cursor-not-allowed opacity-60'
        "
      >
        <span
          v-if="isAllRated"
          class="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        ></span>
        <span class="relative flex items-center justify-center gap-2">
          <span>{{ $t("modal.next") }}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            class="w-5 h-5 transition-transform group-hover:translate-x-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </span>
      </button>
    </div>

    <!-- Progress Hint -->
    <div v-if="!isAllRated" class="text-center pt-2">
      <p class="text-sm text-gray-500">
        {{ $t("modal.rateAllCriteria") }}
        <span class="text-gold-500 font-medium ml-1">
          ({{ Object.keys(ratings).length }}/{{ displayCriteria.length }})
        </span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import type { Criterion } from "~/composables/useCriteria";

// Use i18n and locale
const { t, locale } = useI18n();

// Use criteria composable
const {
  criteria: apiCriteria,
  fetchCriteria,
  isLoading,
  getCriterionLabel,
} = useCriteria();

interface Props {
  companyName: string;
  categoryId?: string;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  next: [ratings: Record<string, number>];
  back: [];
}>();

const ratings = ref<Record<string, number>>({});
const hoverRating = ref<Record<string, number>>({});

// Computed property to get localized criteria for display
const displayCriteria = computed(() => {
  return apiCriteria.value.map((criterion) => ({
    id: criterion.id,
    name: getCriterionLabel(criterion, locale.value as "tj" | "ru"),
    // You can add description from API if available
    description: "", // Add this to API response if needed
  }));
});

// Fetch criteria when component is mounted or categoryId changes
watch(
  () => props.categoryId,
  async (newCategoryId) => {
    if (newCategoryId) {
      try {
        await fetchCriteria(newCategoryId);
      } catch (error) {
        console.error("Failed to fetch criteria:", error);
      }
    }
  },
  { immediate: true }
);

const setRating = (criterionId: string, rating: number) => {
  ratings.value[criterionId] = rating;
};

const isAllRated = computed(() => {
  return displayCriteria.value.every(
    (criterion) => ratings.value[criterion.id] > 0
  );
});

const handleNext = () => {
  if (isAllRated.value) {
    emit("next", ratings.value);
  }
};

// Helper function for rating text class
const getRatingTextClass = (rating: number) => {
  return "bg-gradient-gold";
};

const getRatingLabel = (rating: number) => {
  const labels: Record<number, string> = {
    1: t("rating.poor"),
    2: t("rating.fair"),
    3: t("rating.good"),
    4: t("rating.excellent"),
    5: t("rating.outstanding"),
  };

  return labels[rating] || "";
};
</script>
