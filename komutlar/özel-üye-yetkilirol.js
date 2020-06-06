const Discord = require('discord.js')
const db = require('quick.db')

exports.run = (client,message,args) => {
const asd = message.mentions.roles.first() || args.slice(0).join(' ')
if(!asd) return message.channel.send(new Discord.RichEmbed().setColor('BLACK').setDescription('Lütfen bir rol etiketle!'))

db.set(`özelüyeyetkili_${message.guild.id}`, asd.id)
 message.channel.send(new Discord.RichEmbed().setColor('BLACK').setDescription(`Başarıyla özelüye yetkili rolünü ${asd} olarak ayarladım. \nArtık özel üye rolü yapabilecekler!`))
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'özel-üye-yetkilirol'
};
