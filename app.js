// import the express module
const exp = require("express");
let users = require("./users");

const PORT_NUMBER = 3000;

// Create an API
const app = exp();

// To extract body of a request object.
app.use(exp.json());

// Define routes

// get all the users
app.get("/get-users", (request, response) => {
  response.send({ message: "All the users.", payload: users });
});

// get a specific user
app.get("/get-user/:id", (request, response) => {
  const _id = Number(request.params.id);
  const user = users.find((user) => user.id === _id);

  if (user == undefined) {
    response.send({ message: "User not found" });
  } else {
    response.send({ message: "A user", payload: user });
  }
});

// add a user
app.post("/add-user", (request, response) => {
  const newUser = request.body;
  if (newUser.id === undefined) {
    response.send({ message: "Undefined user." });
  } else {
    users.push(newUser);
    response.send({ message: "Succesfully added new user." });
  }
});

// update a user
app.put("/update-user/:id", (request, response) => {
  const _id = Number(request.params.id);
  const updateUserObj = request.body;
  // Check if the user exits or not.
  const user = users.find((user) => user.id === _id);
  if (user === undefined) {
    response.send({ message: "User does not exist." });
  } else if (updateUserObj.id === undefined) {
    response.send({ message: "Undefined user." });
  } else {
    if (updateUserObj.name !== undefined) {
      user.name = updateUserObj.name;
    }
    if (updateUserObj.username !== undefined) {
      user.username = updateUserObj.username;
    }
    if (updateUserObj.email !== undefined) {
      user.email = updateUserObj.email;
    }
    response.send({ message: "Succesfully updated the user." });
  }
});

// delete a user
app.delete("/delete-user/:id", (request, response) => {
  const _id = Number(request.params.id);
  const user = users.find((user) => user.id === _id);
  if (user === undefined) {
    response.send({ message: "User does not exist" });
  } else {
    const updateUsers = users.filter((user) => user.id !== _id);
    users = updateUsers;
    response.send({ message: "Succesfully deleted user." });
  }
});

// Assign a port
app.listen(PORT_NUMBER, () =>
  console.log(`Server running on port ${PORT_NUMBER}`)
);
