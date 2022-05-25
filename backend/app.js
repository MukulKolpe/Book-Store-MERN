const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const router = require("./routes/book-routes.js");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/books", router);
mongoose
  .connect(
    "mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.0d76b.mongodb.net/bookStore?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
