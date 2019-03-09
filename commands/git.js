exports.run = (client, message) => {
    message.delete()
    message.channel.send({
        "embed": {
          "color": 12431,
          "timestamp": new Date(),
          "footer": {
            "icon_url": "https://cdn.discordapp.com/avatars/371235417820758017/e7eb75c235f743c60aa9b98a629b3d88.png?size=2048",
            "text": "MirBots | V.1.0 | Mirlocks Developement"
          },
          "author": {
            "name": "Lien git des projets en cours",
            "icon_url": "https://cdn.discordapp.com/avatars/371235417820758017/e7eb75c235f743c60aa9b98a629b3d88.png?size=2048"
          },
          "fields": [
              {
              "name": "Mirbots",
              "value":"heroku git:clone -a mirbots"
              },
              {
                "name":"Code Assistance",
                "value":"heroku git:clone -a codeassistance"
              },
              {
                "name":"Events Bot",
                "value":"heroku git:clone -a botevents"
              }
          ]
        }
      }
     )
    console.log("Commande git envoyé");
    message.guild.channels.find("id", "530525263826780197").send("Commande git envoyé");
}