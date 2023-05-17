import { Client, EmbedBuilder, IntentsBitField } from "discord.js";
import ready from "./handlers/ready";
import messageCreate from "./handlers/messageCreate";
import interactionCreate from "./handlers/interactionCreate";
import messageReactionAdd from "./handlers/messageReactionAdd";

require("dotenv").config();

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
