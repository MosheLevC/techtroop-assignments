document.addEventListener("DOMContentLoaded", () => {
  const ball = document.getElementById("ball");

  const moveBall = (direction) => {
    const step = 15;
    let left = parseInt(ball.style.left) || 10;
    let top = parseInt(ball.style.top) || 10;

    if (direction === "up") {
      top -= step;
    } else if (direction === "down") {
      top += step;
    } else if (direction === "left") {
      left -= step;
    } else if (direction === "right") {
      left += step;
    }

    ball.style.left = left + "px";
    ball.style.top = top + "px";
  };

  document.getElementById("up").onclick = () => {
    moveBall("up");
  };

  document.getElementById("down").onclick = () => {
    moveBall("down");
  };

  document.getElementById("left").onclick = () => {
    moveBall("left");
  };

  document.getElementById("right").onclick = () => {
    moveBall("right");
  };
});
