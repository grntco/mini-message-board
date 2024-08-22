const db = require("../db/queries");
const formatMessageTime = require("../utils/formatMessageTime");

exports.getMessages = async (req, res) => {
  const messages = await db.getAllMessages();
  console.log(messages);
  res.render("index", {
    title: "Recent Messages",
    messages: messages.map((message) => formatMessageTime(message)),
  });
};

exports.newMessageGet = async (req, res) => {
  res.render("form", { title: "New Message" });
};

exports.newMessagePost = async (req, res) => {
  const { text, user } = req.body;
  await db.insertMessage(text, user);
  res.redirect("/");
};

exports.singleMessageGet = async (req, res) => {
  const { id } = req.params;
  const message = await db.getMessage(id);
  res.render("message", {
    title: "View Message",
    message: formatMessageTime(message),
  });
  console.log(message);
};
