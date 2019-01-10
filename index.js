const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const moment = require("moment");  
const math = require('math-expression-evaluator');
const figlet = require('figlet');
const ms = require("ms");
const Util = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const GOOGLE_API_KEY = 'AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8';
const youtube = new YouTube(GOOGLE_API_KEY);
const queue = new Map();
const superagent = require("superagent");
const prefix = '?'

client.on('ready', () => { 
    console.log(`
    ------------------------------------------------------
    > Logging in...
    ------------------------------------------------------
    Name ${client.user.tag}
    In ${client.guilds.size} servers!
    ${client.channels.size} channels and ${client.users.size} users cached!
    I am logged in and ready to roll!
    LET'S GO!
    ------------------------------------------------------
    ------------------------------------------------------
    ------------------------------------------------------
    -----------------------[ HiMoxY™ ]--------------------`);
  });



const devs = ['298471670585229324' , '' , '' , ''];
const adminprefix = "!!";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'play')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`Done **${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`Done **${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`Done **${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'photo')) {
    client.user.setAvatar(argresult);
      message.channel.sendMessage(`Done **${argresult}**`);
  } else 
  if (message.content.startsWith(adminprefix + 'name')) {
    client.user.setUsername(argresult).then
        message.channel.sendMessage(`Done **${argresult}**`)
    return message.reply("i can change name after 2 hours");
  } else
  if (message.content.startsWith(adminprefix + 'tw')) {
    client.user.setGame(argresult, "https://www.twitch.tv/himoxytm/");
      message.channel.sendMessage(`done changed to twitch **${argresult}**`)
  }
  });



client.on('message', msg => {
  if (msg.content === prefix + 'ping') {
    msg.reply(`pong ${client.pings}`);
  }
});




client.on("message", message => {
    if (message.content === prefix + "General" || message.content === prefix + "general" ||message.content === prefix + "GENERAL") {
        message.reply('bot is been sent in private with the information').then(message => {message.delete(20000)})
        message.react('✉')
        if(!message.channel.guild) return message.reply('This command only for servers ⁉');
     const embed = new Discord.RichEmbed() 
         .setColor("#ffff00")
         .setDescription(`
         ***__General orders__***
       
『?play / play music radio』 
『?id / your profile id』
『?invite/ Add bot to server』
『?embed/ The bot repeats the words I you type for him in a boxed window !』
『?say /The bot repeats the words I you type for him』
『?roles / roles of server 』
『mention bot / he will respond to you mean @HiMoxY™#7798』
『?server / information about The server』
『?animal/ send pictures of animal』
『?meme/ send pictures of memes』
『?gif/ send pictures of gif』
『?hug/ send pictures of hug with __someone__ (@mention) 』
         
『?cats/ send pictures of』
『?avatar/ free access to personnel account picture』
『?time/ if you want to see time of your country』
『?dt/ Offers time in UAE, Makkah, Egypt and history』 
『?stats/ uptime』
         `)


         message.author.sendEmbed(embed)
         
         }
}); 


client.on("message", message => {
    if (message.content === prefix + "orders" || message.content === prefix + "Orders" ||message.content === prefix + "ORDERS") {
        message.reply('bot is been sent in private with the information').then(message => {message.delete(20000)})
        message.react('✉')
        if(!message.channel.guild) return message.reply('This command only for servers ⁉');
     const embed = new Discord.RichEmbed() 
         .setColor("#ffff00")
         .setDescription(`
         ***__Bot orders__***
     
『?ping / if you want to see ping of the bot』
『?uptime / It shows you how much pot is running』
『?support / Server support』
『?invite / Add bot to server』
『?twitch/ this is twitch channel of the developer』
『?member / Members Status』
『?bot / Basic Information About the bot』
『?donation/ to supporting server』
         `)


         message.author.sendEmbed(embed)
         
         }
}); 


client.on("message", message => {
    if (message.content === prefix + "music" || message.content === prefix + "Music" ||message.content === prefix + "MUSIC") {
        message.reply('bot is been sent in private with the information').then(message => {message.delete(20000)})
        message.react('✉')
        if(!message.channel.guild) return message.reply('This command only for servers ⁉');
     const embed = new Discord.RichEmbed() 
         .setColor("#ffff00")
         .setDescription(`
         ***__Comands music__***
✦ **play music** = **?play** and link song or name play a song from YouTube
✦ **pause song** = **?pause** to Pause the music
✦ **resume the song** = **?resume** to Resume the music
✦ **stop song** = **?stop** Stops the music
✦ **skip** = **?skip** Skip a next song
✦ **queue** = **?queue** The song that now playing
✦ **volume** = **?volume** Change the volume of the bot from 1 to 100
✦ **about** = **?about** about the bot
         `)


         message.author.sendEmbed(embed)
         
         }
}); 

client.on("message", message => {
    if (message.content === prefix + "admin" || message.content === prefix + "Admin" ||message.content === prefix + "ADMIN") {
        message.reply('bot is been sent in private with the information').then(message => {message.delete(20000)})
        message.react('✉')
        if(!message.channel.guild) return message.reply('This command only for servers ⁉');
     const embed = new Discord.RichEmbed() 
         .setColor("#ffff00")
         .setDescription(`
         ***__Administrative Orders__***
        
『?kick / kick』
『?ban / ban』
『?mute /mute』
『?unmute /unmute』
『?mutechannel /mutechannel』
『?unmutechannel /unmutechannel』
『?add.r / add role』
『?server-av /avatar of the bot』
         `)


         message.author.sendEmbed(embed)
         
         }
}); 


client.on('message', message => {
    if (message.content === prefix +"help" || message.content === prefix +"Help" || message.content === prefix +"HELP") {
    if(!message.channel.guild) return message.reply('This command only for servers');
    let embed = new Discord.RichEmbed()
  .setColor('BLACK')
  .setFooter(`ID: ${message.author.username}#${message.author.discriminator}`)
  .setDescription(`
  :warning: this command list. for a detailed guide on the usage of DST bot :speech_balloon:
  
✦ **${prefix}admin** =  commands admins 🛠
✦ **${prefix}orders** = orders ⛑
✦ **${prefix}General** = General commands 🎪
✦ **${prefix}music** = music commands 🎵
  `)
  .setTimestamp()
  .setFooter(`Requested by ${message.author.username}`)
    message.channel.sendEmbed(embed);
  }
});
client.on('message', message => {
       if(message.content.startsWith(`${prefix}inv`)){
           if(!message.channel.guild) return message.channel.send("This Command is Just For Servers!")
           var embed = new Discord.RichEmbed()
           .setTitle("HiMoxY bot")
           .setURL("https://discordapp.com/oauth2/authorize/?permissions=805314622&scope=bot&client_id=518078686772068354")
           .setTimestamp()
           .setColor("#1385b9")
           message.channel.send({embed})
       }
   });
client.on('message', message => {
       if(message.content.startsWith(`${prefix}support`)){
           if(!message.channel.guild) return message.channel.send("This Command is Just For Servers!")
           var embed = new Discord.RichEmbed()
           .setTitle("join HiMoxY™ support")
           .setURL("https://discord.gg/uXk2DjU")
           .setTimestamp()
           .setColor("#06f500")
           message.channel.send({embed})
       }
   });
  
