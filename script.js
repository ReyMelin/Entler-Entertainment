// Fade in hero section on load
window.addEventListener("load", () => {
  const heroText = document.querySelector(".hero-content");
  heroText.classList.add("visible");
  // Add floating animation to hero-content
  let floatDirection = 1;
  let floatOffset = 0;
  function animateFloat() {
    floatOffset += 0.3 * floatDirection;
    if (floatOffset > 12 || floatOffset < -12) floatDirection *= -1;
    heroText.style.transform = `translateY(${floatOffset}px)`;
    requestAnimationFrame(animateFloat);
  }
  animateFloat();

  // Fade font color from dark to light ONLY for header h1
  let colorStep = 0;
  const headerText = document.querySelector("header h1");
  const startColor = [34, 34, 34]; // #222
  const endColor = [255, 255, 255]; // #fff
  function lerp(a, b, t) {
    return a + (b - a) * t;
  }
  function animateColor() {
    colorStep += 0.02;
    if (colorStep > 1) colorStep = 1;
    const r = Math.round(lerp(startColor[0], endColor[0], colorStep));
    const g = Math.round(lerp(startColor[1], endColor[1], colorStep));
    const b = Math.round(lerp(startColor[2], endColor[2], colorStep));
    headerText.style.color = `rgb(${r},${g},${b})`;
    if (colorStep < 1) requestAnimationFrame(animateColor);
  }
  animateColor();
});
// Note: This file is linked in index.html for potential future JavaScript functionality.