const Discord = require('discord.js');

module.exports = async(message, args, client) => {
    //lets copy that for easier use.
    //now lets create an "embed".

    const embed = new Discord.MessageEmbed()
    .setTitle('Help menu') //title of the embed
    .setColor('RANDOM') //Random colour for the embed
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) //the author that would be the users tag and there avatar
    .addField('!help', 'Shows this menu') //first field
    .addField('!ping', 'Shows the bots ping') //and so on
    .addField('!say <text>', 'Copies your text and sends it')
    .addField('!test', 'Sends test') //now the fields are done!
    .setTimestamp() //sets the time of embed sent.

    message.channel.send(embed); //sends the embed, lets see it!
}