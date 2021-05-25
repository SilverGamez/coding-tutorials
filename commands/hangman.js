const Discord = require('discord.js');
const { hangman } = require('reconlx');

module.exports = async(message, args, client) => {
    const word = args.slice(0).join(' ');
    if(!word) return message.channel.send('Please add a word for others to guess!');

    let channel = message.mentions.channels.first();
    if(!channel) channel = message.channel;

    message.delete();

    const hang = new hangman({
        channelID: channel.id,
        client: client,
        message: message,
        word: word
    });

    hang.start();
    //now it should work!
}