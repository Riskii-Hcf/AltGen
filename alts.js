const Discord = require('discord.js');
const bot = new Discord.Client();

var token = "NDAyMDAzMzAyMTA5MjgyMzA1.DTyopQ.2W42aFUINO-Fv6SUJ86yTWhu8Fw";
var prefix = "!";

const talkedRecently = new Set();

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: ` ${bot.users.size} users! | do !getalt`, type: 5}});
  console.log(`Started bot as: ${bot.user.tag}!`);
});

const mc = require('./mcalts.js');

bot.on("message", function(message) {
  if(message.channel.type === 'dm') {
  if (message.author.bot) return;
  message.reply("You think you can get an alt that ez?");
  } else {

if (message.author.equals(bot.user)) return;

if (!message.content.startsWith(prefix)) return;

if (talkedRecently.has(message.author.id)) return message.channel.sendMessage(`Please Wait a while`).then(messages => message.delete(5000))

setTimeout(() => {
  talkedRecently.delete(message.author.id);
}, 100000);


var args = message.content.substring(prefix.length).split(" ");

switch (args[0].toLowerCase()) {

case "getalt":
message.delete("getalt");
if (message.channel.id !== '423352321649410051') {
  message.channel.sendMessage("Sorry Please use it in <#423352321649410051>").then(messages => message.delete(5000))
} else {
  talkedRecently.add(message.author.id);
  message.author.sendMessage("How to use email:password\n" + mc.list[Math.floor(Math.random() * mc.list.length)]);
}
break;




}
}
});


bot.login(process.env.BOT_TOKEN);