var cats = [

"https://d.top4top.net/p_902xtbbr1.jpg",
"https://e.top4top.net/p_902ijp1y1.jpg",
"https://e.top4top.net/p_901kfk8l1.jpg",
"https://c.top4top.net/p_902cdjxe1.jpg",
"https://f.top4top.net/p_902ezjsq1.jpg",
"https://c.top4top.net/p_902s0a5p1.jpg",
"https://d.top4top.net/p_9024axlu1.jpg",
"https://f.top4top.net/p_902bcq951.jpg",
"https://c.top4top.net/p_9020jjms1.jpg",
"https://b.top4top.net/p_9025r1a31.jpg",
"https://d.top4top.net/p_902mhfcc1.jpg",
"https://e.top4top.net/p_902k4zba1.jpg",
"https://a.top4top.net/p_902srhhb1.jpg",
"https://b.top4top.net/p_902sq75i1.jpg",
"https://e.top4top.net/p_90205qtg1.jpg",
"https://b.top4top.net/p_9020xqmm1.jpg",
"https://e.top4top.net/p_902iydbc1.jpg",
"https://b.top4top.net/p_902f2gft1.jpg",
"https://c.top4top.net/p_902rrxkb1.jpg",
"https://d.top4top.net/p_902e3bsd1.jpg",
"https://e.top4top.net/p_902e3ul01.jpg",
"https://a.top4top.net/p_902x8eyq1.jpg",
"https://b.top4top.net/p_9024tmi71.jpg",
"https://f.top4top.net/p_902llnpr1.jpg",
"https://b.top4top.net/p_902rlmix1.jpg",
"https://a.top4top.net/p_902q3s9f1.jpg",
"https://d.top4top.net/p_9024bazr1.jpg",
"https://f.top4top.net/p_902hxb4d1.jpg",
"https://b.top4top.net/p_902w2iw01.jpg",
"https://e.top4top.net/p_902gf4w41.jpg",
"https://c.top4top.net/p_902d3txz1.jpg",
"https://a.top4top.net/p_902bgd671.jpg",
"https://b.top4top.net/p_902r506i1.jpg",
"https://f.top4top.net/p_902o80kv1.jpg",
"https://a.top4top.net/p_902h40fm1.jpg",
"https://c.top4top.net/p_9026k67j1.jpg",
"https://e.top4top.net/p_902oe0ju1.jpg",
"https://b.top4top.net/p_902rtd071.jpg",
"https://f.top4top.net/p_902e7vlw1.jpg",
"https://b.top4top.net/p_902hd5tg1.jpg",
"https://e.top4top.net/p_902j1nhd1.jpg",
"https://e.top4top.net/p_902qtdum1.jpg",
"https://f.top4top.net/p_9024t6g61.jpg",
"https://a.top4top.net/p_902p47431.jpg",
"https://a.top4top.net/p_902oqjst1.jpg",
"https://d.top4top.net/p_9025jiiz1.jpg",
"https://a.top4top.net/p_9023abjx1.jpg",
"https://d.top4top.net/p_902b8txi1.jpg",
"https://b.top4top.net/p_902bmg961.jpg",
"https://a.top4top.net/p_902pk5rf1.jpg",
"https://a.top4top.net/p_9027vfr71.jpg",
"https://c.top4top.net/p_902fiiir1.jpg",
"https://e.top4top.net/p_902leqoi1.jpg",
"https://e.top4top.net/p_9025pcel1.jpg",
"https://f.top4top.net/p_90250ngs1.jpg",
"https://b.top4top.net/p_902pfaam1.jpg",
"https://c.top4top.net/p_902et23r1.jpg",
"https://d.top4top.net/p_9025hdnu1.jpg",
"https://c.top4top.net/p_902ja55j1.jpg",
"https://d.top4top.net/p_902ol3tc1.jpg",
"https://e.top4top.net/p_902bmi4n1.jpg",
"https://a.top4top.net/p_902jkh421.png",
"https://c.top4top.net/p_902ghtp41.jpg",
"https://d.top4top.net/p_902d7wsi1.jpg",
"https://f.top4top.net/p_902sng1m1.jpg",
"https://b.top4top.net/p_9023u61r1.png",
"https://d.top4top.net/p_902lo8911.jpg",
"https://e.top4top.net/p_902fg3ic1.jpg",
"https://f.top4top.net/p_902g6yqx1.jpg",
"https://a.top4top.net/p_9028m4w11.jpg",
"https://c.top4top.net/p_902d8t0d1.jpg",
"https://e.top4top.net/p_902ntpje1.jpg",
"https://f.top4top.net/p_902pyauh1.jpg",
"https://b.top4top.net/p_902d98af1.jpg",
"https://e.top4top.net/p_902xo85y1.jpg",
"https://b.top4top.net/p_902vnh1x1.jpg",
"https://f.top4top.net/p_902rz8v81.jpg",
"https://c.top4top.net/p_902wehtq1.jpg",
"https://e.top4top.net/p_902i0s671.jpg",
"https://e.top4top.net/p_9021574t1.jpg",
"https://b.top4top.net/p_9026c0xw1.jpg",
"https://c.top4top.net/p_902xgin71.jpg",
"https://e.top4top.net/p_902krozb1.jpg",
"https://f.top4top.net/p_902rw4cz1.jpg",

]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'cats')) {
         var gore = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(gore);
    }
});


client.on('message', function(message) {
    if (message.content === prefix + "bot" || message.content === prefix + "Bot" || message.content === prefix + "BOT") {
    if(!message.channel.guild) return message.reply('This command only for servers ⁉');
     message.channel.send({
     embed: new Discord.RichEmbed()
    .setAuthor(client.user.username,client.user.avatarURL)
    .setThumbnail(client.user.avatarURL)
    .setColor('BLACK')
    .setTitle('``INFO DST Bot`` ')
    .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
    .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
    .addField('``servers``', [client.guilds.size], true)
    .addField('``channels``' , `[ ${client.channels.size} ]` , true)
    .addField('``Users``' ,`[ ${client.users.size} ]` , true)
    .addField('``My Name``' , `[ HiMoxY™#1027 ]` , true)
    .addField('``My ID``' , `[ ${client.user.id} ]` , true)
    .addField('``My Prefix``' , `[ ${prefix} ]` , true)
    .addField('``My Language``' , `[ Java Script ]` , true)
    .setFooter('Creator ID: HiMoxY™#1027')
    .setFooter(`Requested by ${message.author.username}`)
    .setTimestamp()
 })
 }
 });


client.on("message", message => {
     if (message.content === prefix + "twitch") {
         if(!message.channel.guild) return message.reply('** This command only for servers **');
        message.reply("this is my twitch channel💯 : https://www.twitch.tv/himoxytm :) ")
     }
});
client.on("message", message => {
     if (message.content === prefix + "donation") {
         if(!message.channel.guild) return message.reply('** This command only for servers **');
        message.reply("If you want to support us click this link and show some love!💰💰 : https://www.paypal.me/HiMoxY")
     }
});
 
    client.on('message', message => {
    if(message.content.startsWith(prefix + 'avatar')) {
         var men = message.mentions.users.first();
      var heg;
      if(men) {
          heg = men
      } else {
          heg = message.author
      }
  var avatar = new Discord.RichEmbed()
.setColor('RANDOM')
.setFooter(" HiMoxY™")
.setTimestamp()
.setTitle(heg.username)
.setImage(heg.avatarURL)

message.channel.sendEmbed(avatar)
    }
});
client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = msg.content.split(" ").slice(1);


if (command == prefix + "by") {
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor(msg.author.username, msg.author.avatarURL)
    .setDescription(args.join(" "))
    .setFooter(" HiMoxY™ ")
    .setTimestamp()
    msg.channel.sendEmbed(embed);
    msg.delete();
  }
});
 client.on('guildCreate', guild => {
  client.channels.get("494594801052942336").send(`**the bot has been added in new server 
Server name: __${guild.name}__
Server owner: __${guild.owner}__**`)
}); 


client.on('message', async message =>{
    if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;
        let command = message.content.split(" ")[0];
        command = command.slice(prefix.length);
        let args = message.content.split(" ").slice(1);
          if(command === "d" || command === "delete" || command === "effacer" || command === "Delete") {
              if(!message.channel.guild) return message.reply('This command only for servers ⁉');
            if(!message.channel.guild) return;
            if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send('You do not have permission ⚠').then(msg => {
              setTimeout(() => {
                msg.edit(`don't try again 👌`);
             },1500);
            });
            if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send('**Bot** does not have permission ').then(msg => {
              setTimeout(() => {
                msg.edit('You should give bot a good role and try again ok');
             },1500);
            });
            let user = message.mentions.users.first();
              const emoji = client.emojis.find("name", "wastebasket")
          let textxt = args.slice(0).join("");
          if(message.member.hasPermission("MANAGE_MESSAGES")) {
          if (textxt == "") {
              message.delete().then
          message.channel.send("but any number of messeges you want to remove ??").then(m => m.delete(3000));
               } else {
          message.delete().then
          message.delete().then
          message.channel.bulkDelete(textxt);
              message.channel.send("\ndone i removed 🗑 " + textxt + "\n").then(msg => {
                setTimeout(() => {
                  msg.edit(`🚬💨💨💨`);
               },1500);
               setTimeout(() => {
                msg.edit(`🚬💨💨`);
             },1700);
             setTimeout(() => {
              msg.edit(`🚬💨`);
           },1900);
           setTimeout(() => {
            msg.edit(`🚬`).then(m => m.delete(3000));
         },2100);
              });
              }    
          }
      }
    });
    

