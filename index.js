const express = require("express");
const app = express();
const ejsMate = require("ejs-mate");
const path = require("path");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "views"));
app.use("/static", express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("app is listening to port 3000");
});
