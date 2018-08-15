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
client.user.setGame(`DONT TALK TO ME|${client.guilds.size} Servers`,)
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
client.on('message', message => {

    if (message.content.startsWith("link")) {        
  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>  
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("#06ff00")
        .setDescription(" :white_check_mark: Your link has been sent to you ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("#c6e913")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
--------------------- 
**that** __invite link__ **for ever** welcome to** **__Tinder™__** support https://discord.gg/3UKC2BE :kissing_closed_eyes:
---------------------
 ~~have nice day~~ :smiley:
---------------------`)
      message.author.sendEmbed(Embed11)
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
      var prefix = "?";
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
  if (message.content === `?qa`) {
message.channel.sendMessage({embed: {
  color: 3547003,
  description: `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`
}});
};
});
client.on('message' , async (message) => {
       if(message.content.startsWith(`<@${client.user.id}>`)) {
              
 let responses = [
        '**how can i help you?**',
        '**EVERYONE HAS A HERO xD ** ',
        '**im bot i swear to god**  ',
        '**what do you want?** ',
        '**Hi**',
        '**how are you?**',
        '**?**',
        '**bro stop bitch**',
		'**you need help?**',
		'**if you need any help about the bot ask!** @HiMoxY™#1027',
		'**you need help?**',
		'**go to** https://discord.gg/WSXUkRG ',
		'**im sleppy **',
		'**im not a liar**',
    ]
    
    // Fetch a random item from the array
    let fetched = responses[Math.floor(Math.random() * responses.length)];
   message.reply(fetched)
       }
  
});


client.login(process.env.TOKEN);
