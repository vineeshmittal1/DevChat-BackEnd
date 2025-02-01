const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  try {
    const ALLOWED_FIELDS = [
      "firstname",
      "lastname",
      "emailId",
      "password",
      "photoUrl",
      "about",
      "gender",
      "age",
      "skills",
    ];

    const isValidRequest = Object.keys(data).every((key) => {
      ALLOWED_FIELDS.includes(key);
    });

    if (!isValidRequest) throw new Error("Invalid fields in request");
    if (data?.skills && data.skills.length > 10)
      throw new Error("Skills cannot be more than 10");
    await user.save();
    res.send("User Added Successfully");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;
  try {
    const users = await User.find({ emailId: userEmail });
    if (users.length === 0) res.status(404).send("User not found");
    else res.send(users);
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

app.delete("/user", async (req, res) => {
  const userId = req.body.userId;

  try {
    const user = await User.findByIdAndDelete(id);
    res.send("User deleted successfully");
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

app.patch("/user/:userId", async (req, res) => {
  const userId = req.params?.userId;
  const data = req.body;
  try {
    const ALLOWED_UPDATES = ["photoUrl", "about", "gender", "age", "skills"];

    const isUpdateAllowed = Object.keys(data).every((k) =>
      ALLOWED_UPDATES.includes(k)
    );

    if (!isUpdateAllowed) throw new Error("Update not allowed");
    if (data?.skills.length > 10)
      throw new Error("Skills cannot be more than 10");
    await User.findOneAndUpdate({ _id: userId }, data, {
      returnDocument: "after",
      runValidators: true,
    });
    res.send("User updated successfully");
  } catch (err) {
    res.status(400).send("UPDATED FAILED:" + err.message);
  }
});

app.patch("/user", async (req, res) => {
  const userEmail = req.body.emailId;
  const data = req.body;

  try {
    await User.findByIdAndUpdate({ emailId: userEmail }, data);
    res.send("User updated successfully");
  } catch (err) {
    res.status(400).send("Something went wrong");
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
