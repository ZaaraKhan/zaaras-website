let counter = 1;
document.addEventListener("mousemove", (e) => {
  // SPARKLE TRAIL
  if (counter % 2 == 0) {
    const sparkle = document.createElement("div");
    sparkle.classList.add("trail", "sparkle");
    document.body.appendChild(sparkle);

    sparkle.style.left = `${e.clientX + 10}px`;
    sparkle.style.top = `${e.clientY + 10}px`;

    const size = Math.random() * 10 + 5;
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size + 2}px`;
  }

  counter++;
});
