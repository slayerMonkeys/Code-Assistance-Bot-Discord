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
            "name": "📋Liste des commandes générale📋",
            "icon_url": "https://cdn.discordapp.com/avatars/371235417820758017/e7eb75c235f743c60aa9b98a629b3d88.png?size=2048"
          },
          "fields": [
            {
              "name": "1- pr",
              "value":"Vous donne tout les pré-requis a avoir pour créé votrer popre Bot Discord"
            },
            {
              "name": "2- creaappli",
              "value":"Comment créé une application Discord ?"
            },
            {
              "name":"-testlobby",
              "value":"Simule un message de bienvenue"
            }
          ]
        }
    });
    console.log("Listes des commandes envoyé");
    message.guild.channels.find("id", "530525263826780197").send("Liste des commandes envoyé");
};