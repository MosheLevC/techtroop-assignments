import axios from "axios";
import { GOOGLE_BOOKS_API_KEY } from "../config.js";

const searchBook = (queryType, queryValue) => {
  axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}&key=${GOOGLE_BOOKS_API_KEY}`)
    .then(({ data }) => {
      if (data.totalItems > 0) {
        const volumeInfo = data?.items[0]?.volumeInfo;
        const items = data?.items;
        for (const item of items) {
          const volumeInfo = item.volumeInfo;
          const isbnArray = volumeInfo.industryIdentifiers
            ? volumeInfo.industryIdentifiers.map((industryIdentifiers) => industryIdentifiers.identifier)
            : [];
          const isbnString = isbnArray.length > 0 ? isbnArray.join(", ") : "N/A";

          console.log(`
title: ${volumeInfo.title ? volumeInfo.title : "N/A"}
authors: ${volumeInfo.authors ? volumeInfo.authors : "N/A"}
isbns: ${isbnString}
published date: ${volumeInfo.publishedDate ? volumeInfo.publishedDate : "N/A"}
average rating: ${volumeInfo.averageRating ? volumeInfo.averageRating : "N/A"}
        `);
        }
      } else {
        console.log(`book not found for ${queryType}: ${queryValue}`);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

searchBook("isbn", 9789814561778);
searchBook("title", "How to Win Friends and Influence People");
