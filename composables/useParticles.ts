export const useParticles = () => {
  const initParticleAnimation = (
    el: HTMLCanvasElement,
    { quantity = 30, staticity = 50, ease = 50 } = {}
  ) => {
    if (!el) return null;

    const canvasContainer = el.parentElement;
    if (!canvasContainer) return null;

    const context = el.getContext("2d");
    if (!context) return null;

    const dpr = window.devicePixelRatio || 1;
    const settings = {
      quantity,
      staticity,
      ease,
    };

    const circles: any[] = [];
    const mouse = { x: 0, y: 0 };
    const canvasSize = { w: 0, h: 0 };

    const circleParams = () => {
      const x = Math.floor(Math.random() * canvasSize.w);
      const y = Math.floor(Math.random() * canvasSize.h);
      const translateX = 0;
      const translateY = 0;
      const size = Math.floor(Math.random() * 2) + 1;
      const alpha = 0;
      const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
      const dx = (Math.random() - 0.5) * 0.2;
      const dy = (Math.random() - 0.5) * 0.2;
      const magnetism = 0.1 + Math.random() * 4;
      return {
        x,
        y,
        translateX,
        translateY,
        size,
        alpha,
        targetAlpha,
        dx,
        dy,
        magnetism,
      };
    };

    const drawCircle = (circle: any, update = false) => {
      const { x, y, translateX, translateY, size, alpha } = circle;
      context.translate(translateX, translateY);
      context.beginPath();
      context.arc(x, y, size, 0, 2 * Math.PI);
      context.fillStyle = `rgba(249, 230, 165, ${alpha})`; // gold-light
      context.fill();
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!update) {
        circles.push(circle);
      }
    };

    const clearContext = () => {
      context.clearRect(0, 0, canvasSize.w, canvasSize.h);
    };

    const drawParticles = () => {
      clearContext();
      const particleCount = settings.quantity;
      for (let i = 0; i < particleCount; i++) {
        const circle = circleParams();
        drawCircle(circle);
      }
    };

    const remapValue = (
      value: number,
      start1: number,
      end1: number,
      start2: number,
      end2: number
    ) => {
      const remapped =
        ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
      return remapped > 0 ? remapped : 0;
    };

    const animate = () => {
      clearContext();
      circles.forEach((circle, i) => {
        const edge = [
          circle.x + circle.translateX - circle.size,
          canvasSize.w - circle.x - circle.translateX - circle.size,
          circle.y + circle.translateY - circle.size,
          canvasSize.h - circle.y - circle.translateY - circle.size,
        ];
        const closestEdge = edge.reduce((a, b) => Math.min(a, b));
        const remapClosestEdge = parseFloat(
          remapValue(closestEdge, 0, 20, 0, 1).toFixed(2)
        );
        if (remapClosestEdge > 1) {
          circle.alpha += 0.02;
          if (circle.alpha > circle.targetAlpha)
            circle.alpha = circle.targetAlpha;
        } else {
          circle.alpha = circle.targetAlpha * remapClosestEdge;
        }
        circle.x += circle.dx;
        circle.y += circle.dy;
        circle.translateX +=
          (mouse.x / (settings.staticity / circle.magnetism) -
            circle.translateX) /
          settings.ease;
        circle.translateY +=
          (mouse.y / (settings.staticity / circle.magnetism) -
            circle.translateY) /
          settings.ease;

        if (
          circle.x < -circle.size ||
          circle.x > canvasSize.w + circle.size ||
          circle.y < -circle.size ||
          circle.y > canvasSize.h + circle.size
        ) {
          circles.splice(i, 1);
          const newCircle = circleParams();
          drawCircle(newCircle);
        } else {
          drawCircle(
            {
              ...circle,
              x: circle.x,
              y: circle.y,
              translateX: circle.translateX,
              translateY: circle.translateY,
              alpha: circle.alpha,
            },
            true
          );
        }
      });
      requestAnimationFrame(animate);
    };

    const resizeCanvas = () => {
      circles.length = 0;
      canvasSize.w = canvasContainer.offsetWidth;
      canvasSize.h = canvasContainer.offsetHeight;
      el.width = canvasSize.w * dpr;
      el.height = canvasSize.h * dpr;
      el.style.width = canvasSize.w + "px";
      el.style.height = canvasSize.h + "px";
      context.scale(dpr, dpr);
    };

    const onMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const rect = el.getBoundingClientRect();
      const { w, h } = canvasSize;
      const x = clientX - rect.left - w / 2;
      const y = clientY - rect.top - h / 2;
      const inside = x < w / 2 && x > -(w / 2) && y < h / 2 && y > -(h / 2);
      if (inside) {
        mouse.x = x;
        mouse.y = y;
      }
    };

    const initCanvas = () => {
      resizeCanvas();
      drawParticles();
    };

    initCanvas();
    animate();
    window.addEventListener("resize", initCanvas);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("resize", initCanvas);
      window.removeEventListener("mousemove", onMouseMove);
    };
  };

  return {
    initParticleAnimation,
  };
};
