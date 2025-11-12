import { onMounted, onUnmounted, nextTick, type Ref } from 'vue';

export function useHighlighter(containerRef: Ref<HTMLElement | null>) {
  let mouse = {
    x: 0,
    y: 0,
  };

  let containerSize = {
    w: 0,
    h: 0,
  };

  let boxes: HTMLElement[] = [];

  const initContainer = () => {
    if (!containerRef.value) return;
    containerSize.w = containerRef.value.offsetWidth;
    containerSize.h = containerRef.value.offsetHeight;
    boxes = Array.from(containerRef.value.children) as HTMLElement[];
    console.log('Highlighter initialized:', { containerSize, boxesCount: boxes.length });
  };

  const onMouseMove = (event: MouseEvent) => {
    if (!containerRef.value || boxes.length === 0) return;

    const { clientX, clientY } = event;
    const rect = containerRef.value.getBoundingClientRect();
    const { w, h } = containerSize;
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const inside = x < w && x > 0 && y < h && y > 0;

    if (inside) {
      mouse.x = x;
      mouse.y = y;
      boxes.forEach((box) => {
        const boxX =
          -(box.getBoundingClientRect().left - rect.left) + mouse.x;
        const boxY = -(box.getBoundingClientRect().top - rect.top) + mouse.y;
        box.style.setProperty('--mouse-x', `${boxX}px`);
        box.style.setProperty('--mouse-y', `${boxY}px`);
      });
    }
  };

  onMounted(async () => {
    await nextTick();
    // Небольшая задержка для гарантии, что все элементы отрисованы (включая AOS)
    setTimeout(() => {
      initContainer();
      window.addEventListener('resize', initContainer);
      window.addEventListener('mousemove', onMouseMove);
    }, 100);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', initContainer);
    window.removeEventListener('mousemove', onMouseMove);
  });

  return {
    initContainer,
  };
}
