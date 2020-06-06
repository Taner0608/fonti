const Discord = require('discord.js');
const db = require('quick.db')
const moment = require('moment')
const generator = require('generate-password');
exports.run = async(client, message, args) => {

if(message.author.id !== "607510984281554984") return message.channel.send(':x: Kod oluşturmak için yeterli yetkiye sahip değilsin.')

let CodEming = args[0]

if(CodEming < 5) message.reply(':x: beş saniyeden az kod oluşturamam.')
if(!CodEming) return message.reply('Bir sayı girmelisin.')
if(isNaN(CodEming)) message.reply(':x: Bir sayı girmelisin.')


  let kontrol = await db.fetch(`kod`)
  if(kontrol) return message.reply('Diğer kod kullanılana kadar başka kod oluşturamazsınız.')

  message.channel.send('📭 | **DM** kutunu kontrol et!')

         var mete = generator.generate({
        length: 10,
        numbers: true,
         })


   let umut = CodEming * 1000


message.author.send('Kod: **'+mete+'** \n\n Süre: **'+CodEming+'** Saniye')

 db.set(`kod`, mete)
  db.set(`kodsure`, umut)



  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kod-yap', 'kod-oluştur'],
  permLevel: 0
};

exports.help = {
  name: 'bot-yap',
  description: 'taslak',
  usage: 'bot-yap'
};
