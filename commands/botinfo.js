const Discord = require("discord.js");
const user = new Discord.Client()

module.exports.run = async (bot, message, args) =>  {
    let boticon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Infomation")
    .setColor("0ED4DA")
    .setThumbnail(boticon)
    .addField("Bot Name", bot.user.username)
    .addField("Bot Create Data", bot.user.createdAt)
    .addField("Servers", bot.guilds.size)
    console.log(bot)

    message.channel.send(botembed)
}

module.exports.help = {
    name: "botinfo",
    description: "Shows the bot's info"
}