const Discord = require('discord.js');

module.exports = async(message, args, client) => {
    //In this command, the bot will copy the message sent by the user.
    //command setup, now lets code.

    const query = args.slice(0).join(" ");
    if(!query) return message.channel.send('Please add a text for the bot to say!');

    message.delete();
    message.channel.send(query);
    //now lets see it in action
}