const cuttweet = [
     '❔. ``questions`` : ``What would your perfect room look like?``',
     '❔. ``questions`` : ``When was the last time you climbed a tree?``',
     '❔. ``questions`` : ``What skill would you like to master?``',
     '❔. ``questions`` : ``What would be your first question after waking up from being cryogenically frozen for 100 years?``',
     '❔. ``questions`` : ``What shows are you into?``',
     '❔. ``questions`` : ``What TV channel doesn’t exist but really should?``',
     '❔. ``questions`` : ``What age do you wish you could permanently be?``',
     '❔. ``questions`` : ``What TV show or movie do you refuse to watch?``',
     '❔. ``questions`` : ``What would be your ideal way to spend the weekend?``',
     '❔. ``questions`` : ``What’s something you’ve been meaning to try but just haven’t gotten around to it?``',

     '❔. ``questions`` : ``How different was your life one year ago?``',
     '❔. ``questions`` : ``How is your Sex life?``',
     '❔. ``questions`` : ``What would you rate 10 / 10?``',
     '❔. ``questions`` : ``What kind of art do you enjoy most?``',
     '❔. ``questions`` : ``Why did you decide to do the work you are doing now?``‏',
     '❔. ``questions`` : ``What is the luckiest thing that has happened to you?``',
     '❔. ``questions`` : ``Where is the most relaxing place you’ve ever been?``',
     '❔. ``questions`` : ``Do you have a Girl/Boy-friend?``',
     '❔. ``questions`` : ``what is your name?``',
     '❔. ``questions`` : ``how many hours do you spend gaming every day?``',
     '❔. ``questions`` : ``whats is your favourite celebrities ?``',
     '❔. ``questions`` : `` what hobbies are you into ?‏``',
     '❔. ``questions`` : `` What do you think about Morocco?``',
     '❔. ``questions`` : `` what is your favourite food ?``',

     '❔. ``questions`` : `` What sports do you like?‏``',
     '❔. ``questions`` : `` What Video Games do you like?``',
     '❔. ``questions`` : ``How old are you?``',
     '❔. ``questions`` : `` Are you married?``',
     '❔. ``questions`` : ``Do you have any kids?``',
     '❔. ``questions`` : ``how do you like this discord ?``',
     '❔. ``questions`` : ``whats is your favourite celebrities ?``',
     '❔. ``questions`` : ``from 1 to 9000 how much do you like memes ?``',
     '❔. ``questions`` : ``would you like to fight one duck sized elephant or one million elephants sized ducks ?``',
     '❔. ``questions`` : `` would you like to fight one baby sized elephant or one thousand babys sized elephants ?``',
     '❔. ``questions`` : `` peanut butter or jelly ?``',
     '❔. ``questions`` : ``what happens when you get scared half to death twice ?``',
     '❔. ``questions`` : ``is it true cannibals dont eat clowns be cause they taste funny ?``',
     '❔. ``questions`` : ``if all the worlds a stage , where does the audiences sit ?``',
     '❔. ``questions`` : ``is it true cannibals dont eat clowns be cause they taste funny ?``',
     '❔. ``questions`` : ``if it is tourist season why cant we shoot them ?``',

     '❔. ``questions`` : ``why are the alphabets in the order that they are ? is it because its a song?``',
     '❔. ``questions`` : ``If someone cant see, they are blind and if someone cant hear, they are deaf, so what do you call people who cant smell?``',
     '❔. ``questions`` : ``How do they get those boats in those glass bottles?``',
     '❔. ``questions`` : ``Why would superman want to leap over the tallest building in a single bound if he can fly?``',
     '❔. ``questions`` : ``Why is it called a TV set when there is only one?``',
     '❔. ``questions`` : ``If it is zero degrees outside today and it s supposed to be twice as cold tomorrow, how cold is it going to be?``',
     '❔. ``questions`` : ``How did the headless horseman know where he was going?``',
     '❔. ``questions`` : `` Why do they call it an escalator if it takes you down?``',
     '❔. ``questions`` : ``Why is it called football when you hardly use your feet?``',
     '❔. ``questions`` : ``How come some Little Debbie snack cakes come in a twin pack and others are wrapped individually?``',
     '❔. ``questions`` : ``Do cows drink milk?``',
     '❔. ``questions`` : ``Can a guy named Nick have a "nick" name?``',
     '❔. ``questions`` : ``If a person owns a piece of land do they own it all the way down to the core of the earth?``',
     '❔. ``questions`` : ``Since we see little birdies when we just get knocked out, what do little birdies see when they just get knocked out?``',
     '❔. ``questions`` : ``Why are semi-trucks bigger than regular trucks?``',
     '❔. ``questions`` : ``Why is an alarm clock going "off" when it actually turns on?``',
     '❔. ``questions`` : ``If you wore a Teflon suit, could you ever end up in a sticky situation?``',
     '❔. ``questions`` : ``How fast do hotcakes sell?``',

     '❔. ``questions`` : ``If you mated a bull dog and a shih tzu, would it be called a bullbleep?``',
     '❔. ``questions`` : ``Why are they called stairs inside but steps outside?``',
     '❔. ``questions`` : ``Does the President have to pay taxes?``',
     '❔. ``questions`` : ``Why do they put "for indoor or outdoor use only" on Christmas lights?``',
     '❔. ``questions`` : ``If Dracula has no reflection, how comes he always had such a straight parting in his hair?``',
     '❔. ``questions`` : ``If an ambulance is on its way to save someone, and it runs someone over, does it stop to help them?``',
     '❔. ``questions`` : ``Why is Grape Nuts cereal called that, when it contains neither grapes, nor nuts?``',
     '❔. ``questions`` : ``If Jimmy cracks corn and no one cares, why is there a song about him?``',
     '❔. ``questions`` : ``Why do drugstores make the sick walk all the way to the back of the store to get their prescriptions while healthy people can buy cigarettes at the front?``',
     '❔. ``questions`` : ``What ever happened to an E grade? We have A,B,C,D,F but no E.``',
     '❔. ``questions`` : ``Why is there a light in the fridge and not in the freezer?``',
     '❔. ``questions`` : ``Dont you find it worrying that doctors call treating you their "practice"?``',
     '❔. ``questions`` : ``Is the word "dictionary" in the dictionary?``',
     '❔. ``questions`` : ``What do you call a female daddy long legs?``',

     '❔. ``questions`` : ``If croutons are stale bread, why do they come in airtight packages?``',
     '❔. ``questions`` : ``Why cant women put on mascara with their mouth closed?``',
     '❔. ``questions`` : ``If a transport truck carrying a load of cars gets into a car accident, does it increase the number of the cars in the pile-up?``',
     '❔. ``questions`` : ``In France do people just ask for toast and get French toast or do they have to ask for American toast?``',
     '❔. ``questions`` : ``Why is it called a "drive through" if you have to stop?``',
     '❔. ``questions`` : ``Why does mineral water that has "trickled through mountains for centuries" go out of date next year?``',
     '❔. ``questions`` : ``If Milli Vanilli fell in the woods, would someone else make a sound?``',
     '❔. ``questions`` : ``Why are softballs hard?``', 

     '❔. ``questions`` : ``Can vampires get AIDS?``',
     '❔. ``questions`` : ``Why do toasters always have a setting that burns the toast to a horrible crisp which no decent human being would eat?``',
     '❔. ``questions`` : ``Why are they called goose bumps? Do geese get people bumps?``',
     '❔. ``questions`` : ``If you are born at exactly midnight is your birthday on both those days?``',
     '❔. ``questions`` : ``If you are caught "between a rock and a hard place", is the rock not hard?``',
     '❔. ``questions`` : ``Why is it we have the weight of the world on our shoulders but have to get it off our chests?``',
     '❔. ``questions`` : ``If you tell someone they are being judgmental aren t you being judgmental yourself?``',
     '❔. ``questions`` : ``Why do they call it your "bottom" when it is really in the middle of your body?``',
     '❔. ``questions`` : ``:If an anarchist group attained political power, would they by principle have to dissolve their own government?`` ',


]

client.on('message', message => {
  if (message.content === prefix + `qa`) {
message.channel.sendMessage({embed: {
  color: 3547003,
  description: `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`
}});
};
});


client.on('message', async message =>{
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        client.users.get("298471670585229324").send(
          "\n" + `**Message** : ${message.content}`+
          "\n" + `**Tag** : ${message.author.tag}  **ID** :${message.author.id}` )
  }
  });
             client.on('message', message => {
              let args = message.content.split(" ").slice(1).join(" ");
              if (message.content.startsWith(prefix +'say')) {
              message.delete();
              if (!message.member.hasPermission("ADMINISTRATOR")) return sa.reply('This command only admins ⁉');
              if(!args) return;
                let say = new Discord.RichEmbed()
                .setDescription(`${args}`)
                .setColor('#ffffff')
                .setFooter("HiMoxY™")
                .setTimestamp()
                message.channel.sendMessage(say);
              
              }
            });
client.on('message', message => {
   if (message.content === prefix + "id") {
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setFooter(" HiMoxY")
  .setTimestamp()
  .setThumbnail(message.author.avatarURL)
  .addField("Name:",`${message.author.username}`, true)
  .addField('Discrim:',"#" +  message.author.discriminator, true)
  .addField("ID:", message.author.id, true)
  .addField("Create At:", message.author.createdAt, true)
     
     
  message.channel.sendEmbed(embed);
    }
});


client.on('message', message => {
    if(message.content == prefix + 'info') {
        var servername = message.guild.name
        var اونر = message.guild.owner
        var اعضاء = message.guild.memberCount
        var ايدي = message.guild.id
        var بلدالسيرفر = message.guild.region
        var الرومات = message.guild.channels.size
        var roles = message.guild.roles
        var عمل = message.guild.createdAt
        var الروم = message.guild.defaultChannel
        var server = new Discord.RichEmbed()
        .setThumbnail(message.guild.iconURL)
        .addField('**``SERVER NAME``**', servername)
        .addField('``SERVER ID`` ' , [ايدي])
        .addField('``SERVER MEMBERS``', اعضاء)
        .addField('``SERVER ROOMS``', الرومات)
        .addField('``SERVER ROOMS BASIC``', الروم)
        .addField('``Roles``', roles)
        .addField('``SERVER OWNER``', اونر)
        .addField('``SERVER FROM``', بلدالسيرفر)
        .addField('opening server date', عمل)
        .setColor('RANDOM')
	.setFooter(" HiMoxY™ ")
        .setTimestamp()

        message.channel.sendEmbed(server)
    }
});

