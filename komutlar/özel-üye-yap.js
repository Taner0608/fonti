const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client,message,args) => {
        var rol = await db.fetch(`özelüyeyetkili_${message.guild.id}`, rol)
let rol2 = message.guild.roles.find('id', rol)
if(!message.member.roles.has(db.fetch(`özelüyeyetkili_${message.guild.id}`, rol))) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setDescription("Yeterli yetkiniz bulunmuyor."));

 let kisi = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kisi) return message.channel.send(new Discord.RichEmbed().setColor('BLACK').setDescription(`**:warning: Lütfen bir kullanıcı etiketleyiniz!**`))

  let kisii = db.get(`özelüyerol_${message.guild.id}`)
 db.set(`özelüye_${kisi.id}`, 'özelüye')
kisi.addRole(kisii)
message.channel.send(new Discord.RichEmbed().setColor('BLACK').setDescription(`Başarıyla ${kisi} adlı üye **ÖZEL ÜYE** yapıldı!`))
let user = message.mentions.users.first();
  let özelüyelog = db.get(`özellog_${message.guild.id}`)
const özel_log = client.channels.get(özelüyelog);
    özel_log.send(
new Discord.RichEmbed()
    .setColor('BLACK')
    .setTimestamp()
   .setDescription('Bir kişi özel üye yapıldı!')
    .addField('Özel üye yapılan kullanıcı:', `${user.username}#${user.discriminator} (${kisi.id})`)
    .addField('Özel üye yapan yetkili:', `${message.author.username}#${message.author.discriminator}`)

)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'özel-üye-yap'
};
