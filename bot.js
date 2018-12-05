const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "#"// البرفكس هنا

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('By Wenteed')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')

  
  


});



const Discord = require("discord.js");
const x5bz = new Discord.Client();
x5bz.on('ready', () => {
  x5bz.user.setGame(` Just Shop Server.`,'https://www.twitch.tv/v5bz');
  console.log('Im Ready!');
});
/* YT: iiPixlSA */
x5bz.on('message', message => {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == 'bc') {
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('** You Dont Have `ADMINISTRATOR` Permission **');
            var bc = new Discord.RichEmbed()
            .setAuthor(`Just Shop`, 'https://cdn.discordapp.com/attachments/348164773352964113/435947257854951424/2e57650b6a8681e7b390c544b6e81e47.jpg')
            .addField('Server:', `${message.guild.name}`)
            .addField('By:', `${message.author.username}#${message.author.discriminator}`)
            .setColor('RANDOM')
            .addField('Message: ', args)
            m.send(`${m}`,{embed: bc});
        });
    }
});

 
 client.on('ready',async () => {
console.log("Starting..");
let g = client.guilds.get("499633648866164737");
let c = g.channels.get("500651445327233034");
if(c.type === 'voice') {
c.join();
setInterval(() => {
if(!g.me.voiceChannel) c.join();
}, 1);
} else {
console.log("Failed To Join:\n The Channel Type isn't \"text\"");
}
});
 
 
const adminprefix = "#";
const devs = ['323160008411971585'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
   
if (message.content.startsWith(adminprefix + 'setgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'av')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else    
if (message.content.startsWith(adminprefix + 'st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}
 
});





 
 
 
 
client.login(process.env.BOT_TOKEN);
