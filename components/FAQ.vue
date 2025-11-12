<template>
  <section id="faq" class="relative py-24 md:py-32 overflow-hidden">
    <!-- Background with gradient -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black -z-10"
    ></div>

    <!-- Decorative elements -->
    <img
      class="absolute left-0 top-1/4 w-96 object-cover opacity-30 -z-5"
      :src="getAssetPath('/images/white-background-abstract-with-wavy-line-gold-left.png')"
      alt=""
    />
    <img
      class="absolute right-0 top-1/2 w-96 object-cover opacity-30 -z-5"
      :src="getAssetPath('/images/white-background-abstract-with-wavy-line-gold-right.png')"
      alt=""
    />

    <div class="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
      <!-- Section Title -->
      <div class="text-center mb-16" data-aos="fade-up">
        <h2
          class="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-gold-light mb-4"
        >
          Вопросы и ответы
        </h2>
        <div class="w-24 h-1 bg-gradient-gold mx-auto mb-6"></div>
        <p class="text-lg text-gray-300 max-w-2xl mx-auto">
          Подборка самых частых вопросов от участников
        </p>
      </div>

      <!-- FAQ Accordion -->
      <div class="space-y-4 mb-16" data-aos="fade-up" data-aos-delay="100">
        <Disclosure
          v-for="(item, index) in faqItems"
          :key="index"
          v-slot="{ open }"
          as="div"
          class="bg-black/40 backdrop-blur-sm rounded-2xl border-2 transition-all duration-300 overflow-hidden border-zinc-800 hover:border-zinc-700"
        >
          <!-- Question Button -->
          <DisclosureButton
            class="w-full p-4 md:px-5 flex justify-between items-center gap-4 text-left group transition-colors duration-300 outline-none"
            :class="[open ? 'bg-zinc-900/50' : 'hover:bg-zinc-900/30']"
          >
            <h3
              class="text-lg md:text-xl text-white group-hover:text-gray-200 font-bold transition-all ease-in-out duration-200"
            >
              {{ item.question }}
            </h3>
            <div
              class="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
              :class="[
                open
                  ? 'bg-gradient-gold rotate-180'
                  : 'bg-zinc-800 group-hover:bg-zinc-700',
              ]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                class="w-5 h-5 transition-transform duration-300"
                :class="[open ? 'text-black' : 'text-gray-400']"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </DisclosureButton>

          <!-- Answer Content -->

          <DisclosurePanel class="overflow-hidden">
            <div class="p-4 md:px-5">
              <div
                class="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed"
              >
                <p v-html="item.answer"></p>
              </div>
            </div>
          </DisclosurePanel>
        </Disclosure>
      </div>

      <!-- Contact Form -->
      <div
        class="bg-black/40 backdrop-blur-sm rounded-3xl p-8 md:p-10 border-2 border-zinc-800"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div class="text-center mb-8">
          <h3
            class="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-gold-light mb-4"
          >
            Не нашли ответ на свой вопрос?
          </h3>
          <p class="text-base text-gray-400">
            Заполните форму обратной связи, и мы свяжемся с вами в ближайшее
            время
          </p>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Name Input -->
          <div>
            <label
              for="name"
              class="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-4 h-4 text-gold-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              Ваше имя
            </label>
            <input
              id="name"
              v-model="formData.name"
              type="text"
              required
              class="w-full px-5 py-3 bg-zinc-900/80 backdrop-blur-sm border-2 border-zinc-800 rounded-xl text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:border-gold-500/50"
              placeholder="Введите ваше имя"
            />
          </div>

          <!-- Email Input -->
          <div>
            <label
              for="email"
              class="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-4 h-4 text-gold-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              Email
            </label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              required
              class="w-full px-5 py-3 bg-zinc-900/80 backdrop-blur-sm border-2 border-zinc-800 rounded-xl text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:border-gold-500/50"
              placeholder="your@email.com"
            />
          </div>

          <!-- Phone Input -->
          <div>
            <label
              for="contact-phone"
              class="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-4 h-4 text-gold-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
              Телефон (необязательно)
            </label>
            <input
              id="contact-phone"
              v-model="formData.phone"
              type="tel"
              class="w-full px-5 py-3 bg-zinc-900/80 backdrop-blur-sm border-2 border-zinc-800 rounded-xl text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:border-gold-500/50"
              placeholder="+992 XX XXX XX XX"
            />
          </div>

          <!-- Message Textarea -->
          <div>
            <label
              for="message"
              class="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-4 h-4 text-gold-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>
              Ваш вопрос
            </label>
            <textarea
              id="message"
              v-model="formData.message"
              required
              rows="5"
              class="w-full px-5 py-3 bg-zinc-900/80 backdrop-blur-sm border-2 border-zinc-800 rounded-xl text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:border-gold-500/50 resize-none"
              placeholder="Опишите ваш вопрос подробно..."
            ></textarea>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="isSubmitting"
            class="relative w-full px-6 py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 overflow-hidden group"
            :class="
              !isSubmitting
                ? 'bg-gradient-gold text-black hover:scale-105 hover:shadow-xl hover:shadow-gold-500/30 cursor-pointer'
                : 'bg-zinc-800/50 text-gray-500 cursor-not-allowed opacity-60'
            "
          >
            <span
              v-if="!isSubmitting"
              class="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            ></span>
            <span
              v-if="!isSubmitting"
              class="relative flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
              Отправить сообщение
            </span>
            <span
              v-else
              class="relative flex items-center justify-center gap-3"
            >
              <svg
                class="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Отправка...
            </span>
          </button>

          <!-- Success Message -->
          <Transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
            <div
              v-if="showSuccess"
              class="bg-gradient-to-r from-gold-500/10 via-gold-500/20 to-gold-500/10 border border-gold-500/30 rounded-xl p-4"
            >
              <div class="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6 text-gold-500 shrink-0"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p class="text-white font-medium">
                  Спасибо! Ваше сообщение успешно отправлено. Мы свяжемся с вами
                  в ближайшее время.
                </p>
              </div>
            </div>
          </Transition>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";

