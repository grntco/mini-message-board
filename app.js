const dateFns = require("date-fns");
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
    added: dateFns.format(new Date(), "PPp"),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: dateFns.format(new Date(), "PPp"),
  },
  {
    text: "Wassup!",
    user: "Susan",
    added: dateFns.format(new Date(), "PPp"),
  },
  {
    text: "Howdy",
    user: "Jameson",
    added: dateFns.format(new Date(), "PPp"),
  },
  {
    text: "What's up everyone!",
    user: "Alfie",
    added: dateFns.format(new Date(), "PPp"),
  },
];

app.get("/", (req, res) => {
  res.render("index", { title: "Recent Messages", messages: messages });
});

messagesRouter.get("/", (req, res) => {
  res.render("form", { title: "New Message" });
});

messagesRouter.post("/", (req, res) => {
  const text = req.body.messageText;
  const user = req.body.messageUser;
  messages.push({
    text: text,
    user: user,
    added: dateFns.format(new Date(), "PPp"),
  });
  res.redirect("/");
});

app.use("/new", messagesRouter);

app.get("/message/:messageIndex", (req, res) => {
  const message = messages[req.params.messageIndex];
  res.render("message", { title: "Selected Message", message: message });
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
