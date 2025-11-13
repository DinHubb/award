<template>
  <footer class="relative border-t border-zinc-800">
    <div class="app-container py-10">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <!-- Logo and Description -->
        <div class="md:col-span-2">
          <h3
            class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-gold mb-4"
          >
            Telecom Awards Tajikistan
          </h3>
          <p class="text-gray-400 mb-4">
            Первая народная премия, где жители Таджикистана выбирают лучших
            операторов мобильной связи и интернет-провайдеров.
          </p>
          <p class="text-sm text-gray-500">
            Учреждена по инициативе Службы связи при Правительстве Республики
            Таджикистан
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4
            class="text-lg font-semibold bg-clip-text text-transparent bg-gradient-gold mb-4"
          >
            Навигация
          </h4>
          <ul class="space-y-2">
            <li>
              <NuxtLink
                to="/"
                class="text-gray-400 hover:text-white transition-colors"
              >
                Главная
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/how-to-participate"
                class="text-gray-400 hover:text-white transition-colors"
              >
                Как участвовать
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/about"
                class="text-gray-400 hover:text-white transition-colors"
              >
                О нас
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/faq"
                class="text-gray-400 hover:text-white transition-colors"
              >
                Вопросы и ответы
              </NuxtLink>
            </li>
            <li>
              <a
                href="/vote"
                class="text-gray-400 hover:text-white transition-colors"
              >
                Голосовать
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4
            class="text-lg font-semibold bg-clip-text text-transparent bg-gradient-gold mb-4"
          >
            Контакты
          </h4>
          <ul class="space-y-2 text-gray-400">
            <li>
              <a
                href="mailto:info@telecomawards.tj"
                class="hover:text-white transition-colors"
              >
                info@telecomawards.tj
              </a>
            </li>
            <li>
              <a
                href="tel:+992000000000"
                class="hover:text-white transition-colors"
              >
                +992 (00) 000-00-00
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div
        class="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <p class="text-gray-500 text-sm">
          &copy; 2025 Telecom Awards Tajikistan. Все права защищены.
        </p>
        <div class="flex gap-6">
          <NuxtLink
            to="/privacy"
            class="text-gray-500 hover:text-white transition-colors text-sm"
          >
            Политика конфиденциальности
          </NuxtLink>
          <NuxtLink
            to="/terms"
            class="text-gray-500 hover:text-white transition-colors text-sm"
          >
            Условия использования
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
