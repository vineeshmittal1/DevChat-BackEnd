const express = require("express");

const app = express();


app.get("/getUserData", (req, res) => {
  try {
    throw new Error("hello");
    res.send("User Data Sent");
  } catch (err) {
    res.status(500).send("Some Error contact the support team");
  }
});

app.use("/", (err, req, res, next) => {
  if (err) res.status(500).send("Something went wrong");
});


app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777... ");
});
