export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    const router = useRouter();

    // Переинициализация AOS после каждой навигации
    router.afterEach(() => {
      // Небольшая задержка для завершения рендеринга страницы
      setTimeout(() => {
        if (window.AOS) {
          window.AOS.refresh();
        }
      }, 100);
    });

    // Переинициализация при изменении размера окна
    window.addEventListener('resize', () => {
      if (window.AOS) {
        window.AOS.refresh();
      }
    });
  }
});
