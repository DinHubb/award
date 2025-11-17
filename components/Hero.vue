<template>
  <section
    id="home"
    class="hero-section relative h-screen flex flex-col max-sm:pt-20 pt-16 lg:overflow-hidden"
  >
    <!-- Background Overlay in mobile resolution -->
    <div class="absolute inset-0 bg-black/60 lg:hidden"></div>
    <!-- Particles animation -->
    <ParticlesBackground />

    <div
      class="app-container flex-1 flex flex-col items-center justify-center relative z-10"
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
          {{ $t("hero.description") }}
        </p>

        <!-- CTA Button -->
        <button
          class="flex justify-center mt-8"
          data-aos="fade-down"
          data-aos-delay="400"
          type="button"
        >
          <a
            href="/vote"
            class="inline-flex items-center justify-center px-8 py-3 rounded-full border-gradient-gold text-2xl uppercase font-bold hover:scale-105 hover:shadow-xl hover:shadow-gold-500/30 transition-all duration-300"
          >
            <span class="bg-clip-text text-transparent bg-gradient-gold-light">
              {{ $t("hero.voteButton") }}
            </span>
          </a>
        </button>
      </div>
    </div>
    <Clients class="py-10" />
  </section>
</template>

<style scoped>
.hero-section {
  background-image: url("/images/hero-bg-left.png"),
    url("/images/hero-bg-right.png");
  background-position: left -10rem top 0, right -10rem top 0;
  background-repeat: no-repeat, no-repeat;
  background-size: contain;
}
</style>
