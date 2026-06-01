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

//exercise 4
const validatePassword = (usernameLength, passwordLength, userAge) => {
  const isValidUsername = usernameLength >= 5;
  const isValidPassword = passwordLength >= 8;
  const isValidUserAge = userAge >= 13;

  if (!isValidUsername || !isValidPassword || !isValidUserAge) {
    if (!isValidUsername && !isValidPassword && !isValidUserAge) {
      console.log("all your fields suck");
    } else {
      if (!isValidUsername) {
        console.log("username must be at least 5 characters");
      }
      if (!isValidPassword) {
        console.log("password must be at least 8 characters");
      }
      if (!isValidUserAge) {
        console.log("user hasn't had bar mitzvah yet");
      }
    }
  } else console.log("you're good to go");
};
let usernameLength = 6;
let passwordLength = 7;
let userAge = 15;
validatePassword(usernameLength, passwordLength, userAge);
////////////////////////////
