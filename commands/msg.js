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
            "name": "message.js",
            "icon_url": "https://cdn.discordapp.com/avatars/371235417820758017/e7eb75c235f743c60aa9b98a629b3d88.png?size=2048"
          },
          "fields": [
            {
              "name": "C'est quoi ?",
              "value":"Coming soon"
            },
            {
                "name":"Le code",
                "value":"Merci de ne pas copier bêtement le mais d'essayer de le comprendre"
            }
          ]
        }
    });
    message.channel.send("```js\nmodule.exports = (client, message) => {\n    if (message.author.bot) return;\nif(message.content.indexOf(client.config.Prefix) !== 0) return;\n    const args =message.content\n        .slice(client.config.Prefix.length)\n        .trim()\n        .split(/ +/g);\n    const command = args.shift().toLowerCase();\n    const cmd = client.commands.get(command);\n    if (!cmd) return;\n    cmd.run(client, message, args);\n};\n```")
    console.log("Listes des commandes envoyé");
    message.guild.channels.find("id", "530525263826780197").send("Liste des commandes envoyé");
};