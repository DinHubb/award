<template>
  <div class="min-h-screen flex flex-col overflow-clip">
    <main class="grow">
      <Hero />

      <AboutAward />

      <HowToParticipate />

      <FAQ />
    </main>
  </div>
</template>

<script setup lang="ts">
// Use default layout
definePageMeta({
  layout: "default",
});

// Set page meta
useHead({
  title: "Главная | Telecom Awards Tajikistan 2025",
  meta: [
    {
      name: "description",
      content:
        "Telecom Awards Tajikistan 2025 - первая народная премия, где жители Таджикистана выбирают лучших операторов связи и интернет-провайдеров.",
    },
  ],
});
</script>
