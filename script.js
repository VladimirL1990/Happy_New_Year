document.addEventListener('DOMContentLoaded', () => {
  const confettiColors = ['#ff7eb3', '#ff758c', '#ff9b9b', '#ffc5b3'];

  function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
    confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }

  function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = Math.random() * window.innerHeight + 'px';
    star.style.left = Math.random() * window.innerWidth + 'px';
    star.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(star);

    setTimeout(() => {
      star.remove();
    }, 5000);
  }

  function createFirework() {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.left = Math.random() * window.innerWidth + 'px';
    document.body.appendChild(firework);

    setTimeout(() => {
      firework.remove();
    }, 1500);
  }

  setInterval(createConfetti, 300);
  setInterval(createStar, 500);
  setInterval(createFirework, 1000);
});
