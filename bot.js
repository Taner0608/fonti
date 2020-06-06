const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm Selam Knk Hoşgeldin');
  }
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});


client.on("guildMemberAdd", async member => {
  let kanal = await db.fetch(`sskanal_${member.guild.id}`)
   if(!kanal) return
  let sayaç = await db.fetch(`ssayı_${member.guild.id}`)
  let hgmsj = await db.fetch(`sayachgmsj_${member.guild.id}`)
  let bbmsj = await db.fetch(`sayacbbmsj_${member.guild.id}`)
  let sonuç = sayaç - member.guild.memberCount
  ///....


  ///....
   if(!hgmsj) {
client.channels.get(kanal).send(':loudspeaker: :inbox_tray: Kullanıcı Katıldı! `'+sayaç+'` Kişi Olmamıza `'+sonuç+'` Kişi Kaldı `'+member.guild.memberCount+'` Kişiyiz! `'+member.user.username+'`')
   }


  if(hgmsj) {
 var mesajs = await db.fetch(`sayachgmsj_${member.guild.id}`).replace("-uye-", `${member.user.tag}`).replace("-server-",  `${member.guild.name}`).replace("-uyesayisi-", `${member.guild.memberCount}`).replace("-botsayisi-",  `${member.guild.members.filter(m => m.user.bot).size}`).replace("-bolge-", `${member.guild.region}`).replace("-kanalsayisi-",  `${member.guild.channels.size}`).replace("-kalanuye-", `${sonuç}`).replace("-hedefuye-", `${sayaç}`)

 client.channels.get(kanal.id).send(mesajs)
 return
 }






  })
client.on("guildMemberRemove", async member => {
  let kanal = await db.fetch(`skanal_${member.guild.id}`)
  let sayaç = await db.fetch(`ssayı_${member.guild.id}`)
  let hgmsj = await db.fetch(`sayachgmsj_${member.guild.id}`)
  let bbmsj = await db.fetch(`sayacbbmsj_${member.guild.id}`)
  let sonuç = sayaç - member.guild.memberCount
  ///....

  if(!kanal) return
  if(!sayaç) return
  if(member.bot) return
  ///....

  if(!bbmsj) {
    client.channels.get(kanal).send(':loudspeaker: :outbox_tray: Kullanıcı Ayrıldı. `'+sayaç+'` Kişi Olmamıza `'+sonuç+'` Kişi Kaldı `'+member.guild.memberCount+'` Kişiyiz! :x: `'+member.user.username+'`')
  return
  }

  if(bbmsj) {
 var mesajs = await db.fetch(`sayacbbmsj_${member.guild.id}`).replace("-uye-", `${member.user.tag}`).replace("-server-",  `${member.guild.name}`).replace("-uyesayisi-", `${member.guild.memberCount}`).replace("-botsayisi-",  `${member.guild.members.filter(m => m.user.bot).size}`).replace("-bolge-", `${member.guild.region}`).replace("-kanalsayisi-",  `${member.guild.channels.size}`).replace("-kalanuye-", `${sonuç}`).replace("-hedefuye-", `${sayaç}`)

 client.channels.get(kanal).send(mesajs)
 }



  })

  client.on('guildMemberAdd',async member => {
  let kontrol =  await db.fetch(`reklamisim_${member.guild.id}`)
  if(!kontrol) return;
    let s = member
    if(s.includes('join') || s.includes('discord') || s.includes('invite') || s.includes('davet')) {
  //CodEming/ft.Yasin..
      member.guild.ban(member, {reason: 'Fonti Reklam İsim Ban Sistemi.'})
    }

  })



  client.on('guildMemberAdd', async member => {
  if (member.id !== "607510984281554984") {
  }else{
  member.guild.owner.send(`İşe bak! Sahibim sunucunuzda belirdi! <@607510984281554984>`)
  }
  });


  client.on("message", async msg => {
  const request = require('node-superfetch');
  const db = require('quick.db');
  const ms = require('parse-ms')
  const özelmesaj = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription(':star: Bu bir özel üye!!')

  let zaman = 1000000
  let golddd = await db.fetch(`özelüye_${msg.author.id}`);
  let w = db.fetch(`özelüye_${msg.author.id}`)
            if (w == 'özelüye') {
      if (golddd !== null && zaman-(Date.now() - golddd) > 0) {
          let zamann = ms(zaman- (Date.now() - golddd));
      } else {
    if(msg.author.bot) return;
    if (msg.content.length > 1) {
  db.set(`özelüye_${msg.author.id}`, Date.now());

  msg.channel.send(özelmesaj).then(m =>{m.delete(5000)});

    }
  };
            }
     else if (w == undefined) {
            }
            if (!w) return;

  });











































































client.login(ayarlar.token);
