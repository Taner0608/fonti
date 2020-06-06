const Discord = require("discord.js");
const client = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL('dbl tokeni buraya', client);
exports.run = (client, message) => {
    dbl.hasVoted(message.author.id).then(voted => {
        if (!voted) {
            message.reply("Bu komutu kullanabilmek için DBL üzerinden oy vermen gerekiyor. (Eğer oy verdiyseniz bi kaç dakika bekleyin .s) \nOy vermek için: https://discordbots.org/") //botunuzun dbl vote linkini yazın

        } else {
            message.channel.send("Destekçi rolün verildi.");
            message.member.addRole("660838569996320808")//oy verince eklenecek rol id

        }
    })
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["upvote", "oyverdim"],
  permLevel: 0,
  kategori: "kullanıcı"
};

exports.help = {
  name: 'oyver',
  category: 'kullanıcı',
  description: 'Destekçi rolü alırsın.',
  usage: '/oyverdim'
};
