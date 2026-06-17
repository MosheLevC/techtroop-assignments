import axios from "axios";
import { GOOGLE_BOOKS_API_KEY } from "../config.js";

const isbns = ["9780575087057", "9782806269171", "1440633908", "9781945048470", "9780307417138"];
const searchISBN = (isbn) => {
  axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${GOOGLE_BOOKS_API_KEY}`)
    .then(({ data }) => {
      if (data.totalItems > 0) {
        const volumeInfo = data?.items[0]?.volumeInfo;
        console.log(`
title: ${volumeInfo.title ? volumeInfo.title : "N/A"}
authors: ${volumeInfo.authors ? volumeInfo.authors : "N/A"}
published date: ${volumeInfo.publishedDate ? volumeInfo.publishedDate : "N/A"}
average rating: ${volumeInfo.averageRating ? volumeInfo.averageRating : "N/A"}
        `);
      } else console.log(`book not found for isbn: ${isbn}`);
    })
    .catch((error) => {
      console.log(error);
    });
};

for (const isbn of isbns) {
  searchISBN(isbn);
}
