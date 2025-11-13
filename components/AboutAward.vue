<template>
  <section id="about" class="relative pb-16 pt-20 md:py-24 overflow-hidden">
    <!-- Decorative elements -->
    <img
      class="absolute left-0 top-1/4 w-96 object-cover opacity-30"
      :src="getAssetPath('/images/white-background-abstract-with-wavy-line-gold-left.png')"
      alt=""
    />
    <img
      class="absolute right-0 top-1/2 w-96 object-cover opacity-30 -z-5"
      :src="getAssetPath('/images/white-background-abstract-with-wavy-line-gold-right.png')"
      alt=""
    />

    <div class="app-container relative z-10">
      <!-- Section Title -->
      <div class="text-center mb-10 md:mb-16" data-aos="fade-up">
        <h2
          class="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-gold-light mb-4"
        >
          О нас
        </h2>
        <div class="w-24 h-1 bg-gradient-gold mx-auto"></div>
      </div>

      <!-- Main Content -->
      <div class="space-y-6">
        <!-- Main Description -->
        <div
          class="bg-black/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-zinc-800"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h3
            class="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-gold-light mb-6"
          >
            Первая народная премия Таджикистана
          </h3>
          <p class="text-lg text-gray-300 leading-relaxed mb-4">
            <strong class="bg-clip-text text-transparent bg-gradient-gold"
              >Telecom Awards Tajikistan 2025</strong
            >
            — это цифровая платформа, объединяющая всех участников
            телекоммуникационного рынка Республики Таджикистан. Премия создана
            как прозрачная и технологичная среда для подачи заявок, голосования,
            публикации аналитики и обмена новостями в сфере связи и инноваций.
          </p>
          <p class="text-lg text-gray-300 leading-relaxed">
            Это первая премия, где жители страны напрямую выбирают лучших
            операторов мобильной связи и интернет-провайдеров, оценивая качество
            услуг, уровень инноваций и вклад компаний в развитие цифрового
            общества.
          </p>
        </div>

        <!-- Two Column Layout -->
        <div class="grid md:grid-cols-2 gap-6">
          <!-- Organizer Block -->
          <div
            class="bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-zinc-800"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div class="flex items-center mb-4">
              <div
                class="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center mr-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-black"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                  />
                </svg>
              </div>
              <h3
                class="text-xl font-bold bg-clip-text text-transparent bg-gradient-gold-light"
              >
                Организатор
              </h3>
            </div>
            <p class="text-gray-300 leading-relaxed">
              Премия учреждена по инициативе
              <strong class="text-white"
                >Службы связи при Правительстве Республики Таджикистан</strong
              >
              в рамках реализации Стратегии развития Таджикистана на 2025–2030
              годы, сосредоточенной на Годах развития цифровой экономики и
              инноваций.
            </p>
          </div>

          <!-- Participants Block -->
          <div
            class="bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-zinc-800"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div class="flex items-center mb-4">
              <div
                class="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center mr-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-black"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </div>
              <h3
                class="text-xl font-bold bg-clip-text text-transparent bg-gradient-gold-light"
              >
                Участники
              </h3>
            </div>
            <p class="text-gray-300 leading-relaxed">
              В премии участвуют все операторы мобильной связи и
              интернет-провайдеры Таджикистана, а также миллионы пользователей,
              которые своим голосом определяют победителей в различных
              номинациях.
            </p>
          </div>
        </div>

        <!-- Goals Block -->
        <div
          class="bg-black/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-zinc-800"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div class="flex items-center mb-6">
            <div
              class="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center mr-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-black"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            </div>
            <h3
              class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-gold-light"
            >
              Цели и задачи премии
            </h3>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="flex">
              <div class="mr-4 mt-1">
                <div class="w-2 h-2 rounded-full bg-gradient-gold"></div>
              </div>
              <p class="text-gray-300 leading-relaxed">
                <strong class="text-white">Объединение</strong> операторов и
                интернет-провайдеров для совместного развития отрасли
              </p>
            </div>

            <div class="flex">
              <div class="mr-4 mt-1">
                <div class="w-2 h-2 rounded-full bg-gradient-gold"></div>
              </div>
              <p class="text-gray-300 leading-relaxed">
                <strong class="text-white">Стимулирование</strong> внедрения
                современных технологий и инновационных решений
              </p>
            </div>

            <div class="flex">
              <div class="mr-4 mt-1">
                <div class="w-2 h-2 rounded-full bg-gradient-gold"></div>
              </div>
              <p class="text-gray-300 leading-relaxed">
                <strong class="text-white">Повышение качества</strong> мобильной
                связи и интернета по всей стране
              </p>
            </div>

            <div class="flex">
              <div class="mr-4 mt-1">
                <div class="w-2 h-2 rounded-full bg-gradient-gold"></div>
              </div>
              <p class="text-gray-300 leading-relaxed">
                <strong class="text-white">Формирование</strong> открытой
                платформы для оценки качества услуг
              </p>
            </div>

            <div class="flex">
              <div class="mr-4 mt-1">
                <div class="w-2 h-2 rounded-full bg-gradient-gold"></div>
              </div>
              <p class="text-gray-300 leading-relaxed">
                <strong class="text-white">Развитие</strong> конкуренции и
                повышение прозрачности рынка
              </p>
            </div>

            <div class="flex">
              <div class="mr-4 mt-1">
                <div class="w-2 h-2 rounded-full bg-gradient-gold"></div>
              </div>
              <p class="text-gray-300 leading-relaxed">
                <strong class="text-white">Признание</strong> вклада компаний в
                развитие цифрового общества
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { getAssetPath } = useAssetPath();
</script>
