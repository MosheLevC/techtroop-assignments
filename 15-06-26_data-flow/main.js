document.addEventListener("DOMContentLoaded", () => {
  const posts = [
    { name: "Jim Bob", text: "hey there i'm using whatsapp" },
    { name: "Lightning McQueen", text: "Kachaow!" },
    { name: "Jack Torrance", text: "Here'ssss Johnny!!" },
  ];

  const container = document.getElementById("container");
  const nameInput = document.getElementById("name");
  const textInput = document.getElementById("text");
  const postButton = document.getElementById("post");

  const render = () => {
    container.replaceChildren();

    for (const post of posts) {
      const postElement = document.createElement("div");

      const nameElement = document.createElement("span");
      nameElement.className = "post-name";
      nameElement.textContent = `${post.name}: `;

      const textElement = document.createTextNode(post.text);

      postElement.appendChild(nameElement);
      postElement.appendChild(textElement);

      container.appendChild(postElement);
    }
  };

  const post = () => {
    const name = nameInput.value;
    const text = textInput.value;
    posts.push({ name, text });

    nameInput.value = "";
    textInput.value = "";
    render();
  };

  postButton.addEventListener("click", post);

  render();
});
