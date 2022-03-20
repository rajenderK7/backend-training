// import http module
// http is core module
const http = require("http");

// create a server
const server = http.createServer((request, response) => {
  if (request.method === "GET") {
    if (request.url === "/get-books") response.end("List of books..");
    if (request.url === "/get-users") response.end("List of users..");
  }

  if (request.method === "POST") {
    if (request.url === "/add-book") response.end("Added a book..");
  }

  if (request.method === "PUT") {
    if (request.url === "/upadate-book") response.end("Updated a book..");
  }

  if (request.method === "DELETE") {
    if (request.url === "/delete-book") response.end("Deleted a book..");
  }
});

// assign a port number
const MY_PORT = 3000;
server.listen(MY_PORT, () => console.log(`Server running on port ${MY_PORT}.`));
