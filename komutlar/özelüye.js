const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => {

let yardım = new Discord.RichEmbed()
.setTitle('__**ÖZEL ÜYE YARDIM**__')
.setColor('BLUE')
.setDescription('__**!sayaç-ayarla**__ 》 Sayacı Ayarlar.\n Örnek: `!özelüye-log #logkanalı **Özel Üye Yapılan Kullanıcıların `  \n __**!özel-üye-rol **__》 Özel Üye Rolünü Ayarlarsınız.\n Örnek: `!özel-üye-yap @kullanıcı, Etiketlediginiz Kullanıcıyı Özel Üye Yaparsınız.`')
  .addField('__**Kullanabileceğiniz Değişkenler**__',`

`)
 message.channel.send(yardım)
  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'özelüye',
  description: 'sayaç',
  usage: 'sayaç'
};