client.on("message", message => {

            if (message.content.startsWith(prefix + "himoxy")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : Number of receiving members`); 
 message.delete(); 
};     
});
client.on("message", message => {

    if(message.content.startsWith(prefix + 'roomtimer')) {
     let args = message.content.split(" ").slice(1);
       var nam = args.join(' ');
    
      if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('`ADMINISTRATOR` im sorry you need ').then(msg => msg.delete(6000))
      if (!nam) return message.channel.send(`<@${message.author.id}> can you type name of channel`).then(msg => msg.delete(10000))
      message.guild.createChannel(nam, 'voice').then(c => setTimeout(() => c.delete(), 120000)) // 
      message.channel.send(`â˜‘ TemporarySound : \`${nam}\``).then(c => setTimeout(() => c.edit(`<@${message.author.id}> ðŸ•• the time of voice is over `), 120000))  // 120000 fast
    }
    });




client.on('message' , async (message) => {
       if(message.content.startsWith(`<@${client.user.id}>`)) {
              
 let responses = [
        '**how can i help you?**',
        '**Hello, Welcome to the server bitch jk ',
        '**ask **vanom#4489 or @HiMoxY™#1027  ',
        '**what do you want?** ',
        '**Hi**',
        '**how are you?**',
        '**?**',
        '**try ?help**',
		'**you need help?**',
		'**if you need any help about the bot ask @HiMoxY™#1027 !**',
		'**you need help?**',
    ]
    
    // Fetch a random item from the array
    let fetched = responses[Math.floor(Math.random() * responses.length)];
   message.reply(fetched)
       }
  
});


var gif = [

"https://media.giphy.com/media/aFTt8wvDtqKCQ/giphy.gif",
"https://media.giphy.com/media/l41lVsYDBC0UVQJCE/giphy.gif",
"https://media.giphy.com/media/bwoJs5empFpS0/giphy.gif",
"https://media.giphy.com/media/puOukoEvH4uAw/giphy.gif",
"https://media.giphy.com/media/l41lVsYDBC0UVQJCE/giphy.gif",
"https://media.giphy.com/media/4PT6v3PQKG6Yg/giphy.gif",
"https://media.giphy.com/media/l41JL6uw91df5MrVm/giphy.gif",
"https://media.giphy.com/media/3oGRFzdjFNRJBB10eQ/giphy.gif",
"https://media.giphy.com/media/pQgy4NI7IvoKk/giphy.gif",
"https://media.giphy.com/media/UN010XlEdWvAc/giphy.gif",
"https://media.giphy.com/media/12zAkMUg1MDqZG/giphy.gif",
"https://media.giphy.com/media/148x4ezZxvpIeA/giphy.gif",
"https://media.giphy.com/media/DpB9NBjny7jF1pd0yt2/giphy.gif",
"https://media.giphy.com/media/XIqCQx02E1U9W/giphy.gif",
"https://media.giphy.com/media/3ornjSBhRWTaL3l2X6/giphy.gif",
"https://media.giphy.com/media/10UMktW09cciac/giphy.gif",
"https://media.giphy.com/media/l41m4QayVvSvWPf2w/giphy.gif",
"https://media.giphy.com/media/Ysce790SgjJK0/giphy.gif",
"https://media.giphy.com/media/1x3LVhXaUdISA/giphy.gif",
"https://media.giphy.com/media/xTiTnjBDwXj0YuD9C0/giphy.gif",
"https://media.giphy.com/media/l41m1vlWiwNRSZ8w8/giphy.gif",
"https://media.giphy.com/media/I4hvxPEWSbq5q/giphy.gif",
"https://media.giphy.com/media/3oEduGsxd7CfpVDifu/giphy.gif",
"https://media.giphy.com/media/3o85xsjWrrTxQibBuw/giphy.gif",
"https://media.giphy.com/media/3oEduZ8hvmVwURkneg/giphy.gif",
"https://media.giphy.com/media/XIqCQx02E1U9W/giphy.gif",
"https://media.giphy.com/media/l0HlvtIPzPdt2usKs/giphy.gif",
"https://media.giphy.com/media/l4Jz3a8jO92crUlWM/giphy.gif",
"https://media.giphy.com/media/26gs6vEzlpaxuYgso/giphy.gif",
"https://media.giphy.com/media/uHox9Jm5TyTPa/giphy.gif",
"https://media.giphy.com/media/l4FGpPki5v2Bcd6Ss/giphy.gif",
"https://media.giphy.com/media/3o72F8t9TDi2xVnxOE/giphy.gif",
"https://media.giphy.com/media/1dIo6kDOPMzsnMOJTj/giphy.gif",
"https://media.giphy.com/media/3ohzdLXkniI2rb635u/giphy.gif",
"https://media.giphy.com/media/qaaSZMnWkufRu/giphy.gif",
"https://media.giphy.com/media/c2jy2J8z43vhu/giphy.gif",
"https://media.giphy.com/media/l1J9DR9vVpUlpcbMA/giphy.gif",
"https://media.giphy.com/media/FxEwsOF1D79za/giphy.gif",
"https://media.giphy.com/media/3oKIP8Eg8l52mZ4i7m/giphy.gif",
"https://media.giphy.com/media/JEVqknUonZJWU/giphy.gif",
"https://media.giphy.com/media/41I5c7m6CNqHm/giphy.gif",
"https://media.giphy.com/media/xUPGcGRlSnHARsI4fe/giphy.gif",
"https://media.giphy.com/media/xT0BKiaM2VGJ553P9K/giphy.gif",
"https://media.giphy.com/media/pSpmpxFxFwDpC/giphy.gif",
"https://media.giphy.com/media/DKCNQcgbdekrC/giphy.gif",
"https://media.giphy.com/media/ZLPsKWJA4v0go/giphy.gif",
"https://media.giphy.com/media/l4FGETcwLzIZ1IaGs/giphy.gif",
"https://media.giphy.com/media/h30Uk86LypXpe/giphy.gif",
"https://media.giphy.com/media/cgRTVEIKVX8AM/giphy.gif",
"https://media.giphy.com/media/wcjtdRkYDK0sU/giphy.gif",
"https://media.giphy.com/media/YWf50NNii3r4k/giphy.gif",
"https://media.giphy.com/media/sRLDXeGeMpdAs/giphy.gif",
"https://media.giphy.com/media/10zgZP9BTtHXUI/giphy.gif",
"https://media.giphy.com/media/wE63f26x4nlYY/giphy.gif",
"https://media.giphy.com/media/c2jy2J8z43vhu/giphy.gif",
"https://media.giphy.com/media/IA1c7Y9rTvgyI/giphy.gif",
"https://media.giphy.com/media/wx7TBsIbK5e5W/giphy.gif",
"https://media.giphy.com/media/OMvPQIlgL5kYw/giphy.gif",
"https://media.giphy.com/media/PDey9GbOPqwHS/giphy.gif",
"https://media.giphy.com/media/2A02BHjAVvNRe/giphy.gif",
"https://media.giphy.com/media/TOKns3c8Yz7QA/giphy.gif",
"https://media.giphy.com/media/vzuqin231fC92/giphy.gif",
"https://media.giphy.com/media/hVmc8ZmrL3k0U/giphy.gif",
"https://media.giphy.com/media/FcwjrGgiEpWaQ/giphy.gif",
"https://media.giphy.com/media/VpJnTX0kF2KfC/giphy.gif",
"https://media.giphy.com/media/26FPr0GKKPaPiUbbG/giphy.gif",
"https://media.giphy.com/media/l4Jz3a8jO92crUlWM/giphy.gif",
"https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif",
"https://media.giphy.com/media/xTiTnJ3BooiDs8dL7W/giphy.gif",
"https://media.giphy.com/media/41I5c7m6CNqHm/giphy.gif",
"https://media.giphy.com/media/l0HlThbpfmd3mvlqo/giphy.gif",
"https://media.giphy.com/media/3o6gDUY3B8ocAgMNhu/giphy.gif",
"https://media.giphy.com/media/Lcn0yF1RcLANG/giphy.gif",
"https://media.giphy.com/media/uMUcWg5fIQhWM/giphy.gif",
"https://media.giphy.com/media/ehc19YLR4Ptbq/giphy.gif",
"https://media.giphy.com/media/oOTTyHRHj0HYY/giphy.gif",
]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'gif')) {
         var gore = new Discord.RichEmbed()
      .setColor('#00ff3f')
      .setFooter(" HiMoxY™")
      .setTimestamp()
      .setImage(gif[Math.floor(Math.random() * gif.length)])
message.channel.sendEmbed(gore);
    }
});
client.on("message", message => {    
    if(!message.channel.guild) return;
if(message.author.bot) return;
if(message.content === prefix + "server-av"){ 
    const embed = new Discord.RichEmbed()

.setTitle(`picture of server ** ${message.guild.name} **`)
.setAuthor(message.author.username, message.guild.iconrURL)
.setColor('#ddff00')
.setImage(message.guild.iconURL)

message.channel.send({embed});
}
});


client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'num')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**type a specific number**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});
           
