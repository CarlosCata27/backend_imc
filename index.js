const app = require("./app");
const port = process.env.PORT || 3977;
const cors = require("cors");
const express = require("express");
const logger = require("morgan");

app.use(logger("dev"));

app.disable("x-powered-by");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers, Authorization",
    "Origin, X-Requested-With, Content-Type, Accept",
    "Access-Control-Allow-Methods",
    "GET,POST,OPTIONS,DELETE,PUT"
  );
  next();
});

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
})
);


app.listen(port, () => {
  console.log(`Servidor funcionando en puerto ${port}`);
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send(err.stack);
});