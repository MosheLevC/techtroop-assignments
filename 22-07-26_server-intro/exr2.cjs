const http = require("http");

let users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

const server = http.createServer((req, res) => {
  console.log(`method: ${req.method}\nURL: ${req.url}`);

  const sendJSON = (statusCode, data) => {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = statusCode;
    res.end(JSON.stringify(data));
  };

  const url = req.url;
  const method = req.method;

  if (method === "GET" && url === "/api/users") {
    return sendJSON(200, users);
  }

  const userByIdMatch = url.match(/^\/api\/users\/(\d+)$/);
  if (method === "GET" && userByIdMatch) {
    const id = parseInt(userByIdMatch[1], 10);
    const user = users.find((u) => u.id === id);

    if (!user) {
      return sendJSON(404, { error: "User not found" });
    }
    return sendJSON(200, user);
  }

  if (method === "POST" && url === "/api/users") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const parsedData = JSON.parse(body);

        if (!parsedData.name || !parsedData.email) {
          return sendJSON(400, { error: "Both 'name' and 'email' are required" });
        }

        const newUser = {
          id: users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1,
          name: parsedData.name,
          email: parsedData.email,
        };

        users.push(newUser);
        return sendJSON(201, newUser);
      } catch (err) {
        return sendJSON(400, { error: "Invalid JSON format" });
      }
    });

    return;
  }

  sendJSON(404, { error: "Endpoint not found" });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Node server created at port ${port}`);
});