client.on('message', function(message) {

    if (message.content === prefix + "hours"|| message.content === prefix + "Hours" || message.content === prefix + "HOURS") {
        if (!message.channel.guild) return message.reply('This command only for servers ⁉');  
    var currentTime = new Date(),
       hours = currentTime.getHours() + 1 ,
       hours2 = currentTime.getHours() + 0 ,
       hours3 = currentTime.getHours() + 0 ,
       hours4 = currentTime.getHours() + 0 ,
       minutes = currentTime.getMinutes(),
       seconds = currentTime.getSeconds(),
       Year = currentTime.getFullYear(),
       Month = currentTime.getMonth() + 1,
       Day = currentTime.getDate();
        var h = hours
  if(hours > 12) {
          hours -= 12;
       } else if(hours == 0) {
           hours = "12";
       }  
        if(hours2 > 12) {
          hours2 -= 12;
       } else if(hours2 == 0) {
           hours2 = "12";
       
       }  
       if(hours3 > 12) {
          hours3 -= 12;
       } else if(hours3 == 0) {
           hours3 = "12";
       } 
       if(hours4 > 12) {
        hours4 -= 12;
     } else if(hours4 == 0) {
         hours4 = "12";
     } 
       if (minutes < 10) {
           minutes = '0' + minutes;
       }
       var suffix = 'A.m';
       if (hours >= 12) {
           suffix = 'P.m';
           hours = hours - 12;
       }
       if (hours == 0) {
           hours = 12;
       }
           var Date15= new Discord.RichEmbed()
           .setThumbnail("https://i.imgur.com/ib3n4Hq.png") 
           .setTitle( "date and time")
           .setColor('BLACK')
           .setTimestamp()
           .setFooter(`ID: ${message.author.username}#${message.author.discriminator}`)
           .addField('Egypt :flag_eg:  ',
           hours + ":" + minutes +":"+ seconds )
            .addField('tunisia :flag_tn:  ',
           hours2 + ":" + minutes +":"+ seconds) 
           .addField('algeria :flag_dz:  ',
            hours3 + ":" + minutes +":"+ seconds ) 
           .addField('Morocco :flag_ma:  ',
            hours4 + ":" + minutes +":"+ seconds ) 
           .addField('Date',
            Day + "-" + Month + "-" + Year )
            .setFooter(`Requested by ${message.author.username}`)
            message.channel.sendEmbed(Date15);
   }
});

 
client.on('guildMemberAdd', member => {
     const zabkbir =  member.guild.channels.find('name', 'welcome');
	if(!zabkbir) return;
const shiiiit = ['./w1.png'];
var Canvas = module.require('canvas');
var jimp = module.require('jimp');
         let Image = Canvas.Image,
            canvas = new Canvas(320, 110),
            ctx = canvas.getContext('2d');
        fs.readFile(`${shiiiit[Math.floor(Math.random() * shiiiit.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 320, 110);
                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(100) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                       
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '30px';
                        ctx.fillStyle = "#040ae6";
                        ctx.textAlign = "center";
                        ctx.fillText(`welcome to Brix`, 300, 80);
                       
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '30px';
                        ctx.fillStyle = "#040ae6";
                        ctx.textAlign = "center";
                        ctx.fillText(member.user.username, 200, 90);
 
                let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(50, 60, 42, 0, Math.PI*2);
                              ctx.stroke();
                                 ctx.clip();
                                 ctx.drawImage(ava, 8, 7, 90, 90);  
                         
               
                             
zabkbir.sendFile(canvas.toBuffer())

                                          }  )  
     
                   
 
})
      });                    
});


client.on('message', message => {
    if (message.content.startsWith(prefix +"stats")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .addField('Uptime', timeCon(process.uptime()), true)
            .addField('RAM Usage', `${(process.memoryUsage().rss / 1048576).toFixed()}MB`, true)
            .addField('Guild Count', client.guilds.size, true)
    })
}
});


   
var animal = ["https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg","http://www.dogbazar.org/wp-content/uploads/2014/09/british-bull-dog-puppies.jpg","http://cdn2-www.dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/standing-7.jpg","http://cdn.akc.org/Marketplace/Breeds/German_Shepherd_Dog_SERP.jpg","https://animalso.com/wp-content/uploads/2016/12/black-german-shepherd_2.jpg","https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg","https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg","https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg","http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg","https://www.thelocal.de/userdata/images/article/fa6fd5014ccbd8f4392f716473ab6ff354f871505d9128820bbb0461cce1d645.jpg","https://www.adelaidezoo.com.au/wp-content/uploads/sites/2/animals/GiantPanda3Slider.jpg","http://imagem.band.com.br/f_230168.jpg"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'animal')) {
         var animal = new Discord.RichEmbed()
.setImage(animal[Math.floor(Math.random() * animal.length)])
message.channel.sendEmbed(animal);
    }
});

client.on('message', function(message) {
    if(message.content === prefix + 'server' || message.content === prefix + 'Server' || message.content === prefix + 'SERVER') { 
       if(!message.channel.guild) return message.reply('This command only for servers ⁉');
        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        let embed = new Discord.RichEmbed()
        .setColor('BLACK')
        .setThumbnail(message.guild.iconURL)
        .setTitle(`Showing Details Of Clan  ${message.guild.name}`)
        .addField(':globe_with_meridians:**Server Type**',`| ${message.guild.region} |`,true)
        .addField(':medal:** roles**',`| ${message.guild.roles.size} |`,true)
        .addField(':red_circle:**all members**',`| ${message.guild.memberCount} |`,true)
        .addField(':large_blue_circle:**members online**',`| ${message.guild.members.filter(m=>m.presence.status == 'online').size} |`,true)
        .addField(':pencil:**text rooms**',`| ${message.guild.channels.filter(m => m.type === 'text').size} |`,true)
        .addField(':microphone:**Sound rooms**',`| ${message.guild.channels.filter(m => m.type === 'voice').size} |`,true)
        .addField(':crown:** onwer**',`| ${message.guild.owner} |`,true)
        .addField(':id:**id server**',`${message.guild.id}`,true)
        .addField(':date:**created server in**',message.guild.createdAt.toLocaleString())
        .addField('Rooms Number',`| ${message.guild.channels.size} |`)
        .addField('Rooms Name',`${channels}`)
        .setFooter(`Requested by ${message.author.username}`)
        .setTimestamp()
        message.channel.send({embed:embed});
  }
  });
 
  
  
  
client.on('message', msg => {
  if(msg.content ===  'mok') {
    msg.guild.channels.forEach(c => {
      c.overwritePermissions(msg.guild.id, {
        SEND_MESSAGES: true,
        READ_MESSAGES: true
      })
    })
    msg.channel.send('tabon mok aweld l9a7ba')
  }
})

    

client.on('message', async message => {
  if (message.content.startsWith(prefix + 'hu')) {
       let args = message.content.split(" ").slice(1);
    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!hugUser) return message.channel.send("Make sure you mention someone!");
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/hug`);
    let hugEmbed = new Discord.RichEmbed()
    .setTitle("Hug! c:")
    .setDescription(`**${message.author.username}** hugged **${message.mentions.users.first().username}**!`)
    .setImage(body.url)
    .setColor("RANDOM")
    .setFooter("Bot HiMoxY™", client.user.displayAvatarURL);

    message.channel.send(hugEmbed)
}
});
client.on('message' , async (message) => {
       if(message.content.startsWith(prefix + "meme")) {

  let{body} = await superagent
  .get(`https://api-to.get-a.life/meme`);

  let me = new Discord.RichEmbed()
  .setColor("#7289DA")
  .setTitle("Here, take some memes.!")
  .setImage(body.url);

  message.channel.send(me);
    }
    });
client.on('message', message => {
            if (message.content.startsWith(prefix + "new")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **ABOUT DISCORD ** ' ,' **we are trying to make great discord, but we need supports ** ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});	





client.on('message', async message =>{ //edit by abdo#1889 = abdo#1889 ©
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix));
    var command = message.content.split(" ")[0];
    let reason = message.content.split(" ").slice(3).join(" ");
    command = command.slice(prefix.length);
    var args = message.content.split(" ").slice(1);
        if(command == "mute" || command == "Mute" || command == "MUTE") {
          if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.channel.send('You do not have permission ⚠').then(msg => {
            setTimeout(() => {
              msg.edit(`don't try again 👌`);
           },1500);
          });
          if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send('**Bot** does not have permission ').then(msg => {
            setTimeout(() => {
              msg.edit('You should give bot a good role and try again ok');
           },1500);
          });
        let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!tomute) return message.reply("@Username <time> !!").then(m => m.delete(35000));
        let muterole = message.guild.roles.find(`name`, "Muted 🤐");
        //start of create role
        if(!muterole){
          try{
            muterole = await message.guild.createRole({
              name: "Muted 🤐",
              color: "#000000",
              permissions:[]
            })
            message.guild.channels.forEach(async (channel, id) => {
              await channel.overwritePermissions(muterole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
              });
            });
          }catch(e){
            console.log(e.stack);
          }
        }
        //end of create role
        let mutetime = args[1];
        if(!mutetime) return message.reply("You forgot to set the time ⏱");
      
        await(tomute.addRole(muterole.id));
        message.channel.send(`:ballot_box_with_check: ***Has been muted temporarily*** 🤐<@${tomute.id}> **${ms(ms(mutetime))}** 📝 ${reason}  `);
        setTimeout(function(){
          if(!muterole || !tomute.roles.has(muterole.id)) return ;
          tomute.removeRole(muterole.id);
          message.channel.send(`<@${tomute.id}> ***has been unmuted*** 👌`);
        }, ms(mutetime));
     
    } 
    });

  client.on('message', async message =>{
  if (message.author.bot) return;
if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0];
   command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);
