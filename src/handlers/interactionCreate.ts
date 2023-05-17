import { Client, EmbedBuilder, Interaction } from "discord.js";
import { Commands } from "../commands";

const interactionCreate = (client: Client) => {
  client.on("interactionCreate", async (interaction: Interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.isCommand()) {
      const slashCommand = Commands.find(
        (cmd) => cmd.name === interaction.commandName
      );
      if (!slashCommand) {
        interaction.followUp({ content: "An error has occurred" });
        return;
      }

      slashCommand.run(client, interaction);
    }
  });
};

export default interactionCreate;
