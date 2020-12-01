var Discord = require('discord.js');
var botName = require('./package.json');
var bot = new Discord.Client();

bot.on('message', message =>{

    // Variables
    var sender = message.author; //The person who sent the message
    var msg = message.content;
    var prefix = "-" //The text before commands, you can put anything that you prefer

    if(message.author.id != "783225162777755649" && message.channel.id === "575624302238498817"){
        if(msg.startsWith('-', 0)){
            if(msg === prefix + "Hi" && message.channel.id === "575624302238498817"){
                message.channel.send('Hello My Friend') // Sends a message to the channel, with the content
            }

bot.login(process.env.BOT_TOKEN)
