const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async (bot, message, args) => {

if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`? Bu komutu kullanabilmek için **yeterli izne sahip değilsin!**`);

  let dımbıllı = args.slice(1).join(' ')
  if (!args[0]) return message.channel.send('Kimi banlıcağımı Yazmadın.')
  let CodEming = message.mentions.users.first() || bot.users.get(args[0]) || message.guild.members.find(u => u.user.username.toLowerCase().includes(args[0].toLowerCase())).user
  if (!CodEming) return message.channel.send('? Kullanıcıyı bulamadım.')
  let Yasin = message.guild.member(CodEming)
  if (!Yasin) return message.channel.send('? Kullanıcıyı **bulamadım.**')
  if (Yasin.hasPermission("MANAGE_MESSAGES")) return message.channel.send('?? Bu kişi **yetkili!**')
  if (!dımbıllı) return message.reply('? ban sebebini yazmalısın.').catch(console.error);
  message.channel.send(` ?? **${CodEming.tag}** adlı kullanıcıyı banlamak istediğinize **emin misiniz?** Lütfen **evet (e)** veya **hayır (h)** ile cevap verin.\n\n\`30\` saniye içerisinde iptal edilcektir.`)
  let Selin = false;
  while (!Selin) {
    const response = await message.channel.awaitMessages(neblm => neblm.author.id === message.author.id, { max: 1, time: 30000 });
    const MrDevil = response.first().content
    if (MrDevil == 'hayır' || MrDevil == 'h') return message.channel.send('?? İşlem iptal **edildi.**')
    if (MrDevil !== 'evet' && MrDevil !== 'e') {
      message.channel.send('? Lütfen sadece **evet (e)** veya **hayır (h)** ile cevap verin.')
    }
    if (MrDevil == 'evet' || MrDevil == 'e') Selin = true
  }
  if (Selin) {
    let uyarı = await db.add(`uyarı.${CodEming.id+message.guild.id}`, 1)
    message.channel.send(` ?? **${CodEming.tag}** Başarıyla **banlandı!**`)
    CodEming.send(` ?? **${message.guild.name}** adlı sunucudan **banlandınız!**\n*Sebep:* \`\`\`${dımbıllı}\`\`\``)
    CodEming.send(`https://tenor.com/view/banned-thor-gif-6072837`)
    let baroo = new Discord.RichEmbed()
    .setColor("#FFB900")
    .setAuthor(`?? ${CodEming.username} adlı kişi banlandı!`,
               CodEming.avatarURL||CodEming.defaultAvatarURL)
    .addField('?? Banlanan Kullanıcı', `**${CodEming.tag}** **[**\`${CodEming.id}\`**]**`, true)
    .addField('?? Balayan Yetkili', `**${message.author.tag}** **[**\`${message.author.id}\`**]**`, true)
    .addField('?Ban Nedeni', dımbıllı, true)
    message.guild.member(CodEming).ban();
    let membermodChannel = await db.fetch(`membermodChannel_${message.guild.id}`)
    if (!message.guild.channels.get(membermodChannel)) return
    else message.guild.channels.get(membermodChannel).send(baroo)
  message.channel.send(baroo)}
  else return console.log('Hata var')

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ban"],
  permLevel: 2
};
exports.help = {
  name: 'ban',
  description: 'İstediğiniz kişiyi uyarır.',
  usage: 'ban [kullanıcı] [sebep]'
};
