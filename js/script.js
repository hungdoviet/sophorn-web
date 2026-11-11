/**
 * Sophorn - Under Construction Script
 * Author: MelLink
 */

document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  initParticleBackground();
  initNotificationForm();
  initDynamicYear();
});

/* ==========================================================================
   1. Dynamic Countdown Timer
   ========================================================================== */
function initCountdown() {
  // Target Launch Date: 14 days from now by default, or set your own custom ISO date
  // e.g. const targetDate = new Date('2026-12-31T00:00:00');
  const storedLaunch = localStorage.getItem('sophorn_target_launch');
  let targetDate;

  if (storedLaunch && !isNaN(Date.parse(storedLaunch))) {
    targetDate = new Date(storedLaunch);
  } else {
    targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 18);
    targetDate.setHours(targetDate.getHours() + 6);
    localStorage.setItem('sophorn_target_launch', targetDate.toISOString());
  }

  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance <= 0) {
      if (daysEl) daysEl.textContent = '00';
      if (hoursEl) hoursEl.textContent = '00';
      if (minutesEl) minutesEl.textContent = '00';
      if (secondsEl) secondsEl.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

/* ==========================================================================
   2. Canvas Particle Background
   ========================================================================== */
function initParticleBackground() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const particles = [];
  const particleCount = Math.min(Math.floor((width * height) / 18000), 65);

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.radius = Math.random() * 1.8 + 0.6;
      this.vx = (Math.random() - 0.5) * 0.35;
      this.vy = (Math.random() - 0.5) * 0.35;
      this.alpha = Math.random() * 0.5 + 0.2;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(168, 195, 255, ${this.alpha})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      // Connect nearby particles with subtle faint lines
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          const opacity = (1 - dist / 110) * 0.12;
          ctx.strokeStyle = `rgba(129, 140, 248, ${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(render);
  }

  render();

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });
}

/* ==========================================================================
   3. Notification Form Handler
   ========================================================================== */
function initNotificationForm() {
  const form = document.getElementById('notify-form');
  const emailInput = document.getElementById('email-input');
  const feedback = document.getElementById('form-feedback');

  if (!form || !emailInput || !feedback) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (!validateEmail(email)) {
      showFeedback('Please enter a valid email address.', 'error');
      return;
    }

    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;

    // Loading State
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.75';
    submitBtn.innerHTML = '<span>Saving...</span>';

    setTimeout(() => {
      // Success State
      submitBtn.disabled = false;
      submitBtn.style.opacity = '1';
      submitBtn.innerHTML = originalText;
      emailInput.value = '';

      showFeedback('🎉 You are on the VIP launch notification list! We will notify you soon.', 'success');
    }, 800);
  });

  function showFeedback(message, type) {
    feedback.textContent = message;
    feedback.className = `form-feedback ${type}`;

    setTimeout(() => {
      if (type === 'success') {
        feedback.textContent = '';
        feedback.className = 'form-feedback';
      }
    }, 6000);
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}

/* ==========================================================================
   4. Dynamic Year
   ========================================================================== */
function initDynamicYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

