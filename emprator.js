const Discord = require("discord.js");
const emprator = new Discord.Client();
const emprator2 = new Discord.Client();
const emprator3 = new Discord.Client();
const emprator4 = new Discord.Client();
const emprator5 = new Discord.Client();
////////////
const prefix = "!!";
////////////
emprator.login("OTg4MzcwMDAwMzIwNTQ0NzY5.GkAPVb.dTTTd5Ss3GLIg17GRply_sGNnL6Sb-HN8abmVo");
emprator.on("message", message => {
  if (message.channel.id === "842532039874052106") {
    message.react("🤍").then(() => {
      message.react("🖤");
    });
  }
});
//////////
emprator2.login("ODY2NzAzMzc4MTgwMzQxODAz.GNE9I4.4KMhJt-RSybmZKMMjLeUXWoQwevVvABc_0o");
emprator2.on("message", message => {
  if (message.channel.id === "842532039874052106") {
    message.react("🤍").then(() => {
      message.react("🖤");
    });
  }
});
/////////
emprator3.login("");
emprator3.on("message", message => {
  if (message.channel.id === "NONE") {
    message.react("🤍").then(() => {
      message.react("🖤");
    });
  }
});
///////
emprator4.login("");
emprator4.on("message", message => {
  if (message.channel.id === "NONE") {
    message.react("🤍").then(() => {
      message.react("🖤");
    });
  }
});
//////////////
emprator5.login("");
emprator5.on("message", message => {
  if (message.channel.id === "NONE") {
    message.react("🤍").then(() => {
      message.react("🖤");
    });
  }
});