const Discord = require('discord.js');

module.exports = async(message, args, client) => {
    const embed = new Discord.MessageEmbed()
    .setTitle('Help menu') 
    .setColor('RANDOM') 
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .addField('!help', 'Shows this menu') 
    .addField('!ping', 'Shows the bots ping')
    .addField('!say <text>', 'Copies your text and sends it')
    .addField('!test', 'Sends test') 
    .addField('!suggest <suggestion>', 'Creates a suggestion for that server')
    .addField('!avatar <@user>', 'Shows the users avatar')
    .addField('!8ball <question>', 'Magic 8ball!')
    .addField('!hangman <channel(optional)> <word>', 'Creates a hangman for your friends to play!')
    .addField('!eval <code>', 'Runs code.')
    .setTimestamp()

    message.channel.send(embed);
}