const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => {

 let umut = args[0]
 let melek = await db.fetch(`kod`)
 let CodEming = await db.fetch(`kodsure`)

 if(!melek) return message.channel.send(':x: Sistemde herhangi bir kod bulunamadı.')

 if(!umut) return message.reply(':x: Bir kod girmelisiniz.')

 if(umut !== melek) return message.reply(':warning: Hatalı veya kullanılmış bir kod girdiniz.')

  message.channel.send(':tada: Gold Üyeliğiniz **'+CodEming+' ms süresince aktif hale geldi.')
   db.delete(`kod`)
 db.delete(`kodsüre`)
  //--------------------------------
  db.set(`veriniz`, 'aktif') // GOLD ÜYE VERİNİZİ BURAYA YAZMAYI UNUTMAYIN YOKSA ÇALIŞMAZ
  //--------------------------------


  setTimeout(() => {
 message.channel.send(':x: <@!'+message.author.id+'> Gold üyeliğiniz artık bitti.')


    //--------------------------------
  db.delete(`veriniz`) // GOLD ÜYE VERİNİZİ BURAYA YAZMAYI UNUTMAYIN YOKSA ÇALIŞMAZ
  //--------------------------------
 },CodEming)


  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kod-kullan',
  description: 'taslak',
  usage: 'kod-kullan'
};
