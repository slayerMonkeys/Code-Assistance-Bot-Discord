const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const client = new Discord.Client();
const config = require("./config.json");
client.config = config;

fs.readdir("./events", (err, files) => {  // Permet de d'afficher une erreure lorsqu'il y a un probléme dans le fichier event
    if (err) return console.log(err);
    files.forEach(file => {
        const event = require(`./events/${file}`); // Permet lire toute les commande de notre fichier event
        const eventName = file.split(".")[0]; // Prend les noms des commande du ficher event
        client.on(eventName, event.bind(null, client));
    });
});

client.commands = new Enmap();

fs.readdir("./commands", (err, files) => {
    if (err) console.log(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return ; // Vérifie que le fichier finnisse en .js
        const props = require(`./commands/${file}`);
        const commandName = file.split(".")[0];
        console.log(`Commande ${commandName} accepté`);
        client.commands.set(commandName, props);
        
    });
});

client.login(client.config.Token);