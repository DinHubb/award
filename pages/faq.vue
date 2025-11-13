<template>
  <FAQ />
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

// Use default layout
definePageMeta({
  layout: "default",
});

// Set page meta
useHead({
  title: t("faq.meta.title"),
  meta: [
    {
      name: "description",
      content: t("faq.meta.description"),
    },
  ],
});
</script>