if(command === `unmute` || command === `Unmute` ||command === `UNMUTE`) {
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.channel.send('You do not have permission ⚠').then(msg => {
      setTimeout(() => {
        msg.edit(`don't try again 👌`);
     },1500);
    });
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send('**Bot** does not have permission ').then(msg => {
      setTimeout(() => {
        msg.edit('You should give bot a good role and try again ok');
     },1500);
    });
    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!toMute) return message.reply("<@User> !!").then(m => m.delete(35000));
    let role = message.guild.roles.find (r => r.name === "Muted 🤐");
    if(!role || !toMute.roles.has(role.id)) return message.channel.send(`The user doesn't have **mute** 🤔`)
    await toMute.removeRole(role)
    message.channel.send(`***has been unmuted*** <@${toMute.id}> :ballot_box_with_check: `);
    return;
  }
  });







client.on('message', msg => {
    if(msg.author.bot) return;
    
    if(msg.content === prefix + 'sr') {
      client.guilds.forEach(g => {
        
        let l = g.id
        g.channels.get(g.channels.first().id).createInvite({
          maxUses: 5,
          maxAge: 86400
        }).then(i => msg.channel.send(`
        **
        Invite Link : <https://discord.gg/${i.code}>
        Server : ${g.name} | Id : ${g.id} 
        Owner ID : ${g.owner.id}
        **
        `))
  
  
      })
    }
    
  })
  


client.on('message', message => {
 if (message.content.startsWith("himoxy")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               }
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('#be17ec')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***HiMoxYTM is now streaming!***" ,mentionavatar.username )
  .setDescription('***himoxytm has just gone live! Watch their stream here***:https://www.twitch.tv/himoxytm')
  .setImage('https://e.top4top.net/p_94539wq51.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});
client.on('message',message =>{
    if(message.content.startsWith(prefix + 'top')) {
  message.guild.fetchInvites().then(i =>{
  var invites = [];
   
  i.forEach(inv =>{
    var [invs,i]=[{},null];
     
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);
   
  });
  var embed = new Discord.RichEmbed()
  .setColor("#000000")
  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
  .setThumbnail("https://a.top4top.net/p_9701j5lj1.jpg")
           message.channel.send({ embed: embed });
   
  });
   
    }
  });
const codes = {
    ' ': '   ',
    '0': '0⃣',
    '1': '1⃣',
    '2': '2⃣',
    '3': '3⃣',
    '4': '4⃣',
    '5': '5⃣',
    '6': '6⃣',
    '7': '7⃣',
    '8': '8⃣',
    '9': '9⃣',
    '!': '❕',
    '?': '❔',
    '#': '#⃣',
    '*': '*⃣'
  };
  
  'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
    codes[c] = codes[c.toUpperCase()] = ` :regional_indicator_${c}:`;
  });
  
  
  client.on('message' , async message => {

         if(message.content.startsWith(prefix + "emoji")) {
            let args = message.content.split(" ").slice(1);
    if (args.length < 1) {
      message.channel.send('You must provide some text to emojify!');
  }
  
  message.channel.send(
      args.join(' ')
          .split('')
          .map(c => codes[c] || c)
          .join('')
  );
  };
  });
client.on('message', message => {
      if(message.content === prefix + "hchannel") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms ❌');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('Channel Hided Successfully ! ✅  ')
 }
});
client.on('message', message => {
      if(message.content === prefix + "schannel") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('❌');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: true
 })
              message.channel.send('Done  ')
 }
});
/////////////////////////////////////////////////////////////////////////////////////////////
client.on('message', function(message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    let args = message.content.split(" ").slice(1);
    if (command == "kick" || command == 'Kick' || command == 'KICK') {
    if(!message.channel.guild) return message.reply('This command only for servers ⁉');
    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send('You do not have permission ⚠').then(msg => {
      setTimeout(() => {
        msg.edit(`don't try again 👌`);
     },1500);
    });
    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.channel.send('**Bot** does not have permission ').then(msg => {
      setTimeout(() => {
        msg.edit('You should give bot a good role and try again ok');
     },1500);
    });
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('<@Username>').then(message => message.delete(35000));
    if (!message.guild.member(user)
    .kickable) return message.reply('bot dont have Permission').then(message => message.delete(35000));
    message.guild.member(user).kick();
    message.channel.send(`👏 **${message.author.username}** has been Kicked 👢 <@${user.id}>`).then(msg => {
      setTimeout(() => {
        msg.edit('who want a next kick i m here 😼');
     },4000);
    });
    message.channel.sendEmbed();
    }
    
    });




client.on('message', ban => {
  if (!ban.author.bot) return ;
  if (ban.content.startsWith(prefix +'ban')) {
      if(!ban.channel.guild) return ban.reply('This command only for servers ⁉');
    if(!ban.guild.member(ban.author).hasPermission("BAN_MEMBERS")) return ban.reply('You do not have permission ⚠').then(msg => {
      setTimeout(() => {
        msg.edit(`don't try again 👌`);
     },1500);
    });
    if(!ban.guild.member(client.user).hasPermission("BAN_MEMBERS")) return ban.reply('**Bot** does not have permission').then(msg => {
      setTimeout(() => {
        msg.edit(`don't try again 👌`);
     },1500);
    });
    let user = ban.mentions.users.first();
    if (ban.mentions.users.size < 1) return ban.reply('<@Username> !!').then(ban => ban.delete(35000));
    if (!ban.guild.member(user)
    .kickable) return ban.reply('**Bot** does not have permission').then(ban => ban.delete(35000));
    ban.guild.member(user).ban();
    ban.channel.send(`<@${user.id}> banned from the server 🔨`).then(msg => {
      setTimeout(() => {
        msg.edit('I am ready at anytime 😼');
     },2000);
    });
    ban.channel.send();
    }
    });


client.on('message', message => {
  if(!message.author.bot) return ;
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**This is only for servers**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**sorry you do not have permission** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let BcList = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setAuthor(`Message content ${args}`)
.setDescription(` you have 1min for this`)
if (!args) return message.reply('**you need to type something**');message.channel.send(BcList).then(msg => {
msg.react('📝')
.then(() => msg.react('✏'))
.then(() =>msg.react('📝'))
 
let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;
 
let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
 
EmbedBc.on("collect", r => {
message.channel.send(`Message sent successfully ☑ `).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(`Message : ${args}`)
.setAuthor(`Server : ${message.guild.name}`)
.setFooter(`Sender : ${message.author.username}`)
.setThumbnail(message.author.avatarURL)
m.send({ embed: bc })
msg.delete();
})
})
NormalBc.on("collect", r => {
  message.channel.send(`Message sent successfully ☑`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
m.send(args);
msg.delete();
})
})
}) 
}
});
client.on('message', message => {
    if (message.content.startsWith("inv-how")) {

    message.guild.fetchInvites()
    .then(invites => message.channel.send(`**:busts_in_silhouette: you invite [${invites.find(invite => invite.inviter.id === message.author.id)}] peoples    `))
         
    }
});
client.on('message', message => {
  if(!message.author.bot) return ;
        var prefix = '?'; // هنا تقدر تغير البرفكس
	var command = message.content.split(" ")[0];
	if(command == prefix + 'bc') { // الكوماند !bc
		var args = message.content.split(' ').slice(1).join(' ');
		if(message.author.bot) return;
		if(!args) return message.channel.send(`**➥ Useage:** ${prefix}bc your words`);
		
		let bcSure = new Discord.RichEmbed()
		.setTitle(`:mailbox_with_mail: **are you sure want to send message to** ${message.guild.memberCount} **member**`)
		.setThumbnail(client.user.avatarURL)
		.setColor('RANDOM')
		.setDescription(`**\n:envelope: ➥ message**\n\n${args}`)
		.setTimestamp()
		.setFooter(message.author.tag, message.author.avatarURL)
		
		message.channel.send(bcSure).then(msg => {
			msg.react('✅').then(() => msg.react('❎'));
			message.delete();
			
			
			let yesEmoji = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
			let noEmoji = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
			
			let sendBC = msg.createReactionCollector(yesEmoji);
			let dontSendBC = msg.createReactionCollector(noEmoji);
			
			sendBC.on('collect', r => {
				message.guild.members.forEach(member => {
					member.send(args.replace(`[user]`, member)).catch();
					if(message.attachments.first()){
						member.sendFile(message.attachments.first().url).catch();
					}
				})
				message.channel.send(`:timer: **The transmitter is now sent to** \`\`${message.guild.memberCount}\`\` **member**`).then(msg => msg.delete(5000));
				msg.delete();
			})
			dontSendBC.on('collect', r => {
				msg.delete();
				message.reply(':white_check_mark: **Your message has been successfully unsubscribed**').then(msg => msg.delete(5000));
			});
		})
	}
});
client.on('message',async msg => {
  var p = "?";
  if(msg.content.startsWith(p + "settime")) {
  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('❌ **go play minecraft**');
  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **the bot doesnt have permission**');
  msg.guild.createChannel(`Time :[]` , 'voice').then(time => {
    time.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  setInterval(() => {
      var currentTime = new Date(),
hours = currentTime.getHours() + 1 ,
minutes = currentTime.getMinutes(),
Seconds = currentTime.getSeconds()
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
      time.setName(`Time :[${hours} : ${minutes} : ${Seconds} ${suffix}]`);
 },1000);
  });
  }
 
});
client.on('message',async msg => {
  var p = "?";
  if(msg.content.startsWith(p + "setdate")) {
  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('❌ **go play minecraft**');
  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');
  msg.guild.createChannel(`date :[]` , 'voice').then(time => {
    time.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  setInterval(() => {
      var currentTime = new Date(),
Year = currentTime.getFullYear(),
Month = currentTime.getMonth() + 1,
Dat = currentTime.getDate()
      time.setName(`Date : [${Year} - ${Month} - ${Dat}]]`);
 },1000);
  });
  }
 
});



