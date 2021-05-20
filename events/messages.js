module.exports = async(message, client, config) => {
    //Now we can paste it here;
    //wait we need to add something else!
    //now lets start.
    const args = message.content.substring(config.prefix.length).split(' ');
    const cmd = args.shift().toLowerCase();

    if(!message.content.startsWith(config.prefix)) return;
    if(message.author.bot) return;

    let command;

    if(cmd === 'test'){
        command = require('../commands/test');
        command(message, args, client); //letting the file use messgae, args and client.
    } else if(cmd === 'say'){
        command = require('../commands/say');
        command(message, args, client);
    }
}
//now we are done