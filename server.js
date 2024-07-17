const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const Person = require("./modeles/Person");
const Player = require("./modeles/Players"); // Correct path
const db = require("./db");

dotenv.config();
const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to Sharma");
});

app.post("/person", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log("Data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/person", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("Data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST method for adding a player
app.post("/player", async (req, res) => {
  try {
    const data = req.body;
    const newPlayer = new Player(data);
    const response = await newPlayer.save();
    console.log("Player data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET method for retrieving all players
app.get("/player", async (req, res) => {
  try {
    const data = await Player.find();
    console.log("Player data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});




//   const data=req.body(data)
//   const newPerson= new Person();
// newPerson.save((error,savedperson)=>{
// if(error){
//   console.log('error saving person',error)
//   res.status(500).json({error:"intern server error"})
// }
// else{
//   console.log("data saved successfully")
//   res.status(200).json(savedperson)}

// })

//to avoide this we directly [pass data upper]
// const newPerson= new Person();
// newPerson.name=data.name;
// newPerson.age=data.age;
// newPerson.email=data.email;
// newPerson.mobile=data.mobile;
// newPerson.address=data.address;
