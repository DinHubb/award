<template>
  <section class="relative">
    <!-- Particles animation -->
    <div
      class="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2"
      aria-hidden="true"
    >
      <canvas
        ref="particleCanvas"
        data-particle-animation=""
        data-particle-quantity="6"
      ></canvas>
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-16 pb-12 md:pt-32 md:pb-20">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2
            class="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 pb-4"
            data-aos="fade-down"
          >
            Faster. Smarter.
          </h2>
          <p class="text-lg text-gray-400" data-aos="fade-down">
            There are many variations available, but the majority have suffered
            alteration in some form, by injected humour, or randomised words
            which don't look even slightly believable.
          </p>
        </div>

        <!-- Highlighted boxes -->
        <div class="relative pb-12 md:pb-20">
          <!-- Blurred shape -->
          <div
            aria-hidden="true"
            class="pointer-events-none absolute left-1/2 -translate-x-1/2 blur-2xl -z-10"
          >
            <svg height="427" width="434" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient
                  id="bs2-a"
                  x1="19.609%"
                  x2="50%"
                  y1="14.544%"
                  y2="100%"
                >
                  <stop offset="0%" stop-color="#6366F1"></stop>
                  <stop offset="100%" stop-color="#6366F1" stop-opacity="0"></stop>
                </linearGradient>
              </defs>
              <path
                d="m346 898 461 369-284 58z"
                fill="url(#bs2-a)"
                fill-rule="evenodd"
                transform="translate(-346 -898)"
              ></path>
            </svg>
          </div>

          <!-- Grid -->
          <div class="grid md:grid-cols-3 gap-8 md:gap-12">
            <!-- Box #1 -->
            <div class="md:col-span-3" data-aos="fade-down">
              <div
                class="flex flex-col h-full p-6 bg-gradient-to-br from-gray-900/50 to-gray-900/30 rounded-3xl border border-gray-800 shadow-2xl overflow-hidden relative"
              >
                <div class="flex flex-col md:flex-row gap-8 relative">
                  <div class="flex-1 flex flex-col justify-center relative">
                    <!-- Blurred shape -->
                    <div
                      aria-hidden="true"
                      class="absolute blur-2xl opacity-70 pointer-events-none"
                    >
                      <svg
                        height="393"
                        width="342"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <linearGradient
                            id="bs-a"
                            x1="19.609%"
                            x2="50%"
                            y1="14.544%"
                            y2="100%"
                          >
                            <stop offset="0%" stop-color="#6366F1"></stop>
                            <stop
                              offset="100%"
                              stop-color="#6366F1"
                              stop-opacity="0"
                            ></stop>
                          </linearGradient>
                        </defs>
                        <path
                          d="m104 .827 461 369-284 58z"
                          fill="url(#bs-a)"
                          fill-rule="evenodd"
                          opacity=".7"
                          transform="translate(0 -112.827)"
                        ></path>
                      </svg>
                    </div>

                    <!-- Radial gradient -->
                    <div
                      aria-hidden="true"
                      class="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
                    >
                      <div
                        class="w-64 h-64 rounded-full bg-purple-500/30 blur-3xl absolute"
                      ></div>
                      <div
                        class="w-96 h-96 rounded-full bg-purple-600/10 blur-3xl absolute"
                      ></div>
                    </div>

                    <!-- Text -->
                    <div class="mb-6 relative z-10">
                      <div class="mb-3">
                        <div>
                          <h3
                            class="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 mb-2"
                          >
                            Optimized for security
                          </h3>
                          <p class="text-gray-400">
                            Optimize for user experience and privacy. Use social
                            login integrations, lower user friction, incorporate
                            rich user profiling, and facilitate more transactions.
                          </p>
                        </div>
                      </div>
                      <div>
                        <a
                          class="inline-flex items-center font-medium text-gold-500 hover:text-gold-400 transition-colors"
                          href="#0"
                        >
                          <span class="relative inline-flex">
                            Learn more
                            <span
                              class="ml-2 text-sm opacity-70 group-hover:translate-x-1 transition-transform"
                            >
                              -&gt;
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>

                    <!-- Image -->
                    <div class="flex justify-center relative mt-auto">
                      <img
                        alt="Feature 01"
                        class="w-full max-w-lg absolute bottom-0"
                        height="400"
                        src="/images/feature-image-01.png"
                        width="504"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Box #2 -->
            <div class="md:col-span-1" data-aos="fade-down">
              <div
                class="flex flex-col h-full p-6 bg-gradient-to-br from-gray-900/50 to-gray-900/30 rounded-3xl border border-gray-800 shadow-2xl overflow-hidden relative"
              >
                <div class="flex flex-col gap-4 relative">
                  <div class="relative">
                    <!-- Radial gradient -->
                    <div
                      aria-hidden="true"
                      class="pointer-events-none absolute left-1/2 -translate-x-1/2 -z-10 opacity-70"
                    >
                      <div
                        class="w-56 h-56 rounded-full bg-purple-500/20 blur-3xl"
                      ></div>
                    </div>

                    <!-- Text -->
                    <div class="mb-6 relative z-10">
                      <div>
                        <h3
                          class="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 mb-2"
                        >
                          Extensibility
                        </h3>
                        <p class="text-gray-400 text-sm">
                          Your login box must find the right balance between user
                          convenience, privacy and security.
                        </p>
                      </div>
                    </div>

                    <!-- Image -->
                    <div class="flex justify-center relative mt-auto">
                      <img
                        alt="Feature 02"
                        class="w-full"
                        height="230"
                        src="/images/feature-image-02.png"
                        width="536"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Box #3 -->
            <div class="md:col-span-2" data-aos="fade-down">
              <div
                class="flex flex-col h-full p-6 bg-gradient-to-br from-gray-900/50 to-gray-900/30 rounded-3xl border border-gray-800 shadow-2xl overflow-hidden relative"
              >
                <div class="flex flex-col gap-4 relative">
                  <div class="relative">
                    <!-- Radial gradient -->
                    <div
                      aria-hidden="true"
                      class="pointer-events-none absolute left-1/2 -translate-x-1/2 -z-10 opacity-70"
                    >
                      <div
                        class="w-56 h-56 rounded-full bg-purple-500/20 blur-3xl"
                      ></div>
                    </div>

                    <!-- Text -->
                    <div class="mb-6 relative z-10">
                      <div>
                        <h3
                          class="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 mb-2"
                        >
                          Infinite options
                        </h3>
                        <p class="text-gray-400 text-sm">
                          Quickly apply filters to refine your issues lists and
                          create custom views.
                        </p>
                      </div>
                    </div>

                    <!-- Image -->
                    <div class="flex justify-center relative mt-auto">
                      <img
                        alt="Feature 03"
                        class="w-full max-w-xs"
                        height="230"
                        src="/images/feature-image-03.png"
                        width="230"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Features list -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          <!-- Feature -->
          <div>
            <div class="relative inline-flex items-center gap-3 mb-3">
              <svg
                class="fill-gold-400"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.999 2.34a4.733 4.733 0 0 0-6.604 6.778l5.904 5.762a1 1 0 0 0 1.4 0l5.915-5.77a4.733 4.733 0 0 0-6.615-6.77Zm5.208 5.348-5.208 5.079-5.2-5.07a2.734 2.734 0 0 1 3.867-3.864c.182.19.335.404.455.638a1.04 1.04 0 0 0 1.756 0 2.724 2.724 0 0 1 5.122 1.294 2.7 2.7 0 0 1-.792 1.923Z"
                ></path>
              </svg>
              <h4 class="font-semibold text-gray-200">Filters</h4>
            </div>
            <p class="text-gray-400 text-sm">
              Login box must find the right balance for the user convenience,
              privacy and security.
            </p>
          </div>

          <!-- Feature -->
          <div>
            <div class="relative inline-flex items-center gap-3 mb-3">
              <svg
                class="fill-gold-400"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 0c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5 0 1.3-.5 2.6-1.4 3.5l-1.2 1.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.1-1.2c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.2C12 1.7 10 1.7 8.9 2.8L7.7 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.2-1.1C8.4.5 9.7 0 11 0ZM8.3 12c.4-.4 1-.5 1.4-.1.4.4.4 1 0 1.4l-1.2 1.2C7.6 15.5 6.3 16 5 16c-1.3 0-2.6-.5-3.5-1.5C.5 13.6 0 12.3 0 11c0-1.3.5-2.6 1.5-3.5l1.1-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.9 8.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.2c1.1 1.1 3.1 1.1 4.2 0L8.3 12Zm1.1-6.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.2-4.2Z"
                ></path>
              </svg>
              <h4 class="font-semibold text-gray-200">Configurable</h4>
            </div>
            <p class="text-gray-400 text-sm">
              Login box must find the right balance for the user convenience,
              privacy and security.
            </p>
          </div>

          <!-- Feature -->
          <div>
            <div class="relative inline-flex items-center gap-3 mb-3">
              <svg
                class="fill-gold-400"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-8 8c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l8-8ZM15 7c.6 0 1 .4 1 1 0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8c.6 0 1 .4 1 1s-.4 1-1 1C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6c0-.6.4-1 1-1Z"
                ></path>
              </svg>
              <h4 class="font-semibold text-gray-200">Authorization</h4>
            </div>
            <p class="text-gray-400 text-sm">
              Login box must find the right balance for the user convenience,
              privacy and security.
            </p>
          </div>

          <!-- Feature -->
          <div>
            <div class="relative inline-flex items-center gap-3 mb-3">
              <svg
                class="fill-gold-400"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12Zm0 14V2H2v12h12Zm-3-7H5a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2Zm0 4H5a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Z"
                ></path>
              </svg>
              <h4 class="font-semibold text-gray-200">Management</h4>
            </div>
            <p class="text-gray-400 text-sm">
              Login box must find the right balance for the user convenience,
              privacy and security.
            </p>
          </div>

          <!-- Feature -->
          <div>
            <div class="relative inline-flex items-center gap-3 mb-3">
              <svg
                class="fill-gold-400"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.574 5.67a13.292 13.292 0 0 1 1.298 1.842 1 1 0 0 1 0 .98C15.743 8.716 12.706 14 8 14a6.391 6.391 0 0 1-1.557-.2l1.815-1.815C10.97 11.82 13.06 9.13 13.82 8c-.163-.243-.39-.56-.669-.907l1.424-1.424ZM.294 15.706a.999.999 0 0 1-.002-1.413l2.53-2.529C1.171 10.291.197 8.615.127 8.49a.998.998 0 0 1-.002-.975C.251 7.29 3.246 2 8 2c1.331 0 2.515.431 3.548 1.038L14.293.293a.999.999 0 1 1 1.414 1.414l-14 14a.997.997 0 0 1-1.414 0ZM2.18 8a12.603 12.603 0 0 0 2.06 2.347l1.833-1.834A1.925 1.925 0 0 1 6 8a2 2 0 0 1 2-2c.178 0 .348.03.512.074l1.566-1.566C9.438 4.201 8.742 4 8 4 5.146 4 2.958 6.835 2.181 8Z"
                ></path>
              </svg>
              <h4 class="font-semibold text-gray-200">Building</h4>
            </div>
            <p class="text-gray-400 text-sm">
              Login box must find the right balance for the user convenience,
              privacy and security.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const particleCanvas = ref<HTMLCanvasElement | null>(null);
const { initParticleAnimation } = useParticles();

onMounted(() => {
  if (particleCanvas.value) {
    const quantity = Number(
      particleCanvas.value.dataset.particleQuantity || 6
    );
    initParticleAnimation(particleCanvas.value, { quantity, staticity: 30 });
  }
});
</script>
