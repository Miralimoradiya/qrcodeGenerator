//app.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes");
const app = express();
const port = process.env.PORT || 3000;
const mongoDB = "mongodb://127.0.0.1:27017/amitdb";
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
app.use(bodyParser.json());
app.use(cors());
app.use(router);
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
