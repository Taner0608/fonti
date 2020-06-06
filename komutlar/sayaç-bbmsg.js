const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:x: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

  let mesaj = args.slice(0).join(' ');
  if(mesaj.length < 5) return message.channel.send(':x: Sayaç Hoşgeldin Mesaj Sistemi İçin En Az 5 Karakter Belirtebilirsin. `Örnek: !sayac-bb-msg -uyetag-, Sunucumuzdan Ayrıldı, -hedefuye- Kişiye Ulaşabilmek İçin -kalanuye- Kişi Kaldı. **-uyesayisi-** Kişiyiz.`')

 message.channel.send(':white_check_mark: Sayaç Görüşürüz mesajını `'+mesaj+'` Olarak ayarladım.')
 db.set(`sayacbbmsj_${message.guild.id}`, mesaj)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sayac-bb-msg'],
  permLevel: 0
};

exports.help = {
  name: 'sayac-bb-msg',
  description: 'taslak',
  usage: 'sayac-bb-msg'
};
