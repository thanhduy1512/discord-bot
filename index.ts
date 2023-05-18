import { Client, EmbedBuilder, IntentsBitField } from "discord.js";
import ready from "./src/handlers/ready";
import messageCreate from "./src/handlers/messageCreate";
import interactionCreate from "./src/handlers/interactionCreate";
import messageReactionAdd from "./src/handlers/messageReactionAdd";
import { registerCommand } from "./src/register/register-commands";
import keepAlive from "./server";

require("dotenv").config();

registerCommand();

const importAllIntents = (): number[] => {
  return Object.values(IntentsBitField.Flags).filter((e) =>
    Number.isInteger(e)
  ) as number[];
};

const client = new Client({
  intents: [importAllIntents()],
});

ready(client);
interactionCreate(client);
messageCreate(client);

messageReactionAdd(client);

client.login(process.env.TOKEN);

keepAlive();
