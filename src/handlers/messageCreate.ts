import { Client, EmbedBuilder, TextChannel } from "discord.js";

const messageCreate = (client: Client) => {
  client.on("messageCreate", (message) => {
    if (message.author.bot) {
      return;
    }
    const embed = new EmbedBuilder()
      .setTitle("Embed Title")
      .setDescription("This is an embed description")
      .setColor("Random")
      .addFields(
        {
          name: "Field title",
          value: "Some random value",
          inline: true,
        },
        {
          name: "2nd Field title",
          value: "Some random value",
          inline: true,
        }
      );

    message.channel.send({ embeds: [embed] });
  });
};

export default messageCreate;
