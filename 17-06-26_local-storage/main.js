const searchButton = document.getElementById("add-button");
const clearButton = document.getElementById("clear-button");
const searchbox = document.getElementById("searchbox");
const wisdomContainer = document.getElementById("wisdomContainer");

const localWisdoms = localStorage.wisdoms ? JSON.parse(localStorage.wisdoms) : false;
const wisdoms = localWisdoms ? localWisdoms : [];

const loadWordsOfWisdom = () => {
  wisdomContainer.innerHTML = "";
  for (const { text } of wisdoms) {
    const wisdomDiv = document.createElement("div");
    const xButton = document.createElement("button");
    const wisdomText = document.createElement("p");

    xButton.textContent = "x";
    xButton.className = "xButton";

    wisdomText.textContent = text;
    wisdomDiv.appendChild(xButton);
    wisdomDiv.appendChild(wisdomText);
    wisdomContainer.appendChild(wisdomDiv);
  }
  if (wisdoms.length !== 0 && wisdoms.length % 2 === 0) {
    localStorage.setItem("wisdoms", JSON.stringify(wisdoms));
  }
};

const handleAddClick = (input) => {
  wisdoms.push({ text: input });
  loadWordsOfWisdom();
};

const handleClearClick = () => {
  localStorage.removeItem("wisdoms");
  wisdoms.length = 0;
  loadWordsOfWisdom();
};

searchButton.addEventListener("click", () => {
  handleAddClick(searchbox.value);
  searchbox.value = "";
});

clearButton.addEventListener("click", () => {
  handleClearClick();
  searchbox.value = "";
});

loadWordsOfWisdom();
