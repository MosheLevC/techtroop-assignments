//as discussed I am only doing exercise 6 in this assignment
// exercise 6 armstrong number
const armstrong3DigitNumbers = () => {
  let currentNumber = 100;
  const powerOf3 = (number) => Math.pow(number, 3);

  while (currentNumber < 1000) {
    const rightDigit = currentNumber % 10;
    const middleDigit = Math.floor(currentNumber / 10) % 10;
    const leftDigit = Math.floor(currentNumber / 100) % 10;

    if (powerOf3(leftDigit) + powerOf3(middleDigit) + powerOf3(rightDigit) === currentNumber) console.log(currentNumber);

    currentNumber++;
  }
};

armstrong3DigitNumbers();
