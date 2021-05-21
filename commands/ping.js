const Discord = require('discord.js');

module.exports = async(message, args, client) => {
    //so we are going to make an embed with this!
    const ping = Date.now() - message.createdTimestamp;

    const embed = new Discord.MessageEmbed()
    .setTitle('Ping!')
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setColor('RANDOM')
    .setDescription(`Pong! \`${ping}ms\``)
    //shows the bots ping!

    message.channel.send(embed); //sends the message and lets see!
}