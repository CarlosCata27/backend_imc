const app = require("./app");
const port = process.env.PORT || 3977;
const cors = require("cors");


app.listen(port, () => {
  console.log(`Servidor funcionando en puerto ${port}`);
});

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
