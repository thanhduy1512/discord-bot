import { channel } from "diagnostics_channel";
import { Client, TextChannel, EmbedBuilder } from "discord.js";

const messageReactionAdd = (client: Client) => {
  client.on("messageReactionAdd", async (reaction_orig, user) => {
    const message = reaction_orig.message;
    const channel = client.channels.cache.get(
      "1021345502215802961"
    ) as TextChannel;

    if (reaction_orig.emoji.name === "✅") {
      await reaction_orig.message.delete();
      if (message.embeds.length) {
        const embed = message.embeds[0];
        channel.send({ embeds: [embed] });
      } else {
        channel.send({ content: message.content as string });
      }
    }
  });
};

export default messageReactionAdd;
