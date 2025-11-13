<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import type { Provider } from "~/composables/useProviders";

// Use i18n
const { locale } = useI18n();

// Use default layout
definePageMeta({
  layout: "default",
});

// Set page meta
useHead({
  title: "Голосование | Telecom Awards Tajikistan 2025",
  meta: [
    {
      name: "description",
      content:
        "Проголосуйте за лучших операторов мобильной связи и интернет-провайдеров Таджикистана в Telecom Awards 2025.",
    },
  ],
});

// Use categories composable
const {
  categories,
  isLoading: isCategoriesLoading,
  error: categoriesError,
  fetchCategories,
  getCategoryName,
} = useCategories();

// Use providers composable
const {
  providers,
  isLoading: isProvidersLoading,
  fetchProviders,
} = useProviders();

// State
const selectedCategory = ref<string>("");
const isModalOpen = ref(false);
const isSuccessDialogOpen = ref(false);
const selectedCompany = ref<Provider | null>(null);

// Fetch categories on mount
onMounted(async () => {
  try {
    await fetchCategories();
  } catch (err) {
    console.error("Failed to fetch categories:", err);
  }
});

// Watch for category selection and fetch providers
watch(selectedCategory, async (newCategoryId) => {
  if (newCategoryId) {
    try {
      await fetchProviders(newCategoryId);
    } catch (err) {
      console.error("Failed to fetch providers:", err);
    }
  }
});

// Methods
const openVoteModal = (company: Provider) => {
  selectedCompany.value = company;
  isModalOpen.value = true;
};

const closeVoteModal = () => {
  isModalOpen.value = false;
  selectedCompany.value = null;
};

const handleVoteSuccess = () => {
  // Close vote modal
  closeVoteModal();

  // Show success dialog
  isSuccessDialogOpen.value = true;
};

const closeSuccessDialog = () => {
  isSuccessDialogOpen.value = false;
};
</script>

<template>
  <section class="relative pb-16 pt-20 md:py-24 overflow-hidden">
    <div class="app-container relative z-10">
      <!-- Page Title -->
      <div class="text-center mb-12 md:mb-16" data-aos="fade-up">
        <h1
          class="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-gold-light mb-6"
        >
          {{ $t("vote.title") }}
        </h1>
        <div class="w-32 h-1 bg-gradient-gold mx-auto mb-8 rounded-full"></div>
        <p
          class="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          {{ $t("vote.subtitle") }}
        </p>
      </div>

      <!-- Category Selection -->
      <div class="mb-16" data-aos="fade-up" data-aos-delay="100">
        <!-- Loading State -->
        <div
          v-if="isCategoriesLoading"
          class="flex justify-center gap-4 max-w-2xl mx-auto"
        >
          <div
            v-for="i in 2"
            :key="i"
            class="flex-1 px-10 py-4 rounded-xl bg-zinc-800/50 animate-pulse"
          >
            <div class="h-6 bg-zinc-700/50 rounded"></div>
          </div>
        </div>

        <!-- Error State -->
        <div
          v-else-if="categoriesError"
          class="max-w-2xl mx-auto bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-center"
        >
          <p class="text-red-400">
            {{ $t("vote.errorLoadingCategories") }}
          </p>
        </div>

        <!-- Categories -->
        <div
          v-else
          class="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto"
        >
          <button
            v-for="cat in categories"
            :key="cat.id"
            type="button"
            @click="selectedCategory = cat.id"
            class="relative px-4 md:px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg overflow-hidden group"
            :class="
              selectedCategory === cat.id
                ? 'bg-gradient-gold text-black scale-105 shadow-yellow-500/30'
                : 'bg-zinc-800/80 backdrop-blur-sm text-gray-300 hover:bg-zinc-700/80 hover:scale-102 hover:shadow-yellow-500/10'
            "
          >
            <!-- Animated border for selected state -->
            <span
              v-if="selectedCategory === cat.id"
              class="absolute inset-0 rounded-xl border-2 border-white/20 animate-pulse"
            ></span>
            <!-- Icon -->
            <span
              class="flex items-center justify-center gap-3 text-base md:text-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-6 h-6 min-w-6 min-h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                />
              </svg>
              {{ getCategoryName(cat, locale) }}
            </span>
          </button>
        </div>
      </div>

      <!-- Providers Loading -->
      <div v-if="selectedCategory && isProvidersLoading" class="relative py-32">
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="relative">
            <!-- Outer rotating circle -->
            <div
              class="w-20 h-20 rounded-full border-4 border-gold-500/20 border-t-gold-500 animate-spin"
            ></div>
            <!-- Inner pulsing circle -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div
                class="w-12 h-12 rounded-full bg-gradient-gold opacity-30 animate-pulse"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Providers Grid -->
      <div
        v-else-if="selectedCategory && providers.length > 0"
        class="relative"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <!-- Decorative background elements for providers -->
        <div
          class="absolute left-0 top-1/4 w-96 h-96 opacity-30 bg-no-repeat bg-contain pointer-events-none"
          style="
            background-image: url('/images/white-background-abstract-with-wavy-line-gold-left.png');
          "
          aria-hidden="true"
        />
        <div
          class="absolute right-0 top-1/2 w-96 h-96 opacity-30 bg-no-repeat bg-contain pointer-events-none"
          style="
            background-image: url('/images/white-background-abstract-with-wavy-line-gold-right.png');
          "
          aria-hidden="true"
        />

        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10"
        >
          <VoteCompanyCard
            v-for="company in providers"
            :key="company.id"
            :company="company"
            @select="openVoteModal(company)"
          />
        </div>
      </div>

      <!-- No Providers Found -->
      <div
        v-else-if="
          selectedCategory && providers.length === 0 && !isProvidersLoading
        "
        class="text-center pt-10 md:pt-20"
      >
        <div
          class="max-w-md mx-auto bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800 p-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-16 h-16 mx-auto mb-6 text-gray-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
            />
          </svg>
          <p class="text-lg text-gray-400">
            {{ $t("vote.noCompanies") }}
          </p>
        </div>
      </div>

      <!-- No Category Selected -->
      <div
        v-else
        class="text-center pt-10"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div
          class="max-w-md mx-auto bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800 p-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-20 h-20 mx-auto mb-6 text-gold-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
            />
          </svg>
          <h3 class="text-xl font-semibold text-white mb-3">
            {{ $t("vote.selectCategory") }}
          </h3>
          <p class="text-gray-400">
            {{ $t("vote.selectCategoryDesc") }}
          </p>
        </div>
      </div>
    </div>
    <!-- Vote Modal -->
    <VoteModal
      :is-open="isModalOpen"
      :company="selectedCompany"
      @close="closeVoteModal"
      @success="handleVoteSuccess"
    />

    <!-- Success Dialog -->
    <VoteSuccessDialog
      :is-open="isSuccessDialogOpen"
      @close="closeSuccessDialog"
    />
  </section>
</template>
