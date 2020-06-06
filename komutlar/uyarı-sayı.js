const Discord = require("discord.js");
const db = require('quick.db');
const neblm = require('../ayarlar.json');

exports.run = async (client, message, args) => {

if (!args[0]) return message.channel.send('❓ Kimin uyarısını göstericeğimi yazmalısın.')
let CodEming = message.mentions.users.first() || client.users.get(args[0]) || message.guild.members.find(u => u.user.username.toLowerCase().includes(args[0].toLowerCase())).user
  if (!CodEming) return message.channel.send('❓ Kullanıcıyı bulamadım.')
  let Yaasin = message.guild.member(CodEming)
  if (!Yaasin) return message.channel.send('❓ Kullanıcıyı **bulamadım.**')

  let i = await db.get(`uyarı.${CodEming.id+message.guild.id}`)
  if (!i || i == 0) return message.channel.send('🖕 Bu kullanıcının zaten bir uyarısı yok')
        let Baroom = new Discord.RichEmbed()
       .setDescription(`**${CodEming.tag}** **adlı Kişinin Toplam:** ` + db.get(`uyarı.${CodEming.id+message.guild.id}`) || '0', true)


message.channel.send(Baroom)

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

  exports.help = {
    name: 'uyarı-sayı',
    description: 'Uyarı sayısını gösterir',
    usage: 'uyarı-sayı'
};
