const express = require("express");
const app = express();
const messagesRouter = express.Router();
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");

app.use(express.static(assetsPath));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

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
  {
    text: "What's up everyone!",
    user: "Alfie",
    added: new Date(),
  },
];

app.get("/", (req, res) => {
  res.render("index", { title: "Recent Messages", messages: messages });
});

app.get("/new", (req, res) => {
  res.render("form", { title: "New Message" });
});

app.post("/new", (req, res) => {
  const text = req.body.messageText;
  const user = req.body.messageUser;
  messages.push({ text: text, user: user, added: new Date() });
  res.redirect("/");
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
