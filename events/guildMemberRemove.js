module.exports = async (client, member) => {
  const channellog = member.guild.channels.find(ch => ch.name === "test");
  channellog.send(`${member} est parti du serv`);
};