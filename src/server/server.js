const express = require("express");
const cors = require("cors");
const app = express();

app.get("/", function (req, res) {
  
});

app.listen(3000, (req, res) => {
  res.write("Server is working");
});
