const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Vineesh",
    lastName: "Mittal",
    emailId: "vineesh@abc.com",
    password: "vineesh@123",
  });
  try {
    await user.save();
    res.send("User Added Successfully");
  } catch (err) {
    res.status(400).send("Erro saving the user:" + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(7777, () => {
      console.log("Server is successfully listening on port 7777... ");
    });
  })
  .catch((err) => {
    console.error("Database cannot be established");
  });
