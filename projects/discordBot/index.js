const fs = require('fs');
const Discord = require('discord.js');
const env = require('./.env')
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


const prefix = '#';

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}


function onMessage(message) {
    if (message.channel.id !== '805864742790889532') return;
    
    
    const args = message.content.slice(prefix.length)
    .trim()
    .split(/ +/);
    
    const command = args.shift().toLowerCase()
    const fullMessage = message.content.toString()
    .toLowerCase()
    .slice(prefix.length + command.length);
    
    
    // console.log(message)
    console.log(fullMessage)
    
    
    if (message.content.startsWith(prefix)) {
        if (!client.commands.has(command)) return
        
        
        // function addingToArr (command) {
            
        //     switch(command) {
        //         case imbored :
        //             boredArr.push(fullMessage);
        //             break
                
        //         default :
        //             message.reply('The message could not be added, because this command does not support addition of custom messages');
        //             break
        //     }
        // } 

//if the full message is longer than the prefix + command.length, goes to the array and adds that message

        // if(fullMessage.length > 0){
        //     message.channel.send(boredArr)
        //     try {
        //         addingToArr(command);
        //         message.channel.send('The idea was added succesfully.');


        //     } catch {
        //         message.channel.send('This idea could not be added.');
        //     }
        // }



        


        try {
            client.commands.get(command).execute(message,args);
            console.log(fullMessage);
        } catch (error) {
            console.log(error);
            message.reply('there was an error trying to execute that command')
        }
    }
}
function  readyDiscord  () { 
    client.user.setActivity('the spiral...', {type: 'WATCHING'})
    

    console.log('I Am Online')
}





client.on('message',onMessage)
client.login(env.token);
client.on('ready', readyDiscord);

// to reply messages use message.reply('');
// to send a normal message use message.channel.send('');
// to set the bot activity  client.user.setActivity('the spiral...', {type:"WATCHING"})
