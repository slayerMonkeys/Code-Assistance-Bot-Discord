exports.run = (client, message) => {
    message.channel.send(`${message.author},`, {
        "embed": {
          "color": 12431,
          "timestamp": new Date(),
          "footer": {
            "icon_url": "https://cdn.discordapp.com/avatars/371235417820758017/e7eb75c235f743c60aa9b98a629b3d88.png?size=2048",
            "text": "MirBots | V.1.0 | Mirlocks Developement"
          },
          "author": {
            "name": "Les Pré-requis",
            "icon_url": "https://cdn.discordapp.com/avatars/371235417820758017/e7eb75c235f743c60aa9b98a629b3d88.png?size=2048"
          },
          "fields": [
              {
                  "name":"Editeur code",
                  "value":`Nous vous conseillons d'utilisé [Visual Code Studio](https://code.visualstudio.com/?wt.mc_id=DX_841432) mais vous pouvez en utilisé d'autre comme [Atom](https://atom.io/)`
              },
              {
                  "name":"Node.js",
                  "value":"Permet de lancer notre bot en local(Pour les débutant il est préférable de garder son bot en local)"
              },
              {
                  "name":"Python 3.7 ou +",
                  "value":"Pour faire des interfaces à votre bot (Difficulté: avancé)"
              }
          ]
        }
        })
    }