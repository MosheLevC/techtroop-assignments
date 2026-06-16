function checkLuckyNumber(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num <= 0) {
        reject("Invalid number");
      } else if (num % 7 === 0) {
        resolve("Lucky!");
      } else if (num % 7 !== 0) {
        resolve("Not lucky");
      }
    }, 800);
  });
}

document.getElementById("button").addEventListener("click", () => {
  checkLuckyNumber(70).then((res) => {
    console.log(res);
  });
});
