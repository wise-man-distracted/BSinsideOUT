const express = require("express");
const layouts = require("express-ejs-layouts");
const session = require("express-session");
const methodOverride = require('method-override');
const MainRouter = require("./routes/MainRouter");

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(methodOverride('_method'));


app.use(session({
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: false
}))

app.use(express.static("public"));
app.use(layouts);

app.set("layout", "./layouts/default");
app.set("view engine", "ejs");

app.use("/", MainRouter);


app.listen(3000, () => {
  console.log("Aplicação escutando a porta 3000");
});
