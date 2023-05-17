import { Client, TextChannel } from "discord.js";

const messageReactionAdd = (client: Client) => {
  client.on("messageReactionAdd", async (reaction_orig, user) => {
    if (reaction_orig.emoji.name === "✅") await reaction_orig.message.delete();
  });
};

export default messageReactionAdd;
