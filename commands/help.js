const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
      	var helpembed = new Discord.RichEmbed()
        	.setTitle("list of commands")
        	.setColor('#QED4DA')
        	.addField("fun", "?botinfo tells you about the bot when it was made and how many servers the bot is in. \n ?serverinfo tells you about the server \n ?prefix lets you change the prefix \n")
			.addField("util", "?help shows you this \n ?say Says something \n ?clear clears things in chat ?level tells you your level \n")
			.addField("mod", "?ban bans a user \n ?kick kicks a user for being bad \n ?report reports someone for a reason.")
        .addField("links", "<:PPtransparent:457295151396814848> \n:link:   [bot invite](https://discordapp.com/oauth2/authorize?client_id=460415542977888282&scope=bot&permissions=2146958591) \n:link:   [support server](https://discord.gg/qn7kjWF)")
        	message.author.send(helpembed)
        	if (message.guild){
        		message.channel.send("check your dm for help")
        	}else return;
}

module.exports.help = {
    name: "help"
}