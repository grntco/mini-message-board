require("dotenv").config();
const dateFns = require("date-fns");
const express = require("express");
const app = express();
const messagesRouter = require("./routes/messagesRouter");
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
const PORT = process.env.PORT || 3000;

app.use(express.static(assetsPath));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", messagesRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
