document.addEventListener("mousemove", (e) => {
  // SPARKLE TRAIL
  const sparkle = document.createElement("div");
  sparkle.classList.add("trail", "sparkle");
  document.body.appendChild(sparkle);

  sparkle.style.left = `${e.clientX + 5}px`;
  sparkle.style.top = `${e.clientY + 5}px`;

  const size = Math.random() * 10 + 2;
  sparkle.style.width = `${size}px`;
  sparkle.style.height = `${size + 2}px`;

  // STAR TRAIL
  const star = document.createElement("div");
  star.classList.add("trail", "star");
  document.body.appendChild(star);

  star.style.left = `${e.clientX}px`;
  star.style.top = `${e.clientY}px`;

  const starSize = Math.random() * 10 + 5;
  star.style.width = `${starSize}px`;
});
