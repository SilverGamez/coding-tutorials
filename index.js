const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client();
client.login(config.token);

client.on('ready', () => {
    const readyEvent = require('./events/ready');
    readyEvent(client); //now this works also
});

client.on('message', (message) => {
    const messageEvent = require('./events/messages');
    messageEvent(message, client, config); //lets the file use message and the client
});
//now lets try!
//now lets make another command.