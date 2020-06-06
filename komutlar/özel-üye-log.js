const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client,message,args) => {
const asd = message.mentions.channels.first() || args.slice(0).join(' ')
if(!asd) return message.channel.send(new Discord.RichEmbed().setColor('BLACK').setDescription('Lütfen bir kanal etiketle!'))

db.set(`özellog_${message.guild.id}`, asd.id)
message.channel.send(new Discord.RichEmbed().setColor('BLACK').setDescription(`Özelüye log'u **${asd}** olarak ayarlandı!`))
}

exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: []
}

exports.help = {
name: 'özelüye-log'
}
