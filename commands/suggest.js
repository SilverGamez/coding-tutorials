const Discord = require('discord.js');

module.exports = async(message, args, client) => {
    const suggestion = args.slice(0).join(' ');
    const suggestionChannel = message.guild.channels.cache.get('845507130354171905')//you put your channel id in here, ill show you how to get this in a minute.

    if(!suggestion) return message.channel.send('Please add an suggestion.');

    const suggestionEmbed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setTitle('New Suggestion')
    .setColor('RANDOM')
    .setDescription(`${suggestion}`)

    const msg = await suggestionChannel.send(suggestionEmbed); 
    message.delete();

    msg.react('👍');
    msg.react('👎');
}