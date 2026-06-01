//exercise 1
const checkAge = (age) => (age >= 18 ? console.log("yalla vote") : console.log("nah bro"));
let age = 20;
checkAge(age);
////////////////////////////

//exercise 2
const gradeClassification = (grade) => {
  if (grade >= 0 && grade <= 100) {
    if (grade >= 90) console.log("A");
    else if (grade >= 80) console.log("B");
    else if (grade >= 70) console.log("C");
    else if (grade >= 60) console.log("D");
    else console.log("F");
  } else console.log("Go back to school");
};
let score = 85;
gradeClassification(score);
////////////////////////////

//exercise 3
const weatherRecommendation = (tempurature, weather) => {
  if (weather === "sunny") {
    if (tempurature > 24) console.log("Go to the beach");
    else if (tempurature >= 15) console.log("Go for a walk");
    else console.log("Stay inside and read");
  } else if (weather === "rainy") console.log("Stay inside and read");
  else {
    if (tempurature > 21) console.log("Go hiking");
    else console.log("Visit a museum");
  }
};
let temperature = 20;
let weather = "sunny";
weatherRecommendation(temperature, weather);
////////////////////////////
