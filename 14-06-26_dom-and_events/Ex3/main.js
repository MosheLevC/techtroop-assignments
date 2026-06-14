document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  for (let i = 0; i < 420; i++) {
    const box = document.createElement("div");
    box.className = "box";

    box.onmouseenter = () => {
      box.style.backgroundColor = getRandomColor();
    };

    container.appendChild(box);
  }
});
