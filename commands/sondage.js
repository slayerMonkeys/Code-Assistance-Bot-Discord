exports.run = (client, message) => {
    const args = message.content.split(" ").slice(1);
    const thingToEcho = args.join(" ");
    const find = 
    message.delete();
    message.guild.channels.find("name", "sondage").send(`@everyone,${message.author} propose comme sondage`,
        {
            "embed": {
                "color": 12431,
                "timestamp": new Date(),
                "footer": {
                    "icon_url": "https://cdn.discordapp.com/avatars/371235417820758017/e7eb75c235f743c60aa9b98a629b3d88.png?size=2048",
                    "text": "MirBots | V.1.0 | Mirlocks Developement"
                },
                "author": {
                    "name": "📊Sondage📊",
                    "icon_url": "https://cdn.discordapp.com/avatars/371235417820758017/e7eb75c235f743c60aa9b98a629b3d88.png?size=2048"
                },
                "fields": [
                    {
                      "name": `${thingToEcho}`,
                      "value": "Répondre avec :white_check_mark: ou :x:"
                    }
                  ]
            }
        }
    )
        .then(function(message) {
            message.react("✅");
            message.react("❌");
        }).catch(function() {
        });
    console.log("sondage envoyé")
    message.guild.channels.find("id", "530525263826780197").send("sondage envoyé")
};