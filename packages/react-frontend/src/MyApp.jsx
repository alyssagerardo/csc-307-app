// src/MyApp.jsx
import React, { useState } from "react";
import Table from "./Table";
import Form from "./Form";

function MyApp() {
 const [characters, setCharacters] = useState([]); 

function removeOneCharacter(index) {
    const updated = characters.filter((character, i) => {
      return i !== index;
    });
    setCharacters(updated);
}

function updateList(person) {
<<<<<<< Updated upstream
  setCharacters([...characters, person]);
=======
 postUser(person) 
	.then(response => { 
	  if (response.status == 201) {
	    return response.json();
	  } else {
	    console.log("Failed to add user. Status:", response.status);
   	  }
        })
        .then((newUser)  => {
	  if (newUser) {
	    setCharacters([...characters, newUser]);
          }
	})
	.catch((error) => console.log(error));
	
}

function fetchUsers() {
    return fetch("http://localhost:8000/users"); 
} 

useEffect(() => { 
    fetchUsers()
	.then((res) => res.json())
	.then((json) => setCharacters(json))
	.catch((error) => { console.log(error));
}, [] ); 

function postUser(person) {
    return fetch("http://localhost:8000/users", { 
      method: "POST", 
      headers: {
        "Content-Type": "application/json", 
      }, 
      body: JSON.stringify(person), 
   });  
>>>>>>> Stashed changes
}

return (
  <div className="container">
    <Table
      characterData={characters}
      removeCharacter={removeOneCharacter}
    />
    <Form handleSubmit={updateList} />
  </div>
);
}

export default MyApp;
