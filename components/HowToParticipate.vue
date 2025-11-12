<template>
  <section
    id="how-to-participate"
    class="relative py-24 md:py-32 overflow-hidden"
  >
    <!-- Background with gradient -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black -z-10"
    ></div>

    <!-- Decorative elements -->
    <img
      class="absolute left-0 top-1/4 w-96 object-cover opacity-30 -z-5"
      :src="
        getAssetPath(
          '/images/white-background-abstract-with-wavy-line-gold-left.png'
        )
      "
      alt=""
    />
    <img
      class="absolute right-0 top-1/2 w-96 object-cover opacity-30 -z-5"
      :src="
        getAssetPath(
          '/images/white-background-abstract-with-wavy-line-gold-right.png'
        )
      "
      alt=""
    />

    <div class="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
      <!-- Section Title -->
      <div class="text-center mb-16" data-aos="fade-up">
        <h2
          class="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-gold-light mb-4"
        >
          Как участвовать
        </h2>
        <div class="w-24 h-1 bg-gradient-gold mx-auto mb-6"></div>
        <p class="text-lg text-gray-300 max-w-2xl mx-auto">
          Простая пошаговая инструкция для участия в Telecom Awards Tajikistan
          2025
        </p>
      </div>

      <!-- Steps Container -->
      <div class="space-y-8">
        <!-- Step 1: Registration -->
        <div
          class="bg-black/40 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-zinc-800 relative"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <div class="flex flex-col md:flex-row gap-6">
            <!-- Step Number -->
            <div class="flex-shrink-0">
              <div
                class="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-gold flex items-center justify-center"
              >
                <span class="text-3xl md:text-4xl font-bold text-black">1</span>
              </div>
            </div>

            <!-- Step Content -->
            <div class="flex-1">
              <h3
                class="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-gold mb-4"
              >
                Регистрация на платформе
              </h3>
              <p class="text-lg text-gray-300 mb-4">
                Создайте учетную запись на платформе Telecom Awards Tajikistan,
                используя ваш номер телефона или email.
              </p>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <div class="mr-3 mt-1">
                    <div class="w-2 h-2 rounded-full bg-gradient-gold"></div>
                  </div>
                  <span class="text-gray-300"
                    >Перейдите на страницу регистрации</span
                  >
                </li>
                <li class="flex items-start">
                  <div class="mr-3 mt-1">
                    <div class="w-2 h-2 rounded-full bg-gradient-gold"></div>
                  </div>
                  <span class="text-gray-300"
                    >Введите ваши данные и подтвердите номер телефона</span
                  >
                </li>
                <li class="flex items-start">
                  <div class="mr-3 mt-1">
                    <div class="w-2 h-2 rounded-full bg-gradient-gold"></div>
                  </div>
                  <span class="text-gray-300"
                    >Заполните профиль и начните участвовать</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Step 2: Voting -->
        <div
          class="bg-black/40 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-zinc-800 relative"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div class="flex flex-col md:flex-row gap-6">
            <!-- Step Number -->
            <div class="flex-shrink-0">
              <div
                class="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-gold flex items-center justify-center"
              >
                <span class="text-3xl md:text-4xl font-bold text-black">2</span>
              </div>
            </div>

            <!-- Step Content -->
            <div class="flex-1">
              <h3
                class="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-gold mb-4"
              >
                Голосование за лучших
              </h3>
              <p class="text-lg text-gray-300 mb-4">
                Оцените качество услуг операторов мобильной связи и
                интернет-провайдеров в различных номинациях.
              </p>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <div class="mr-3 mt-1">
                    <div class="w-2 h-2 rounded-full bg-gradient-gold"></div>
                  </div>
                  <span class="text-gray-300"
                    >Выберите номинацию для голосования</span
                  >
                </li>
                <li class="flex items-start">
                  <div class="mr-3 mt-1">
                    <div class="w-2 h-2 rounded-full bg-gradient-gold"></div>
                  </div>
                  <span class="text-gray-300"
                    >Оцените компании по критериям качества</span
                  >
                </li>
                <li class="flex items-start">
                  <div class="mr-3 mt-1">
                    <div class="w-2 h-2 rounded-full bg-gradient-gold"></div>
                  </div>
                  <span class="text-gray-300"
                    >Следите за результатами голосования в реальном
                    времени</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Step 3: Company Application -->
        <div
          class="bg-black/40 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-zinc-800 relative"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <div class="flex flex-col md:flex-row gap-6">
            <!-- Step Number -->
            <div class="flex-shrink-0">
              <div
                class="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-gold flex items-center justify-center"
              >
                <span class="text-3xl md:text-4xl font-bold text-black">3</span>
              </div>
            </div>

            <!-- Step Content -->
            <div class="flex-1">
              <h3
                class="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-gold mb-4"
              >
                Подача заявки (для компаний)
              </h3>
              <p class="text-lg text-gray-300 mb-4">
                Операторы и провайдеры могут подать заявку на участие в премии,
                представив свои достижения и инновации.
              </p>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <div class="mr-3 mt-1">
                    <div class="w-2 h-2 rounded-full bg-gradient-gold"></div>
                  </div>
                  <span class="text-gray-300"
                    >Подготовьте документы и данные о компании</span
                  >
                </li>
                <li class="flex items-start">
                  <div class="mr-3 mt-1">
                    <div class="w-2 h-2 rounded-full bg-gradient-gold"></div>
                  </div>
                  <span class="text-gray-300"
                    >Выберите номинации для участия</span
                  >
                </li>
                <li class="flex items-start">
                  <div class="mr-3 mt-1">
                    <div class="w-2 h-2 rounded-full bg-gradient-gold"></div>
                  </div>
                  <span class="text-gray-300"
                    >Заполните заявку и отправьте на модерацию</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Step 4: FAQ -->
        <div
          class="bg-black/40 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-zinc-800 relative"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <div class="flex flex-col md:flex-row gap-6">
            <!-- Step Number -->
            <div class="flex-shrink-0">
              <div
                class="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-gold flex items-center justify-center"
              >
                <span class="text-3xl md:text-4xl font-bold text-black">4</span>
              </div>
            </div>

            <!-- Step Content -->
            <div class="flex-1">
              <h3
                class="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-gold mb-4"
              >
                Вопросы и поддержка
              </h3>
              <p class="text-lg text-gray-300 mb-4">
                Найдите ответы на частые вопросы или свяжитесь с нашей службой
                поддержки.
              </p>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <div class="mr-3 mt-1">
                    <div class="w-2 h-2 rounded-full bg-gradient-gold"></div>
                  </div>
                  <span class="text-gray-300"
                    >Посетите раздел "Часто задаваемые вопросы"</span
                  >
                </li>
                <li class="flex items-start">
                  <div class="mr-3 mt-1">
                    <div class="w-2 h-2 rounded-full bg-gradient-gold"></div>
                  </div>
                  <span class="text-gray-300"
                    >Свяжитесь с поддержкой через форму обратной связи</span
                  >
                </li>
                <li class="flex items-start">
                  <div class="mr-3 mt-1">
                    <div class="w-2 h-2 rounded-full bg-gradient-gold"></div>
                  </div>
                  <span class="text-gray-300"
                    >Подпишитесь на новости для получения обновлений</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div
        class="mt-16 text-center bg-black/40 backdrop-blur-sm rounded-3xl p-10 border border-zinc-800"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <h3
          class="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-gold mb-4"
        >
          Готовы начать?
        </h3>
        <p class="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Присоединяйтесь к первой народной премии Таджикистана и помогите
          определить лучших операторов связи
        </p>
        <div class="flex justify-center gap-4 flex-wrap">
          <a
            href="/register"
            class="inline-flex items-center justify-center px-8 py-3 rounded-lg text-black font-medium bg-gradient-gold hover:opacity-90 transition-opacity"
          >
            Зарегистрироваться
          </a>
          <NuxtLink
            to="/vote"
            class="inline-flex items-center justify-center px-8 py-3 rounded-lg text-white font-medium border-2 border-zinc-700 hover:border-zinc-500 transition-colors"
          >
            Начать голосование
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { getAssetPath } = useAssetPath();
</script>
