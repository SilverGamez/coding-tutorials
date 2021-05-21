const Discord = require('discord.js');

module.exports = async(message, args, client) => {

    const query = args.slice(0).join(" ");
    if(!query) return message.channel.send('Please add a text for the bot to say!');

    message.delete();
    message.channel.send(query);
}