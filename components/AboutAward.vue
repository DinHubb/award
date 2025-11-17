<template>
  <section id="about" class="relative pb-16 pt-20 md:py-24 overflow-hidden">
    <!-- Decorative elements -->
    <!-- <img
      class="absolute left-0 top-1/4 w-96 object-cover opacity-30"
      src="/images/white-background-abstract-with-wavy-line-gold-left.png"
      alt=""
    />
    <img
      class="absolute right-0 top-1/2 w-96 object-cover opacity-30 -z-5"
      src="/images/white-background-abstract-with-wavy-line-gold-right.png"
      alt=""
    /> -->

    <div class="app-container relative z-10">
      <!-- Section Title -->
      <div class="text-center mb-10 md:mb-16" data-aos="fade-up">
        <h2
          class="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-gold-light mb-4"
        >
          {{ $t("nav.about") }}
        </h2>
        <div class="w-24 h-1 bg-gradient-gold mx-auto"></div>
      </div>

      <!-- Main Content -->
      <div class="space-y-6">
        <!-- Main Description -->
        <div
          class="bg-black/40 backdrop-blur-sm rounded-3xl p-5 sm:p-8 md:p-12 border border-gold-800/40"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h3
            class="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-gold-light mb-6"
          >
            {{ $t("about.mainTitle") }}
          </h3>
          <p class="text-lg text-gray-300 leading-relaxed mb-4">
            <strong class="bg-clip-text text-transparent bg-gradient-gold-light"
              >Telecom Awards Tajikistan 2025</strong
            >
            {{ $t("about.description1") }}
          </p>
          <p class="text-lg text-gray-300 leading-relaxed mb-4">
            {{ $t("about.description2") }}
          </p>
          <p class="text-lg text-gray-300 leading-relaxed mb-4">
            <strong
              class="bg-clip-text text-transparent bg-gradient-gold-light"
              >{{ $t("about.mainValue") }}</strong
            >
          </p>
          <p class="text-lg text-gray-300 leading-relaxed mb-4">
            {{ $t("about.description3") }}
          </p>
          <p class="text-lg text-gray-300 leading-relaxed mb-4">
            {{ $t("about.description4") }}
          </p>
          <p class="text-lg text-gray-300 leading-relaxed">
            <strong class="bg-clip-text text-transparent bg-gradient-gold-light"
              >Telecom Awards Tajikistan 2025</strong
            >
            {{ $t("about.description5") }}
          </p>
        </div>

        <!-- Two Column Layout -->
        <div class="grid md:grid-cols-2 gap-6">
          <!-- Organizer Block -->
          <div
            class="bg-black/40 backdrop-blur-sm rounded-3xl p-5 sm:p-8 border border-gold-800/40"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div class="flex items-center mb-4">
              <div
                class="w-12 h-12 min-w-12 min-h-12 rounded-full bg-gradient-gold flex items-center justify-center mr-4"
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
                class="text-xl font-bold bg-clip-text text-transparent bg-gradient-gold-light"
              >
                {{ $t("about.organizer.title") }}
              </h3>
            </div>
            <p class="text-gray-300 leading-relaxed">
              {{ $t("about.organizer.description1") }}
              <strong class="text-white">{{
                $t("about.organizer.organization")
              }}</strong>
              {{ $t("about.organizer.description2") }}
            </p>
          </div>

          <!-- Participants Block -->
          <div
            class="bg-black/40 backdrop-blur-sm rounded-3xl p-5 sm:p-8 border border-gold-800/40"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div class="flex items-center mb-4">
              <div
                class="w-12 h-12 min-w-12 min-h-12 rounded-full bg-gradient-gold flex items-center justify-center mr-4"
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
                class="text-xl font-bold bg-clip-text text-transparent bg-gradient-gold-light"
              >
                {{ $t("about.participants.title") }}
              </h3>
            </div>
            <p class="text-gray-300 leading-relaxed">
              {{ $t("about.participants.description") }}
            </p>
          </div>
        </div>

        <!-- Goals Block -->
        <div
          class="bg-black/40 backdrop-blur-sm rounded-3xl p-5 sm:p-8 md:p-12 border border-gold-800/40"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div class="flex items-center mb-6">
            <div
              class="w-12 h-12 min-w-12 min-h-12 rounded-full bg-gradient-gold flex items-center justify-center mr-4"
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
              {{ $t("about.goals.title") }}
            </h3>
          </div>

          <div class="space-y-6">
            <div>
              <h4
                class="text-xl font-semibold bg-clip-text text-transparent bg-gradient-gold-light mb-3"
              >
                {{ $t("about.goals.goal1.title") }}
              </h4>
              <p class="text-gray-300 leading-relaxed">
                {{ $t("about.goals.goal1.description") }}
              </p>
            </div>

            <div>
              <h4
                class="text-xl font-semibold bg-clip-text text-transparent bg-gradient-gold-light mb-3"
              >
                {{ $t("about.goals.goal2.title") }}
              </h4>
              <p class="text-gray-300 leading-relaxed">
                {{ $t("about.goals.goal2.description") }}
              </p>
            </div>

            <div>
              <h4
                class="text-xl font-semibold bg-clip-text text-transparent bg-gradient-gold-light mb-3"
              >
                {{ $t("about.goals.goal3.title") }}
              </h4>
              <p class="text-gray-300 leading-relaxed">
                {{ $t("about.goals.goal3.description") }}
              </p>
            </div>

            <div>
              <h4
                class="text-xl font-semibold bg-clip-text text-transparent bg-gradient-gold-light mb-3"
              >
                {{ $t("about.goals.goal4.title") }}
              </h4>
              <p class="text-gray-300 leading-relaxed">
                {{ $t("about.goals.goal4.description") }}
              </p>
            </div>

            <div>
              <h4
                class="text-xl font-semibold bg-clip-text text-transparent bg-gradient-gold-light mb-3"
              >
                {{ $t("about.goals.goal5.title") }}
              </h4>
              <p class="text-gray-300 leading-relaxed">
                {{ $t("about.goals.goal5.description") }}
              </p>
            </div>

            <div>
              <h4
                class="text-xl font-semibold bg-clip-text text-transparent bg-gradient-gold-light mb-3"
              >
                {{ $t("about.goals.goal6.title") }}
              </h4>
              <p class="text-gray-300 leading-relaxed">
                {{ $t("about.goals.goal6.description") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>
