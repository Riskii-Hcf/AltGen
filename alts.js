const Discord = require('discord.js');
const bot = new Discord.Client();

var token = "NDAyMDAzMzAyMTA9MjgyMzA1.DTyopQ.2W47aFUINO-Fv6SUJ86yTWhu1Fw";
var prefix = "?";

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

if (message.content === "Sorry Please use it in #public-alts") {
  message.delete("Sorry Please use it in #public-alts")
} else if (message.content === "Please Wait a while") {
  message.delete("Please Wait a while")
}
if (message.author.equals(bot.user)) return;

if (!message.content.startsWith(prefix)) return;

if (talkedRecently.has(message.author.id)) return message.channel.sendMessage(`Please Wait a while`).then(messages => message.delete("Please Wait a while"))

setTimeout(() => {
  talkedRecently.delete(message.author.id);
}, 100000);


var args = message.content.substring(prefix.length).split(" ");

switch (args[0].toLowerCase()) {

case "getalt":
message.delete("getalt");
if (message.channel.id !== '401654584193581056') {
  message.channel.sendMessage("Sorry Please use it in #public-alts").then(messages => message.delete("Sorry Please use it in #public-alts"))
} else {
  talkedRecently.add(message.author.id);
  message.author.sendMessage("How to use email:password\n" + mc.list[Math.floor(Math.random() * mc.list.length)]);
}
break;




}
}
});

bot.on("guildMemberAdd", function(member) {
bot.user.setPresence({ game: { name: ` ${bot.users.size} users! | do !getalt`, type: 5}});
member.sendMessage(member.toString() + " welcome to CosmosMc! :wink:");
member.sendMessage("```> If you can't log into any alts, your Ip might be temporarily banned from\n mojang.  If this is the case, just wait 2-3 hours.To prevent it from\n happening , don't log into too many alts at a time.\n> The alts you get from us is public, Which some of them has already\n been teminated by Mojang for having the accounts has many logged IP's\nto an account.```");
member.sendMessage("This Server gives Free Minecraft Accounts... how to get them is go to #public-alts and type !getalt\nThis command has a 100 second delay so you cannot spam it\n*Note: Alts May Repeat and Not work*");
let memberRole = member.guild.roles.find("name", "Member");
if(!memberRole) return;
member.addRole(memberRole.id);
});

bot.on("guildMemberRemove", function(member) {
bot.user.setPresence({ game: { name: ` ${bot.users.size} users! | do !getalt`, type: 5}});
member.sendMessage("Oh... you left AltMc? if you ever want to rejoin here is invite link\nhttps://discord.gg/QKHMAJN");
});



bot.login(process.env.BOT_TOKEN);
