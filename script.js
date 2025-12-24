// 淡入主页面
const cover = document.getElementById("cover");
const enterBtn = document.getElementById("enterBtn");
const mainContent = document.getElementById("mainContent");
const bgm = document.getElementById("bgm");

enterBtn.addEventListener("click", () => {
  cover.classList.add("hidden");
  setTimeout(() => {
    cover.remove();
    mainContent.classList.add("visible");
    playMusic();
  }, 1500);
});

// 音乐淡入
function playMusic() {
  bgm.volume = 0;
  bgm.play().catch(() => {});
  let vol = 0;
  const fade = setInterval(() => {
    if (vol < 0.4) {
      vol += 0.02;
      bgm.volume = vol;
    } else clearInterval(fade);
  }, 300);
  document.addEventListener("click", () => {
    if (bgm.paused) bgm.play();
  }, { once: true });
}

// 打字机效果
const messages = [
  "愿小宝塔塔永远笑得像春天🌸",
  "愿岁月温柔待你，如我眼中柔光✨",
  "你的微笑，是我每日的星光💫",
  "健康与平安，永远环绕你🌷",
  "有你的世界，才完整💖",
  "圣诞快乐，我最爱的塔塔🎄"
];

const typewriter = document.getElementById("typewriter");
let msgIndex = 0, charIndex = 0;

function typeEffect() {
  if (msgIndex < messages.length) {
    const msg = messages[msgIndex];
    if (charIndex < msg.length) {
      typewriter.innerHTML += msg.charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, 60);
    } else {
      typewriter.innerHTML += "<br>";
      msgIndex++;
      charIndex = 0;
      setTimeout(typeEffect, 1200);
    }
  }
}
setTimeout(typeEffect, 2000);

// 爱心漂浮
const colors = ['rgba(255,182,193,0.25)', 'rgba(255,192,203,0.3)', 'rgba(255,205,210,0.35)'];
setInterval(() => {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.background = colors[Math.floor(Math.random() * colors.length)];
  heart.style.animationDuration = (8 + Math.random() * 4) + 's';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 12000);
}, 700);
