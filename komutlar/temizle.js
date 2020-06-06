const Discord = require('discord.js');


exports.run = async function(client, message, args) {

  if(!message.member.hasPermissions("MANAGE_MESSAGES")) {
   return  message.channel.send("Mesajları Yönet Yetkin Yok!")
}


  var codeming = args.slice(0).join(' ')

  if (!codeming) return message.reply("Temizlemek istediğin mesaj sayısını yazmalısın!")

  if (isNaN(codeming)) return message.reply("Temizlemek istediğin mesaj sayısını yazmalısın!")

  if (codeming < 1) return message.reply("**1** adetten az mesaj silemem!")
  if (codeming > 100) return message.reply("**100** adetten fazla mesaj silemem!")

  let yasin = await message.channel.fetchMessages({limit: args[0]})

  message.channel.bulkDelete(yasin)
  .catch(error => message.channel.send("`14` günden önceki mesajları silemem!"))

  message.channel.send(`●▬▬▬ Fonti - Sohbet Silici ▬▬▬● \n\n Silen yetkili : ${message.author} \n Silinen mesaj sayısı : **${args[0]}** \n\n`).then(msg => {
    msg.delete(15000)
})

    message.delete();
    console.log(`temizle komutu ${message.author.username} Tarafından kullanıldı`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sil", "mesaj-sil", "mesajları-sil"],
  permLevel: 1
};

exports.help = {
  name: 'temizle',
};
