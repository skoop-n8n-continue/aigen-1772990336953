// Subtle pulsing glow on the "World!" text to keep the signage lively
const world = document.querySelector('.world');

let pulse = 0;
function animatePulse() {
  pulse += 0.02;
  const glow = 0.5 + Math.sin(pulse) * 0.5; // 0 to 1
  world.style.textShadow = `0 0 ${40 + glow * 30}px rgba(0, 183, 175, ${0.3 + glow * 0.3})`;
  requestAnimationFrame(animatePulse);
}

animatePulse();