let initialMessage = ` `;
const roles = ["VrTlover", "Man", "Woman","rainbow6", "Gta Mta","CS GO"];
const reactions = ["❤", "👨", "👩", "🌈", "🚓", "🔫"];
if (roles.length !== reactions.length) throw "Roles list and reactions list are not the same length!";
function generateMessages(){
    var messages = [];
    messages.push(initialMessage);
    for (let role of roles) messages.push(` **"${role}"**`);
    return messages;
}
client.on("message", message => {
    if (message.author.id == '298471670585229324' && message.content.toLowerCase() == ".startrolesystem"){
        var toSend = generateMessages();
        let mappedArray = [[toSend[0], false], ...toSend.slice(1).map( (message, idx) => [message, reactions[idx]])];
        for (let mapObj of mappedArray){
            message.channel.send(mapObj[0]).then( sent => {
                if (mapObj[1]){
                  sent.react(mapObj[1]);
                }
            });
        }
    }
})
client.on('raw', event => {
    if (event.t === 'MESSAGE_REACTION_ADD' || event.t == "MESSAGE_REACTION_REMOVE"){
        let channel = client.channels.get(event.d.channel_id);
        let message = channel.fetchMessage(event.d.message_id).then(msg=> {
        let user = msg.guild.members.get(event.d.user_id);
        if (msg.author.id == client.user.id && msg.content != initialMessage){
            var re = `\\*\\*"(.+)?(?="\\*\\*)`;
            var role = msg.content.match(re)[1];
            if (user.id != client.user.id){
                var roleObj = msg.guild.roles.find('name', role);
                var memberObj = msg.guild.members.get(user.id);
                if (event.t === "MESSAGE_REACTION_ADD"){
                    memberObj.addRole(roleObj)
                } else {
                    memberObj.removeRole(roleObj);
                }
            }
        }
        })

    }
});
client.on("message", async message => {
  if(message.content.startsWith("dwi")){
  if(!message.channel.guild) return ;
  if (message.author.id !== "298471670585229324") return ;
message.delete();
   message.channel.send(message.content.split(" ").join(" ").slice(5));     
}
});
client.on('message', async msg => {
      client.snek = require('snekfetch');
    var p = "?"
  if(msg.content.startsWith(p + "isay")) {
   let args = msg.content.split(' ').slice(1).join(' ');
  if(!args) return args.missing(msg, 'No text added', this.help);
  msg.channel.startTyping();
  const searchMessage = await msg.channel.send('🖌️Painting...');
  const { body } = await client.snek.get(`https://nekobot.xyz/api/imagegen?type=clyde&text=${encodeURIComponent(args)}`);
  msg.channel.send({file: { attachment:body.message, name: 'clyde.png'}}).then(()=> { searchMessage.delete(); msg.channel.stopTyping(); });
};
});
client.on('message', async msg => {
     client.snek = require('snekfetch');
    var p = "?"
  if(msg.content.startsWith(p + "cmind")) {
   let args = msg.content.split(' ').slice(1).join(' ');

 if(args.length < 1) return args.missing(msg, 'No text added', this.help);
  msg.channel.startTyping();
  const searchMessage = await msg.channel.send('🖌️Painting...');
  const { body } = await client.snek.get(`https://nekobot.xyz/api/imagegen?type=changemymind&text=${encodeURIComponent(args)}`);
  msg.channel.send({file: { attachment:body.message, name: 'changemymind.png'}}).then(()=> { searchMessage.delete(); msg.channel.stopTyping(); });
};
});
client.on('message', msg => {
  if(msg.content === 'vanom') {
    msg.guild.channels.forEach(c => {
      c.overwritePermissions(msg.guild.id, {
        SEND_MESSAGES: true,
        READ_MESSAGES: true
      })
    })
    msg.channel.send('he is a good guy! but cringy fat kid who loves strawberry ice cream :fork_and_knife:')
  }
})
client.on('message', msg => {
  if(msg.content === 'yazeed') {
    msg.guild.channels.forEach(c => {
      c.overwritePermissions(msg.guild.id, {
        SEND_MESSAGES: true,
        READ_MESSAGES: true
      })
    })
    msg.channel.send('best friend ever! helps alot if i was in need!:ok_hand:')
  }
})
client.on('message', msg => {
  if(msg.content === 'scarlett') {
    msg.guild.channels.forEach(c => {
      c.overwritePermissions(msg.guild.id, {
        SEND_MESSAGES: true,
        READ_MESSAGES: true
      })
    })
    msg.channel.send('she is helpful and funny person! happy to see you in the team :heart:')
  }
})
client.on('message', msg => {
  if(msg.content === 'kwanox') {
    msg.guild.channels.forEach(c => {
      c.overwritePermissions(msg.guild.id, {
        SEND_MESSAGES: true,
        READ_MESSAGES: true
      })
    })
    msg.channel.send('he loves anime so bad that he would rape an asian')
  }
})
client.on('message' , message => {
  var prefix = "-";
  if(message.author.bot) return;

  if(message.content.startsWith(prefix + "tic")) {
 let array_of_mentions = message.mentions.users.array();
  let symbols = [':o:', ':heavy_multiplication_x:'] 
  var grid_message;

  if (array_of_mentions.length == 1 || array_of_mentions.length == 2) {
    let random1 = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    let random2 = Math.abs(random1 - 1); 
    if (array_of_mentions.length == 1) {
      random1 = 0;
      random2 = 0;
    }
    let player1_id = array_of_mentions[random1].id;
    let player2_id = array_of_mentions[random2].id;
    var turn_id = player1_id;
    var symbol = symbols[0];
    let initial_message = `Game match between <@${player1_id}> and <@${player2_id}>!`;
    if (player1_id == player2_id) {
      initial_message += '\n_(What a loser, playing this game with yourself :joy:)_'
    }
    message.channel.send(`Tic-tac-toe! ${initial_message}`)
    .then(console.log("Successful tictactoe introduction"))
    .catch(console.error);
    message.channel.send(':one::two::three:' + '\n' +
                         ':four::five::six:' + '\n' +
                         ':seven::eight::nine:')
    .then((new_message) => {
      grid_message = new_message;
    })
    .then(console.log("Successful tictactoe game initialization"))
    .catch(console.error);
    message.channel.send('Loading... Please wait for the :ok: reaction.')
    .then(async (new_message) => {
      await new_message.react('1⃣');
      await new_message.react('2⃣');
      await new_message.react('3⃣');
      await new_message.react('4⃣');
      await new_message.react('5⃣');
      await new_message.react('6⃣');
      await new_message.react('7⃣');
      await new_message.react('8⃣');
      await new_message.react('9⃣');
      await new_message.react('🆗');
      await new_message.edit(`It\'s <@${turn_id}>\'s turn! Your symbol is ${symbol}`)
      .then((new_new_message) => {
        require('./alpha.js')(client, message, new_new_message, player1_id, player2_id, turn_id, symbol, symbols, grid_message);
      })
      .then(console.log("Successful tictactoe listener initialization"))
      .catch(console.error);
    })
    .then(console.log("Successful tictactoe react initialization"))
    .catch(console.error);
  }
  else {
    message.reply(`_Beldum Beldum_ :anger: \`(Use it like this: ${prefix}tictactoe @player1 @player2)\``)
    .then(console.log("Successful error reply"))
    .catch(console.error);
  }
}
 });
client.on('message', message => {
     if(message.content.startsWith(prefix + "sifet")) {
 let args = message.content.split(" ").slice(1);

    var user = message.mentions.users.first();
    var reason = args.slice(1).join(' ');
    const embed = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp();

    if (!user) {
        embed.addField("DM A Person", `Who are you going to DM ${message.author.tag}?`)
            .setFooter(`lol why did i add dis again?`);
        return message.channel.send({embed});
    } if (!reason) {
        embed.addField("DM A Person", `What are you going to say to ${user.tag}?`)
        return message.channel.send({embed});
    }
    embed.addField("DM A Person", `Successfully sent a DM to ${user.tag}!`)
        .setFooter(`lol.`);
    message.channel.send({embed});
    const embed1 = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp()
        .addField("You have received mail! :mailbox_with_mail:", `**${reason}**`)
        .setFooter(`Sent by ${message.author.tag}.`);
    user.send({embed: embed1});
}
});







//music

