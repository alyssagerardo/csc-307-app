// backend.js
import express from "express";
import cors from "cors";

const app = express();
const port = 8000;
const users = {
  users_list: [
    {
      id: "xyz789",
      name: "Charlie",
      job: "Janitor"
    },
    {
      id: "abc123",
      name: "Mac",
      job: "Bouncer"
    },
    {
      id: "ppp222",
      name: "Mac",
      job: "Professor"
    },
    {
      id: "yat999",
      name: "Dee",
      job: "Aspring actress"
    },
    {
      id: "zap555",
      name: "Dennis",
      job: "Bartender"
    } 
  ]
};

app.use(cors());
app.use(express.json());

const findUserByName = (name) => {
  return users["users_list"].filter(
    (user) => user["name"] === name
  );
};

const findUserByNameAndJob = (name, job) => {
  return users["users_list"].filter(
    (user) => user["name"] === name && user["job"] === job
  );
};

const addUser = (user) => {
  users["users_list"].push(user);
  return user;
};

const generateID = () => {
 const alphabet_list = [
   "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
   "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", 
   "w", "x", "y", "z"
];
 let letters = ""; 
 for (let i = 0; i < 3; i++) {
   const randIdx = Math.floor(Math.random() * alphabet_list.length); 
   letters += alphabet_list[randIdx]; 
 }

 let numbers = ""; 
 for (let i = 0; i < 3; i++) {
   const randDigit = Math.floor(Math.random() * 10); 
   numbers += randDigit;
 } 
 return letters + numbers; 
} 

const findUserById = (id) => {
 return users["users_list"].find((user) => user["id"] === id);
}; 

const deleteUserByID = (id) => {
  const index = users["users_list"].findIndex(user => user["id"] === id);
  if (index != -1) {
    users["users_list"].splice(index, 1);
    return true; 
  } else {
    return false; 
  } 
}; 

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  const name = req.query.name;
  const job = req.query.job;

  if (name != undefined && job != undefined) {
    let result = findUserByNameAndJob(name, job);
    result = { users_list: result };
    res.send(result);
  } else if (name != undefined) {
    let result = findUserByName(name);
    result = { users_list: result };
    res.send(result);
  } else {
    res.send(users);
  }
});

app.get("/users/:id", (req, res) => {
  const id = req.params["id"]; //or req.params.id
  let result = findUserById(id);
  if (result === undefined) {
    res.status(404).send("Resource not found.");
  } else {
    res.send(result);
  }
});

app.delete("/users/:id", (req, res) => { 
  const id = req.params["id"]; 
  let result = deleteUserByID(id); 
  if (result == true) {
    res.status(204).send(); 
  } else {
    res.status(404).send("Unable to delete"); 
  } 
}); 

app.post("/users", (req, res) => {
  const userToAdd = req.body;
  userToAdd.id = generateID(); 
  addUser(userToAdd);
  res.status(201).send();
});

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
  );
});
