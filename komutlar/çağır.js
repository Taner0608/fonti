const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => {

  let CodEming = args.slice(0).join(' ');

  let sahipid = "607510984281554984"


  if(!CodEming) return message.reply('`Sahibimi` neden bu sunucuya çağırmam gerektiğini yazmalısın.')

  if(CodEming.length < 10) return message.reply('Çağırma nedeni `10` karakterden az olamaz.')

  message.channel.createInvite({maxAge: 0}).then((invite) => {


    let yasinn_melek = new Discord.RichEmbed()
    .setTitle('Sunucuya Çağırıldın.!')
    .addBlankField()
    .addField('Sunucu:', `Sunucu İsmi: ${message.guild.name} \n Sunucu İD: ${message.guild.id} \n Sunucu Sahibi: ${message.guild.owner} \n Üye Sayısı: ${message.guild.memberCount}`)
    .addField('Çağıran:', `İsim: ${message.member.user.username} (<@!${message.author.id})\n İD: ${message.author.id} \n Çağırdığı Kanal: ${message.channel.name}`)
    .addField('Çağırma İsteği:', `Çağırma Nedeni: ${CodEming} \n Sunucu Daveti: [Link](${invite.url})`)
    .setColor('RED')
    client.users.get(sahipid).send(yasinn_melek)



    let CodEmingKontrol = client.users.get(sahipid)
    if(!CodEmingKontrol) return message.channel.send('Sahip İD bölümünü doldurmadığınız için veya yanlış İD girdiğiniz için sistem çağırma mesajını gönderemedi.')






  })



};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'çağır',
  description: 'Sahibimi sunucuya çağırırsınız',
  usage: 'çağır'
};
