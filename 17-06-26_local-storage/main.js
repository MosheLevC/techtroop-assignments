const searchButton = document.getElementById("search-button");
const searchbox = document.getElementById("searchbox");
const wisdomContainer = document.getElementById("wisdomContainer");

const localWisdoms = JSON.parse(localStorage.wisdoms);
const wisdoms = localWisdoms ? localWisdoms : [];

const loadWordsOfWisdom = () => {
  wisdomContainer.innerHTML = "";
  for (const { text } of wisdoms) {
    const p = document.createElement("p");
    p.textContent = text;
    wisdomContainer.appendChild(p);
  }
  if (wisdoms.length !== 0 && wisdoms.length % 2 === 0) {
    localStorage.setItem("wisdoms", JSON.stringify(wisdoms));
  }
};

const handleClick = (input) => {
  wisdoms.push({ text: input });
  loadWordsOfWisdom();
};

searchButton.addEventListener("click", () => {
  handleClick(searchbox.value);
  searchbox.value = "";
});

loadWordsOfWisdom();
