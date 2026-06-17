import axios from "../../node_modules/axios/dist/esm/axios.js";
import { GIPHY_API_KEY } from "./config.js";

const catGif = () => {
  axios
    .get(`https://api.giphy.com/v1/gifs/search?q=cats&api_key=${GIPHY_API_KEY}&limit=1`)
    .then(({ data }) => {
      const body = document.getElementById("body");
      const gifData = data?.data?.[0];

      if (gifData?.embed_url) {
        const iFrame = document.createElement("iframe");
        iFrame.src = gifData.embed_url;
        body.appendChild(iFrame);
      } else {
        const text = document.createElement("p");
        text.textContent = "cats not found";
        body.appendChild(text);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
catGif();
