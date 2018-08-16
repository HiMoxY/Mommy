const Discord = require("discord.js");
const client = new Discord.Client();



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`$help|on [${client.guilds.size}]Servers `,)
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
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '478201694275108864').setName("w");
client.channels.find('id', '478201694275108864').setName("we");
client.channels.find('id', '478201694275108864').setName("wel");
client.channels.find('id', '478201694275108864').setName("welc");
client.channels.find('id', '478201694275108864').setName("welco ");
client.channels.find('id', '478201694275108864').setName("welcome");
client.channels.find('id', '478201694275108864').setName("welcome an");
client.channels.find('id', '478201694275108864').setName("welcome and ");
client.channels.find('id', '478201694275108864').setName("welcome and l");
client.channels.find('id', '478201694275108864').setName("welcome and le ");
client.channels.find('id', '478201694275108864').setName("welcome and lea ");
client.channels.find('id', '478201694275108864').setName("welcome and leav ");
client.channels.find('id', '478201694275108864').setName("welcome and leav ");
client.channels.find('id', '478201694275108864').setName("welcome and leave ");


  }, 3000);
});


client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '478850924090097676').setName("🔔-");
client.channels.find('id', '478850924090097676').setName("📣-a");
client.channels.find('id', '478850924090097676').setName("🔔-an");
client.channels.find('id', '478850924090097676').setName("📣-an");
client.channels.find('id', '478850924090097676').setName("🔔-ann ");
client.channels.find('id', '478850924090097676').setName("📣-anno ");
client.channels.find('id', '478850924090097676').setName("🔔-annou");
client.channels.find('id', '478850924090097676').setName("📣-annou ");
client.channels.find('id', '478850924090097676').setName("🔔-announ");
client.channels.find('id', '478850924090097676').setName("📢-announ ");
client.channels.find('id', '478850924090097676').setName("🔔-announc ");
client.channels.find('id', '478850924090097676').setName("📢-announce ");
client.channels.find('id', '478850924090097676').setName("🔔-announcem ");
client.channels.find('id', '478850924090097676').setName("📢-announceme ");
client.channels.find('id', '478850924090097676').setName("🔔-announcemen ");
client.channels.find('id', '478850924090097676').setName("📢-announcements ");
client.channels.find('id', '478850924090097676').setName("🔔-announcements ");

  }, 3000);
});


client.login(process.env.TOKEN);
