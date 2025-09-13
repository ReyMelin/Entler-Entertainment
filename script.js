// Fade in hero section on load
window.addEventListener("load", () => {
  const headerH1 = document.querySelector("header h1");
  headerH1.classList.add("visible");

  // Start lava lamp on the body
  startLavaLamp(document.body);
});

// Lava lamp effect across the whole page
function startLavaLamp(container) {
  const colors = [
    "rgba(0, 200, 255, 0.3)",  // blue
    "rgba(150, 0, 255, 0.3)"   // purple
  ];

  const canvas = document.createElement("canvas");
  container.appendChild(canvas);
  canvas.style.position = "fixed"; /* covers viewport */
  canvas.style.top = 0;
  canvas.style.left = 0;
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.zIndex = -1; /* stay behind content */

  const ctx = canvas.getContext("2d");
  let width, height;
  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  // Blobs setup
  const blobs = Array.from({ length: 8 }, (_, i) => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: 120 + Math.random() * 150,
    dx: (Math.random() - 0.5) * 2,
    dy: (Math.random() - 0.5) * 2,
    color: colors[i % colors.length]
  }));

  function animate() {
    ctx.clearRect(0, 0, width, height);
    blobs.forEach(b => {
      b.x += b.dx;
      b.y += b.dy;

      if (b.x < 0 || b.x > width) b.dx *= -1;
      if (b.y < 0 || b.y > height) b.dy *= -1;

      const gradient = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
      gradient.addColorStop(0, b.color);
      gradient.addColorStop(1, "transparent");

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(animate);
  }
  animate();
}
