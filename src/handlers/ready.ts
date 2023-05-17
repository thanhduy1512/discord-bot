import { Client, TextChannel } from "discord.js";

const ready = (client: Client) => {
  client.on("ready", () => {
    console.log(`${client.user?.tag} is online`);

    const channel = client.channels.cache.get("1021345502215802961");
    if (channel?.isTextBased)
      (channel as TextChannel).send({ content: "content" });
  });
};

export default ready;
