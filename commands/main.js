exports.run = (client, message) => {
    message.channel.send(`${message.author},`,
    {
        "embed": {
          "color": 12431,
          "timestamp": new Date(),
          "footer": {
            "icon_url": "https://cdn.discordapp.com/avatars/371235417820758017/e7eb75c235f743c60aa9b98a629b3d88.png?size=2048",
            "text": "MirBots | V.1.0 | Mirlocks Developement"
          },
          "thumbnail": {
            "url": "https://help-theproject.eu/moodle/theme/klass/pix/home/help-logo21.jpg"
          },
          "author": {
            "name": "main.js",
            "icon_url": "https://cdn.discordapp.com/avatars/371235417820758017/e7eb75c235f743c60aa9b98a629b3d88.png?size=2048"
          },
          "fields": [
            {
              "name": "à quoi ça sert ?",
              "value":"Vous donne tout les pré-requis a avoir pour créé votrer popre Bot Discord"
            },
            {
                "name":"Le code",
                "value":"Merci de ne pas copier bêtement le mais d'essayer de le comprendre"
            }
          ]
        }
    });
    message.channel.send('```js\nconst Discord = require("discord.js");\nconst Enmap = require("enmap");\nconst fs = require("fs");\nconst client = new Discord.Client();\n\nfs.readdir("./events", (err, files) => {\n    if (err) return console.log(err);\n    files.forEach(file => {\n        const event = require(`./events/${file}`); // Permet lire toute les commande de notre fichier event\n        const eventName = file.split(".")[0]; // Prend les noms des commande du ficher event\n        client.on(eventName, event.bind(null, client));\n    });\n});\n\nclient.commands = new Enmap();\n\nfs.readdir("./commands", (err, files) => {\n    if (err) console.log(err);\n    files.forEach(file => {\n        if (!file.endsWith(".js")) return ; // Vérifie que le fichier finnisse en .js\n        const props = require(`./commands/${file}`);\n        const commandName = file.split(".")[0];\n        console.log(`Commande ${commandName} accepté`);\n        client.commands.set(commandName, props);\n\n    });\n});\n\nclient.login(process.env.BOT_TOKEN);```')
    console.log("Listes des commandes envoyé");
    message.guild.channels.find("id", "530525263826780197").send("Liste des commandes envoyé");
};