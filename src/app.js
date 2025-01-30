const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./middlewares/auth");

app.use("/admin", adminAuth);

app.get("/user", userAuth, (req, res) => {
  res.send("User Data Sent");
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port 300... ");
});
