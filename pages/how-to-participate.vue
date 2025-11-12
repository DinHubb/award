<template>
  <div class="min-h-screen flex flex-col overflow-clip">
    <!-- Spacer for fixed header -->
    <div class="h-16"></div>

    <main class="grow">
      <HowToParticipate />
    </main>
  </div>
</template>

<script setup lang="ts">
// Use default layout
definePageMeta({
  layout: 'default',
})

// Set page meta
useHead({
  title: 'Как участвовать | Telecom Awards Tajikistan 2025',
  meta: [
    {
      name: 'description',
      content:
        'Узнайте, как принять участие в Telecom Awards Tajikistan 2025. Простая пошаговая инструкция для регистрации, голосования и подачи заявки.',
    },
  ],
})
</script>
