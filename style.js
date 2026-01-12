
    // مدة العداد بالدقائق (3 أيام = 3 * 24 * 60 = 4320 دقيقة)
    const countdownDurationMinutes = 4320;

    // نبدأ من الوقت الحالي
    let startTime = new Date().getTime();

    function updateCountdown() {
      const now = new Date().getTime();

      // الزمن المنقضي منذ البداية (بالملي ثانية)
      let elapsed = now - startTime;

      // إذا الوقت تعدى مدة العداد (3 أيام)، نعيد ضبط البداية
      if (elapsed >= countdownDurationMinutes * 60 * 1000) {
        startTime = now;
        elapsed = 0;
      }

      // الزمن المتبقي
      const remaining = countdownDurationMinutes * 60 * 1000 - elapsed;

      const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

      document.getElementById("days").textContent = days.toString().padStart(2, "0");
      document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
      document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
      document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

   
  document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    menuToggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        navLinks.classList.toggle('active');
      }
    });
  });

  
  