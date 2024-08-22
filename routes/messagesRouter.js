const { Router } = require("express");
const messagesController = require("../controllers/messagesController");
const messagesRouter = Router();

messagesRouter.get("/", messagesController.getMessages);
messagesRouter.get("/new", messagesController.newMessageGet);
messagesRouter.post("/new", messagesController.newMessagePost);
messagesRouter.get("/message/:id", messagesController.singleMessageGet);

module.exports = messagesRouter;

// messagesRouter.get("/", (req, res) => {
//   res.render("form", { title: "New Message" });
// });

// messagesRouter.post("/", (req, res) => {
//   const text = req.body.messageText;
//   const user = req.body.messageUser;
//   messages.push({
//     text: text,
//     user: user,
//     added: dateFns.format(new Date(), "PPp"),
//   });
//   res.redirect("/");
// });

// messagesRouter.get("/message/:messageIndex", (req, res) => {
//   const message = messages[req.params.messageIndex];
//   res.render("message", { title: "Selected Message", message: message });
// });
