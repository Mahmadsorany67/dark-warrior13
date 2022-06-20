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
const emprator2 = new Discord.Client();
const emprator3 = new Discord.Client();
const emprator4 = new Discord.Client();
const emprator5 = new Discord.Client();
////////////
const prefix = "!!";
////////////
client.on('ready', () => {
	console.log(`${client.user.tag}`);
	console.log(`${client.guilds.cache.size} Servers`);
	console.log(`${client.users.cache.size} Members`);
	console.log(`${client.channels.cache.size} Channels`);
	console.log(`[ ${client.guilds.cache.map(g => g.name).join(', \n ')} ]`);
	client.user.setActivity(`emprator`, { type: 'PLAYING' });
});
////////////
client.login("ODY2NzAzMzc4MTgwMzQxODAz.GNE9I4.4KMhJt-RSygdgbmZKMMjLeUXWoQwevVvABc_0o");
emprator.on("message", message => {
  if (message.channel.id === "842532039874052106") {
    message.react("🤍").then(() => {
      message.react("🖤");
    });
  }
});
//////////
emprator2.