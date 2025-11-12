<template>
  <div class="max-w-6xl mx-auto">
    <div class="">
      <div class="rounded-3xl">
        <h2
          class="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-gold"
        >
          Связь и инновации
        </h2>
        <p class="bg-clip-text text-transparent bg-gradient-gold">
          Telecom Awards Tajikistan учреждена по инициативе Службы связи при
          Правительстве Республики Таджикистан в рамках реализации Стратегии
          развития Таджикистана на 2025–2030 годы, сосредоточенной на Годах
          развития цифровой экономики и инноваций.
        </p>
      </div>

      <div>1</div>
    </div>
    <div>
      <div>
        <h2
          class="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-gold"
        >
          Объединение телекоммуникаций
        </h2>
        <p>
          Премия направлена на объединение операторов и интернет-провайдеров,
          стимулирование внедрения современных технологий и повышение качества
          мобильной связи и интернета по всей стране.
        </p>
      </div>
      <div>2</div>
    </div>
    <div>
      <div>
        <h2
          class="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-gold"
        >
          Государство, бизнес, пользователи
        </h2>
        <p>
          Telecom Awards формирует открытую платформу, где государство, бизнес и
          пользователи совместно оценивают качество услуг, уровень инноваций и
          вклад компаний в развитие цифрового общества Таджикистана.
        </p>
      </div>
      <div>3</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const highlighterRef = ref<HTMLElement | null>(null);

useHighlighter(highlighterRef);
</script>
