import axios from "../../node_modules/axios/dist/esm/axios.js";
import { GIPHY_API_KEY } from "./config.js";

const searchButton = document.getElementById("search-button");
const searchbox = document.getElementById("searchbox");
const iFrame = document.createElement("iframe");

const catGif = (input) => {
  axios
    .get(`https://api.giphy.com/v1/gifs/search?q=${input}&api_key=${GIPHY_API_KEY}&limit=1`)
    .then(({ data }) => {
      const body = document.getElementById("body");
      const gifData = data?.data?.[0];

      if (gifData?.embed_url) {
        iFrame.src = gifData.embed_url;
        body.appendChild(iFrame);
      } else {
        const text = document.createElement("p");
        text.textContent = "gif not found";
        body.appendChild(text);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

searchButton.addEventListener("click", () => {
  catGif(searchbox.value);
});
