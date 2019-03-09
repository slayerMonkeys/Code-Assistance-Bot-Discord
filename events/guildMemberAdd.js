module.exports = async (client, member) => {
  const channel = member.guild.channels.find(ch => ch.id === "534429311084527616");
  channel.send(`Attention ${member} est arrivé !!!`);
  console.log(`${member} est sur le seveur`);
};