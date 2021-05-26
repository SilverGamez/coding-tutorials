const Discord = require('discord.js');

module.exports = async(message, args, client) => {
    message.delete();

    if(message.author.id === '737862913309540413'){ //but how do we get a users id? lets get into it
        try {
            let code = args.slice(0).join(' ');
            if(!code) return message.channel.send('There is no code to execute!');

            if(eval(code)){
                // message.channel.send('Code ran!');
                // message.channel.send("```" + code + "```"); //now lets test! //ctrl + / will automatically turn all this into text
            }
        } catch (error) {
            message.channel.send('An error popped up trying to run that code!')
            message.channel.send("`" + error + "`")
        }
    } else return message.channel.send('You are not a botdev, so you cannot use this!');
}