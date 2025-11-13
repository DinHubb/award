<template>
  <section
    class="hero-section h-screen relative max-sm:pt-20 py-16 flex flex-col lg:overflow-hidden"
  >
    <!-- Background Overlay in mobile resolution -->
    <div class="absolute inset-0 bg-black/60 lg:hidden"></div>

    <div
      class="app-container max-sm:mb-40 sm:flex-1 flex items-center justify-center"
    >
      <!-- Hero content -->
      <div class="flex flex-col items-center justify-center text-center z-10">
        <!-- Main heading -->
        <h2
          class="text-6xl md:text-8xl bg-clip-text text-transparent font-bold inline-flex relative mb-4 bg-gradient-gold"
        >
          2025
        </h2>
        <h1
          class="bg-clip-text text-transparent text-4xl md:text-[3.5rem] leading-tight md:leading-none tracking-[-0.017em] font-extrabold pb-4 bg-gradient-gold"
          data-aos="fade-down"
        >
          Telecom <span class="">Awards</span> Tajikistan
        </h1>

        <!-- Description -->
        <p
          class="md:px-14 text-lg md:text-xl mb-8 max-w-3xl bg-clip-text text-transparent bg-gradient-gold"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Первая народная премия, где жители Таджикистана выбирают лучших
          операторов и интернет-провайдеров
        </p>

        <!-- CTA Button -->
        <div
          class="flex justify-center mt-8"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <NuxtLink
            to="/vote"
            class="inline-flex items-center justify-center px-8 py-3 rounded-lg text-black font-medium bg-gradient-gold hover:opacity-90 transition-opacity text-lg"
          >
            Голосовать
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5 ml-2"
            >
              <path
                fill-rule="evenodd"
                d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                clip-rule="evenodd"
              />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
    <Clients class="py-10" />
  </section>
</template>

<style scoped>
.hero-section {
  background-image: url("/images/white-background-abstract-with-wavy-line-gold-left.png"),
    url("/images/white-background-abstract-with-wavy-line-gold-right.png");
  background-position: left -10rem top 0, right -10rem top 0;
  background-repeat: no-repeat, no-repeat;
  background-size: contain;
}
</style>
