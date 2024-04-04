const mongoose = require("mongoose");

const connect = mongoose.connect('mongodb+srv://acolak9:TikiTaka10@cluster0.7vqlyes.mongodb.net/myPortfolio');

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose connected to db");
});

connection.on("error", (err) => {
  console.log(err, "mongoose connection error");
});

module.exports = mongoose;
