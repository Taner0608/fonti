const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {

    const juke = new Discord.RichEmbed()
    .setColor('Fonti Yardım Menüsü')
    .setAuthor(`Fonti`, client.user.avatarURL)
      .setDescription('** [Fonti Destek Sunucusu](https://discord.gg/phe7mkT) **')
.setThumbnail(client.user.avatarURL)
      .addField('** Kullanıcı Komutları (11)**', '`davet`, `istatistik`, `afk`, `avatar`, `emojiler`, `roller`, `kullanıcı-bilgi`, `ping`, `sunucuresmi`, `gün-sayım`,`çağır`')
      .addField('** Yetkili Komutları (11)**', '`ban`, `bansorgu`, `yaz`, `mute`, `kanalkilit`, `sayaç`, `rolver`, `yavaşmod`, `uyar`, `sil`,`unban`')
    .setFooter(``, client.user.avatarURL)
    .setTimestamp()
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'yardım',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};
