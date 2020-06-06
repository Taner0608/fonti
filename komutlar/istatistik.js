const Discord = require('discord.js');

exports.run = function(client, message) {


const yükleniyor = client.emojis.get("670247511499341824")
const kullanici = client.emojis.get("670247532684902420")
const yıldız = client.emojis.get("670247528398061598")
const sosyal = client.emojis.get("670247503538683915")
const kitaplik = client.emojis.get("670247522463383555")
const js = client.emojis.get("670247499633524757")
const onay = client.emojis.get("670247531820744725")
const kodyaziyor = client.emojis.get("670247496920072203")
const ayarlar = client.emojis.get("670247512589860864")
 const embed = new Discord.RichEmbed()

  .setThumbnail("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F47780446023048629%2F&psig=AOvVaw1ffS71sRBAqQNcKHrGCPeV&ust=1587298956378000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjKm8j78egCFQAAAAAdAAAAABAE")
    .setColor('RANDOM')
    .setTitle('Fonti İstatistik')
    .addField( yükleniyor + ' Gecikme', client.ping + 'ms')
    .addField( kullanici + ' Kullanıcılar', client.guilds.reduce((a, b) => a + b.memberCount, 0))
    .addField( yıldız + ' Kanallar', client.channels.size)
    .addField( sosyal + ' Sunucular', client.guilds.size)
    .addField( ayarlar + ' Bellek Kullanımı', (process.memoryUsage().heapUsed / 2048 / 2048).toFixed(2))
    .addField( kitaplik + ' Kütüphanesi', `Discord.js`)
    .addField( js + `  Discord.js Sürümü`, Discord.version)
    .addField( onay + ' Yapımcım', '<@607510984281554984>')
    .addField( kodyaziyor + ' Botun Yapılmaya Başlandığı Tarih ', '**14.04.2020**')






  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['i'],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: 'Botun İstatiğini Atar',
  usage: 'c!istatistik'
};
