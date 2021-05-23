const Discord = require('discord.js');

module.exports = async(message, args, client) => {
    const responses = [
        "Yes",
        "No",
        "Maybe",//you can keep adding these replies if you want
        "100% percent!",
        "Never"
    ];

    const response = Math.floor(Math.random() * responses.length);
    const question = args.slice(0).join(' ');
    if(!question) return message.channel.send('What are you going to ask the 8ball?')

    const embed = new Discord.MessageEmbed()
    .setTitle('🎱 8ball 🎱') //emoji in the description
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setColor('RANDOM')
    .addField('Question', '```' + question + '```')
    .addField('Anwser', '```' + responses[response] + '```')

    message.channel.send(embed); //lets test this out.
} //sorry havent coded this much