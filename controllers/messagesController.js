const db = require("../db/queries");

exports.getMessages = async (req, res) => {
  const messages = await db.getAllMessages();
  console.log(messages);
  res.render("index", { title: "Recent Messages", messages: messages });
};
