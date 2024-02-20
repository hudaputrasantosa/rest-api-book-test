const express = require("express");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./models");

const app = express();
// let corsOption = {
//   origin: "http://localhost:8080",
// };

app.use(cors());
// app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.status(200).json({
    status: "Server Running..",
  });
});

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went Wrong!";
  return res.status(errorStatus).send({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

db.sequelize.sync().then((res) => {
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log("server running.. http://localhost:8080");
  });
});
