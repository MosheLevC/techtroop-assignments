//as discussed I am only doing exercise 3 in this assignment
// exercise 3 callbacks
const logData = (data) => console.log(data);

const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};

displayData(console.error, logData, "I like to party");
