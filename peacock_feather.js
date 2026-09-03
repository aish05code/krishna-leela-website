/**
 * Continuous Guiding Peacock Feather Animation
 * Smoothly floats through the viewport, swaying gently with stardust trail,
 * guiding the devotee through Krishna's Leelas.
 */
(function() {
  function initPeacockFeather() {
    let container = document.querySelector('.guiding-feather-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'guiding-feather-container';
      document.body.appendChild(container);
    }

    const feather = document.createElement('div');
    feather.className = 'floating-peacock-feather';
    feather.innerHTML = `
      <svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%;">
        <!-- Feather Quill Stem -->
        <path d="M30 95 Q32 55 30 10" stroke="#f6c867" stroke-width="1.6" stroke-linecap="round" />
        <!-- Soft Outer Vanes -->
        <path d="M30 10 C16 26, 12 48, 30 75 C48 48, 44 26, 30 10 Z" fill="rgba(16, 185, 129, 0.22)" stroke="#10b981" stroke-width="1" />
        <!-- Outer Eye Rim (Emerald) -->
        <ellipse cx="30" cy="35" rx="14" ry="19" fill="#065f46" stroke="#f6c867" stroke-width="1.4" />
        <!-- Middle Eye Rim (Royal / Peacock Blue) -->
        <ellipse cx="30" cy="37" rx="9" ry="12" fill="#1e3a8a" stroke="#38bdf8" stroke-width="1.2" />
        <!-- Deep Bronze / Indigo Heart -->
        <ellipse cx="30" cy="39" rx="5.5" ry="7.5" fill="#312e81" />
        <!-- Radiant Golden Core -->
        <circle cx="30" cy="40" r="3.2" fill="#fbbf24" filter="drop-shadow(0 0 4px #f59e0b)" />
        <!-- Delicate Side Barbs -->
        <path d="M22 55 Q12 60 8 68" stroke="#34d399" stroke-width="0.8" opacity="0.7"/>
        <path d="M38 55 Q48 60 52 68" stroke="#34d399" stroke-width="0.8" opacity="0.7"/>
        <path d="M20 42 Q10 44 6 50" stroke="#60a5fa" stroke-width="0.8" opacity="0.7"/>
        <path d="M40 42 Q50 44 54 50" stroke="#60a5fa" stroke-width="0.8" opacity="0.7"/>
      </svg>
    `;
    container.appendChild(feather);

    // Initial position based on scroll or center-top
    let posX = window.innerWidth * 0.75;
    let posY = 120;
    let targetX = posX;
    let targetY = posY;
    let angle = 12;
    let time = 0;
    let trailCounter = 0;

    // React to user scrolling - feather gracefully glides downward
    window.addEventListener('scroll', () => {
      const scrollRatio = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight || 1);
      targetY = 80 + scrollRatio * (window.innerHeight - 200);
      targetX = (window.innerWidth * 0.5) + Math.sin(scrollRatio * Math.PI * 4) * (window.innerWidth * 0.35);
    }, { passive: true });

    function animate() {
      time += 0.015;

      // Gentle serpentine drift
      const naturalDriftX = Math.sin(time * 0.8) * 45 + Math.cos(time * 0.4) * 25;
      const naturalDriftY = Math.cos(time * 0.6) * 30 + Math.sin(time * 1.2) * 15;
      const swayAngle = Math.sin(time * 1.1) * 16 + Math.cos(time * 0.5) * 8;

      posX += (targetX + naturalDriftX - posX) * 0.035;
      posY += (targetY + naturalDriftY - posY) * 0.035;
      angle += (swayAngle - angle) * 0.05;

      feather.style.transform = `translate3d(${posX}px, ${posY}px, 0) rotate(${angle}deg)`;

      // Sparkle stardust trail
      trailCounter++;
      if (trailCounter % 14 === 0) {
        const sparkle = document.createElement('div');
        sparkle.className = 'feather-sparkle-trail';
        sparkle.style.left = (posX + 24 + (Math.random() - 0.5) * 10) + 'px';
        sparkle.style.top = (posY + 45 + (Math.random() - 0.5) * 10) + 'px';
        container.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 1600);
      }

      requestAnimationFrame(animate);
    }

    animate();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPeacockFeather);
  } else {
    initPeacockFeather();
  }
})();
