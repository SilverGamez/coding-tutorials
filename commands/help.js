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
    .setTimestamp()

    message.channel.send(embed);
}