const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => {

  if(message.author.id !== "kendi idiniz") return message.channel.send(':x: Bu komutu kullanabilmen için sahibim olman gerekiyor.')

 let codeming = message.mentions.users.first() || client.users.get(args[0])
 let yasinn = args.slice(1).join(' ');


 if(!codeming) return message.reply(':x: **Black List** eklenecek kullanıcıyı etiketle veya İD kimliğini gir.')

 if(!yasinn) return message.reply(':x: Kullanıcının **Black List** e neden eklendiğini belirtin.')

 if(message.author.id === codeming.id) return message.reply(':x: Kendinizi kara listeye alamazsınız.')

 if(codeming.bot) return message.reply(':x: Bir botu **Black List** bölümüne alamazsın.')

  let veri = await db.fetch(`blacklistce_${codeming.id}`)

 if(veri) return message.reply('Anlaşılan **'+codeming.username+' Adlı kullanıcı zaten **Black List** de bulunuyor.')

let yasin = new Discord.RichEmbed()
.setTitle('✅ İşlem Başarılı!')
.setDescription(codeming.username + ' Adlı kullanıcı artık botun sadece `!black-kontrol` komutunu kullanabilecek.')
.addField('Black Liste Alınma Nedeni:', yasinn)
.setColor('RED')
message.channel.send(yasin)

message.delete()
 db.set(`blacklistce_${codeming.id}`, yasinn)
codeming.send(client.user.username + ' Botun Kara Listesine alındınız. \n\n **Neden**: `'+yasinn+'`')




};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'blacklist',
  description: 'taslak',
  usage: 'blacklist'
};
