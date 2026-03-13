import { useEffect, useRef } from "react";

const AnimatedGridBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      time += 0.005;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gridSize = 60;
      const cols = Math.ceil(canvas.width / gridSize) + 1;
      const rows = Math.ceil(canvas.height / gridSize) + 1;

      // Grid lines
      ctx.strokeStyle = "rgba(14, 165, 233, 0.04)";
      ctx.lineWidth = 1;
      for (let i = 0; i < cols; i++) {
        ctx.beginPath();
        ctx.moveTo(i * gridSize, 0);
        ctx.lineTo(i * gridSize, canvas.height);
        ctx.stroke();
      }
      for (let j = 0; j < rows; j++) {
        ctx.beginPath();
        ctx.moveTo(0, j * gridSize);
        ctx.lineTo(canvas.width, j * gridSize);
        ctx.stroke();
      }

      // Glowing dots at intersections
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const pulse = Math.sin(time + i * 0.3 + j * 0.5) * 0.5 + 0.5;
          const alpha = 0.02 + pulse * 0.06;
          ctx.fillStyle = `rgba(14, 165, 233, ${alpha})`;
          ctx.beginPath();
          ctx.arc(i * gridSize, j * gridSize, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Floating particles
      for (let i = 0; i < 30; i++) {
        const x = ((Math.sin(time * 0.3 + i * 2.1) + 1) / 2) * canvas.width;
        const y = ((Math.cos(time * 0.2 + i * 1.7) + 1) / 2) * canvas.height;
        const alpha = Math.sin(time + i) * 0.15 + 0.15;
        ctx.fillStyle = `rgba(14, 165, 233, ${alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default AnimatedGridBackground;
