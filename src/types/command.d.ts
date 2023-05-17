import {
  Interaction,
  ChatInputApplicationCommandData,
  Client,
} from "discord.js";

declare interface ICommand extends ChatInputApplicationCommandData {
  run: (client: Client, interaction: ChatInputCommandInteraction) => void;
}
