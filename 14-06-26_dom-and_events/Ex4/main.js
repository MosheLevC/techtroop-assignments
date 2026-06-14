function validate() {
  const errorContainer = document.getElementById("errors");
  errorContainer.innerHTML = "";

  const name = document.getElementById("name").value;
  const salary = parseFloat(document.getElementById("salary").value);
  const birthday = document.getElementById("birthday").value;
  const phone = document.getElementById("phone").value;

  const errors = [];

  if (name.length <= 2) {
    errors.push("Name must be longer than 2 characters");
  }

  if (isNaN(salary) || salary <= 10000 || salary >= 16000) {
    errors.push("Salary must be greater than 10,000 but less than 16,000");
  }

  if (!birthday) {
    errors.push("Birthday may not be null");
  }

  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    errors.push("Phone must be 10 digits long");
  }

  if (errors.length > 0) {
    errors.forEach((msg) => {
      const p = document.createElement("p");
      p.style.color = "red";
      p.innerText = msg;
      errorContainer.appendChild(p);
    });
  } else {
    alert("Success!");
  }
}
