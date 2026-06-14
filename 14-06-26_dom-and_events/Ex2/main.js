document.addEventListener("DOMContentLoaded", () => {
  const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true },
  };
  const userMessage = document.createElement("h1");

  const checkReservation = () => {
    const inputValue = document.getElementById("input").value;
    const body = document.getElementById("body");

    if (inputValue in reservations) {
      if (reservations[inputValue].claimed) {
        userMessage.className = "rejected-text";
        userMessage.textContent = "Already claimed";
      } else {
        userMessage.className = "approved-text";
        userMessage.textContent = `Welcome ${inputValue}!`;
      }
    } else {
      userMessage.className = "rejected-text";
      userMessage.textContent = "You're not even invited!";
    }
    body.appendChild(userMessage);
  };

  document.getElementById("button").onclick = checkReservation;
});
