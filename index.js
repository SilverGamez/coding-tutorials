const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client();
client.login(config.token);

client.on('ready', () => {
    const readyEvent = require('./events/ready');
    readyEvent(client); 
});

client.on('message', (message) => {
    const messageEvent = require('./events/messages');
    messageEvent(message, client, config); 
});
