import { Client, EmbedBuilder, ChatInputCommandInteraction } from "discord.js";
import { ICommand } from "../types/command";

export const Issue: ICommand = {
  name: "issue",
  description: "Sends an embed!",
  run: async (client: Client, interaction: ChatInputCommandInteraction) => {
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
  },
};