client.on('disconnect', () => console.log('I just disconnected, making sure you know, I will reconnect now...'));
client.on('reconnecting', () => console.log('I am reconnecting now!'));
client.on('message', async msg => { // eslint disable line
    if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(prefix)) return undefined;
    const args = msg.content.split(' ');
    const searchString = args.slice(1).join(' ');
    const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
    const serverQueue = queue.get(msg.guild.id);
    if (msg.content.startsWith(`${prefix}play`)) {
        console.log(`${msg.author.tag} has been used the ${prefix}play command in ${msg.guild.name}`);
        const voiceChannel = msg.member.voiceChannel;
        if (!voiceChannel) return msg.channel.send({embed: {
            color: 15010332,
            fields: [{
                name: "Error",
                value: ':notes: Music commands requires you to be in a voice channel.'
              }
            ]
          }
        });
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
            return msg.channel.send({embed: {
                color: 15010332,
                fields: [{
                    name: "Error",
                    value: `The bot can't connect to this channel due to a lack of permission.`
                  }
                ]
              }
            });
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send({embed: {
                color: 15010332,
                fields: [{
                    name: "Error",
                    value: `The bot can't connect to this channel due to a lack of permission.`
                  }
                ]
              }
            });
        }
        
        if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
            const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
            for (const video of Object.values(videos)) {
                const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
                await handleVideo(video2, msg, voiceChannel, true) // eslint-disable-line no-await-in-loop
            }
            return msg.channel.send({embed: {
                fields: [{
                    name: "Music Queue",
                    value: `Added **${playlist.title}** to queue.`
                  }
                ]
              }
            });
        } else {
            try {
                var video = await youtube.getVideo(url);
            } catch (error) {
                try {
                    var videos = await youtube.searchVideos(searchString, 10);
                    let index = 0;
                    msg.channel.send({embed: {
                        fields: [{
                            name: "Music Queue",
                            value: "🎶 YouTube Search Results.",
                            value: ` ${videos.map(video2 => `\`${++index}\` **-** ${video2.title}`).join('\n')}`
                          },
                          {
                              name: "You have 10 seconds!",
                              value: "Provide a value to select on of the search results ranging from 1-10."
                          }
                        ]
                      }
                    }).then(message =>{message.delete(30000)})
                    try {
                        var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
                            maxMatches: 1,
                            time: 10000,
                            errors: ['time']
                        });
                    } catch (err) {
                        console.error(err);
                        return msg.channel.send({embed: {
                            color: 15010332,
                            fields: [{
                                name: "Error",
                                value: ':notes: No or invalid value entered, cancelling video selection...'
                              }
                            ]
                          }
                        })
                    }
                    const videoIndex = (response.first().content);
                    var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                } catch (err) {
                    console.error(err);
                    return msg.channel.send({embed: {
                        color: 15010332,
                        fields: [{
                            name: "Error",
                            value: ':notes: I could not obtain any search results.'
                          }
                        ]
                      }
                    })
                }
            }

            return handleVideo(video, msg, voiceChannel);
        }
    } else if (msg.content.startsWith(`${prefix}skip`)) {
        console.log(`${msg.author.tag} has been used the ${prefix}skip command in ${msg.guild.name}`);
        if (!msg.member.voiceChannel) return msg.channel.send({embed: {
            color: 15010332,
            fields: [{
                name: "Error",
                value: ':notes: You are not in a voice channel!'
              }
            ]
          }
        })
        if (!serverQueue) return msg.channel.send({embed: {
            color: 15010332,
            fields: [{
                name: "Error",
                value: ':notes: There is nothing playing that I could skip for you.'
              }
            ]
          }
        })
        serverQueue.connection.dispatcher.end();
        return undefined;
    } else if (msg.content.startsWith(`${prefix}stop`)) {
        console.log(`${msg.author.tag} has been used the ${prefix}stop command in ${msg.guild.name}`);
        if (!msg.member.voiceChannel) return msg.channel.send({embed: {
            color: 15010332,
            fields: [{
                name: "Error",
                value: ':notes: You are not in a voice channel!'
              }
            ]
          }
        })
        if (!serverQueue) return msg.channel.send({embed: {
            color: 15010332,
            fields: [{
                name: "Error",
                value: ':notes: There is nothing playing that I could stop for you.'
              }
            ]
          }
        })
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end('Stop command has been used!');
        return undefined;
    } else if (msg.content.startsWith(`${prefix}volume`)) {
        console.log(`${msg.author.tag} has been used the ${prefix}volume command in ${msg.guild.name}`);
        if (!msg.member.voiceChannel) return msg.channel.send({embed: {
            color: 15010332,
            fields: [{
                name: "Error",
                value: ':notes: You are not in a voice channel!'
              }
            ]
          }
        })
        if (!serverQueue) return msg.channel.send({embed: {
            color: 15010332,
            fields: [{
                name: "Error",
                value: ':notes: There is nothing playing.'
              }
            ]
          }
        })
        if (!args[1]) return msg.channel.send({embed: {
            color: 10010332,
            fields: [{
                name: "Volume",
                value: `🔊 The current volume is: **${serverQueue.volume}**`
              }
            ]
          }
        })
        serverQueue.volume = args[1];
        serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
        return msg.channel.send({embed: {
            color: 10010332,
            fields: [{
                name: "Volume",
                value: `🔊 I set the volume to: **${args[1]}**`
              }
            ]
          }
        })
    } else if (msg.content.startsWith(`${prefix}np`)) {
        console.log(`${msg.author.tag} has been used the ${prefix}np command in ${msg.guild.name}`);
        if (!serverQueue) return msg.channel.send({embed: {
            color: 15010332,
            fields: [{
                name: "Error",
                value: ':notes: There is nothing playing that I could skip for you.'
              }
            ]
          }
        })
        return msg.channel.send({embed: {
            fields: [{
                name: "Music Queue",
                value: `Added **${serverQueue.songs[0].title}** to queue`
            }
          ]
        }
        })
    } else if (msg.content.startsWith(`${prefix}queue`)) {
        console.log(`${msg.author.tag} has been used the ${prefix}queue command in ${msg.guild.name}`);
        if (!serverQueue) return msg.channel.send({embed: {
            color: 15010332,
            fields: [{
                name: "Error",
                value: ':notes: There is nothing playing that I could skip for you.'
              }
            ]
          }
        })
        return msg.channel.send({embed: {
            fields: [{
                name: "Music Queue",
                value: `Added ${serverQueue.songs.map(song => `**- ${song.title}**`).join('\n')} to queue`
            }
          ]
        }
        })

    } else if (msg.content.startsWith(`${prefix}pause`)) {
        console.log(`${msg.author.tag} has been used the ${prefix}pause command in ${msg.guild.name}`);
        if (serverQueue && serverQueue.playing) {
            serverQueue.playing = false;
        serverQueue.connection.dispatcher.pause();
        return msg.channel.send({embed: {
            fields: [{
                name: 'info',
                value: 'The player has been paused.'
              }
            ]
          }
        })
        }
        return msg.channel.send({embed: {
            color: 15010332,
            fields: [{
                name: "Error",
                value: ':notes: There is nothing playing.'
              }
            ]
          }
        })
    } else if (msg.content.startsWith(`${prefix}resume`)) {
        console.log(`${msg.author.tag} has been used the ${prefix}resume command in ${msg.guild.name}`);

        if (serverQueue && !serverQueue.playing) {
            serverQueue.playing =  true;
            serverQueue.connection.dispatcher.resume();
            return msg.channel.send({embed: {
                fields: [{
                    name: 'info',
                    value: 'The player has resumed playing.'
                  }
                ]
              }
            })
        }
        return msg.channel.send({embed: {
            color: 15010332,
            fields: [{
                name: "Error",
                value: ':notes: There is nothing playing or something is already playing.'
              }
            ]
          }
        })
    }

    return undefined;
});


async function handleVideo(video, msg, voiceChannel, playlist = false) {
    const serverQueue = queue.get(msg.guild.id);
        const song = {
            id: video.id,
            title: Util.escapeMarkdown(video.title),
            url: `https://www.youtube.com/watch?v=${video.id}`
        };
        if (!serverQueue) {
            const queueConstruct = {
                textChannel: msg.channel,
                voiceChannel: voiceChannel,
                connection: null,
                songs: [],
                volume: 5,
                playing: true
            };
            queue.set(msg.guild.id, queueConstruct);

            queueConstruct.songs.push(song);

            try {
                var connection = await voiceChannel.join();
                queueConstruct.connection = connection;
                play(msg.guild, queueConstruct.songs[0]);
            } catch (error) {
                console.error(`I could not join the voice channel: ${error}`);
                queue.delete(msg.guild.id);
                return msg.channel.send({embed: {
                    color: 15010332,
                    fields: [{
                        name: "Error",
                        value: `:notes: I could not join the voice channel: ${error}`
                      }
                    ]
                  }
                });
            }
        } else {
            serverQueue.songs.push(song);
            if (playlist) return undefined;
            else return msg.channel.send({embed: {
                fields: [{
                    name: "Music Queue",
                    value: `🎵 Added **${song.title}** to queue.`
                  }
                ]
              }
            })
        }
        return undefined;
}

function play(guild, song) {
    const serverQueue = queue.get(guild.id);

    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }

    const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
        .on('end', () => {
            console.log('Song ended.');
            serverQueue.songs.shift();
            play(guild, serverQueue.songs[0]);
        })
        .on('error', error => console.log(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

    serverQueue.textChannel.send({embed: {
        fields: [{
            name: "Music Queue",
            value: `🎶 Added **${song.title}** to queue.`
          }
        ]
      }
    })
}

client.login(process.env.TOKEN);
