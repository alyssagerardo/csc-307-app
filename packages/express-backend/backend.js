// backend.js
import express from "express";
import cors from "cors";
import userService from "./user-services.js";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json()); 

app.get("/users", (req, res) => {
  const name = req.query.name;
  const job = req.query.job;

  userService.getUsers(name, job)
	.then(users => res.json(users))
	.catch(err => res.status(500).json({ error: err.message }));
});

app.get("/users/:id", (req, res) => {
  userService.findUserById(req.params.id)
	.then(user => user ? res.json(user) : res.status(404).json({ error: "User not found" }))
	.catch(err => res.status(500).json({ error: err.message }))
});

app.delete("/users/:id", (req, res) => { 
  userService.deleteUserById(req.params.id)
	.then(user => {
         if (user) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: "User not found" });
    	}
       })
    	.catch(err => res.status(500).json({ error: err.message }));
}); 

app.post("/users", (req, res) => {
  userService.addUser(req.body)
	.then(user => res.status(201).json(user))
	.catch(err => res.status(400).json({ error: err.message}));
});

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
  );
});
