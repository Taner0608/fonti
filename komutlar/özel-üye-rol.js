const Discord = require('discord.js')
const db = require('quick.db')

exports.run = (client,message,args) => {
const asd = message.mentions.roles.first() || args.slice(0).join(' ')
if(!asd) return message.channel.send(new Discord.RichEmbed().setColor('BLACK').setDescription('Lütfen bir rol etiketle!'))

db.set(`özelüyerol_${message.guild.id}`, asd.id)
 message.channel.send(new Discord.RichEmbed().setColor('BLACK').setDescription(`Başarıyla özelüye rolünü ${asd} olarak ayarladım.`))
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'özel-üye-rol'
};
