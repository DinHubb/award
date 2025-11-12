<template>
  <div class="min-h-screen flex flex-col overflow-clip">
    <!-- Spacer for fixed header -->
    <div class="h-16"></div>

    <main class="grow">
      <FAQ />
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
  title: 'Вопросы и ответы | Telecom Awards Tajikistan 2025',
  meta: [
    {
      name: 'description',
      content:
        'Часто задаваемые вопросы о Telecom Awards Tajikistan 2025. Найдите ответы на вопросы о голосовании, участии и проведении премии.',
    },
  ],
})
</script>
