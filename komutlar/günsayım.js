const Discord = require("discord.js");
const moment = require("moment");

exports.run = async (client, message, args) => {
  let CodEmingUye = message.mentions.users.first() || message.author;
  const CodEmingDiscordTarih = new Date().getTime() - CodEmingUye.createdAt.getTime();
  const CodEmingSunucuTarih =
    new Date().getTime() -
    message.guild.members.get(CodEmingUye.id).joinedAt.getTime();
  const CodemingGün = moment
    .duration(CodEmingDiscordTarih)
    .format("D [gün], hh [saat], mm [dakika'dır]");   
  const HüseyinGün = moment
    .duration(CodEmingSunucuTarih)
    .format("D [gün], hh [saat], mm [dakika'dır]");
  message.channel.send(
    `\`${CodemingGün}\` **discorda** kayıtlı.\n \`${HüseyinGün}\` **sunucumuza** üye.`
  );
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["günsayım"],
  permLevel: 0
};

exports.help = {
  name: "gün-sayım",
  description: "Discord'a Kayıtlı Olduğunuz ve Bulunduğunuz Sunucuya Kayıtlı Olduğunuz Zaman.",
  usage: "gün-sayım"
};
