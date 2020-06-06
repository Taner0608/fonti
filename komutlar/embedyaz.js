const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

   let wasait = args.slice(0).join(' ');
  const CodEmingembed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(`${wasait}`)
    message.channel.send(CodEmingembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'embed',
  description: 'Yazdığınızı Mesajı Embedli Atar.',
  usage: 'embed',
  category: 'Kullanıcı'
}; 
