const dateFns = require("date-fns");

function formatMessageTime(message) {
  return {
    ...message,
    time: dateFns.format(new Date(message.time), "PPp"),
  };
}

module.exports = formatMessageTime;
