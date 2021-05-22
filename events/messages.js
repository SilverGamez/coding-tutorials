module.exports = async(message, client, config) => {
    const args = message.content.substring(config.prefix.length).split(' ');
    const cmd = args.shift().toLowerCase();

    if(!message.content.startsWith(config.prefix)) return;
    if(message.author.bot) return;

    let command;

    if(cmd === 'test'){
        command = require('../commands/test');
        command(message, args, client);
    } else if(cmd === 'say'){
        command = require('../commands/say');
        command(message, args, client);
    } else if(cmd === 'help'){
        command = require('../commands/help');
        command(message, args, client);
    } else if(cmd === 'ping'){
        command = require('../commands/ping');
        command(message, args, client);
    } else if(cmd === 'suggest'){
        command = require('../commands/suggest');
        command(message, args, client);
    } else if(cmd === 'avatar' || cmd === 'av'){//using || between cmds are able to let multi cmds run this command, for example. if i run !av or !avatar. i both get the same command. But lets test out this command!
        command = require('../commands/avatar');
        command(message, args, client);
    }
}