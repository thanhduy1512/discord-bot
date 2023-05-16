import { TextChannel } from "discord.js";
import { EmbedBuilder, Client, IntentsBitField, Interaction } from "discord.js";

require("dotenv").config();

const importAllIntents = (): number[] => {
  return Object.values(IntentsBitField.Flags).filter((e) =>
    Number.isInteger(e)
  ) as number[];
};

const client = new Client({
  intents: [importAllIntents()],
});

client.on("ready", async (c: Client) => {
  console.log(`${c.user?.tag} is online`);

  const channel = c.channels.cache.get("1021345502215802961");
  if (channel?.isTextBased)
    (channel as TextChannel).send({ content: "content" });
});

client.on("interactionCreate", async (interaction: Interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "embed") {
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

    interaction.reply({ embeds: [embed] });
  }
});

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

client.login(process.env.TOKEN);
