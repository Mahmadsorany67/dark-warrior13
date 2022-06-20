const Discord = require("discord.js");
const client = new Discord.Client();
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(3000, () => {
  console.log('Server Started.');
});
const emprator = new Discord.Client();
////////////
client.login("");
emprator.on("message", emprator => {
  if (emprator.content.startsWith("reklam")) {
    emprator.author.send("**چاوەکەم ریـکـلامـەکـەم بـۆ بنێرە**");
    emprator.reply("**ریـکلامەکەم لە تایـبـەت بـۆ بنێرە**");
    emprator.react("🖤");
  }
});