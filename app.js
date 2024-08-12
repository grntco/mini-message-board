const express = require("express");
const app = express();
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
const messagesRouter = require("./routers/messagesRouter");

app.use(express.static(assetsPath));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
  {
    text: "Wassup!",
    user: "Susan",
    added: new Date(),
  },
  {
    text: "Howdy",
    user: "Jameson",
    added: new Date(),
  },
  {
    text: "What's up everyone!",
    user: "Alfie",
    added: new Date(),
  },
];

app.get("/", (req, res) => {
  res.render("index", { title: "Recent Messages", messages: messages });
});

app.use("/new", messagesRouter);

const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
