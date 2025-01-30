const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://vineeshmittal:9WKoiwaNfV1eAqwN@cluster0.iynvg.mongodb.net/DevChat"
  );
};

module.exports = connectDB;
