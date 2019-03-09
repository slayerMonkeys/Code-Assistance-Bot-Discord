exports.run = (clent, message) => {
    message.channel.send(`${message.author},`, {
        "embed": {
          "color": 12431,
          "timestamp": new Date(),
          "footer": {
            "icon_url": "https://cdn.discordapp.com/avatars/371235417820758017/e7eb75c235f743c60aa9b98a629b3d88.png?size=2048",
            "text": "MirBots | V.1.0 | Mirlocks Developement"
          },
          "author": {
            "name": `Création d'une application`,
            "icon_url": "https://cdn.discordapp.com/avatars/371235417820758017/e7eb75c235f743c60aa9b98a629b3d88.png?size=2048"
          },
          "fields": [
              {
                  "name":"Configuration de l'application",
                  "value":"Entrez le nom du bot et mettez son logo comme ci-dessous"
              }
          ],
          "image":{
              "url":"https://cdn.discordapp.com/attachments/529086524034121729/537018272533446661/codeassistance1.PNG"
          }
        }
        })
    message.channel.send(
        {
            "embed": {
                "color": 12431,
                "timestamp": new Date(),
                "footer": {
                  "icon_url": "https://cdn.discordapp.com/avatars/371235417820758017/e7eb75c235f743c60aa9b98a629b3d88.png?size=2048",
                  "text": "MirBots | V.1.0 | Mirlocks Developement"
                },
                "fields": [
                    {
                        "name":"Création du bot",
                        "value":"Aller dans <<bot>>, puis appuyer sur <<add bot>>.(Attention nous vous rappelons que cette action est irréversible.)"
                    },
                    {
                        "name":"Configuration du bot",
                        "value":"Comme pour l'application entrez le nom du bot et son logo."
                    },
                    {
                        "name":"Mettre son bot sur son serveur",
                        "value":"Aller dans <<OAuth2>>, puis cocher bot et choisisser les permissions à lui donner.\nCopier l'url puis coller la dans votre barre de rercher.\nChoisissez le serveur ou vous voulez l'invité.(Attention il faut être admin ou propritére pour ajouté le bot)"
                    }
                ],
                "image":{
                    "url":"https://cdn.discordapp.com/attachments/529086524034121729/537026956668043275/codeassistance2.PNG"
                }
              }
              }
    )
    }