const { getAssetPath } = useAssetPath();

interface FAQItem {
  question: string;
  answer: string;
}

const isSubmitting = ref(false);
const showSuccess = ref(false);

const formData = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const faqItems = ref<FAQItem[]>([
  {
    question: "Кто может участвовать в голосовании?",
    answer:
      "В голосовании может принять участие любой житель Таджикистана старше 18 лет. Для участия необходимо зарегистрироваться на платформе и подтвердить свой номер телефона.",
  },
  {
    question: "Могу ли я проголосовать несколько раз?",
    answer:
      "Нет, каждый участник может проголосовать только один раз за каждую компанию в выбранной категории. Система автоматически отслеживает голоса по номеру телефона для обеспечения честности голосования.",
  },
  {
    question: "Как определяются победители?",
    answer:
      "Победители определяются на основе оценок пользователей по различным критериям качества услуг. Учитываются оценки по качеству связи, скорости интернета, покрытию и качеству поддержки клиентов. Итоговые результаты формируются на основе среднего балла по всем критериям.",
  },
  {
    question: "Когда будут объявлены результаты?",
    answer:
      "Результаты голосования будут объявлены на торжественной церемонии награждения, которая состоится в конце 2025 года. Точная дата и место проведения будут объявлены дополнительно на нашем сайте и в социальных сетях.",
  },
  {
    question: "Как компании могут подать заявку на участие?",
    answer:
      "Операторы мобильной связи и интернет-провайдеры могут подать заявку через специальную форму на нашей платформе. Необходимо заполнить информацию о компании, выбрать номинации для участия и предоставить документы, подтверждающие лицензию на оказание телекоммуникационных услуг.",
  },
  {
    question: "Безопасны ли мои данные?",
    answer:
      "Да, мы гарантируем полную конфиденциальность и безопасность ваших персональных данных. Вся информация хранится в зашифрованном виде и используется только для целей проведения голосования. Мы не передаем ваши данные третьим лицам.",
  },
  {
    question: "Какие категории доступны для голосования?",
    answer:
      'На данный момент доступны две основные категории: "Операторы мобильной связи" и "Интернет-провайдеры". В каждой категории участники оценивают компании по критериям качества связи, скорости интернета, покрытия и поддержки клиентов.',
  },
  {
    question: "Как связаться с организаторами?",
    answer:
      'Вы можете связаться с нами через форму обратной связи на этой странице, отправить email на официальный адрес или позвонить по телефону поддержки. Контактные данные доступны в разделе "Контакты" в футере сайта.',
  },
]);

const handleSubmit = async () => {
  isSubmitting.value = true;

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // TODO: Replace with actual API call
  console.log("Contact form submitted:", formData.value);

  // Show success message
  showSuccess.value = true;
  isSubmitting.value = false;

  // Reset form
  formData.value = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  // Hide success message after 5 seconds
  setTimeout(() => {
    showSuccess.value = false;
  }, 5000);
};
</script>
