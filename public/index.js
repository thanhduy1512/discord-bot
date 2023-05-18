"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const ready_1 = __importDefault(require("./handlers/ready"));
const messageCreate_1 = __importDefault(require("./handlers/messageCreate"));
const interactionCreate_1 = __importDefault(
  require("./handlers/interactionCreate")
);
const messageReactionAdd_1 = __importDefault(
  require("./handlers/messageReactionAdd")
);
const register_commands_1 = require("./register/register-commands");
require("dotenv").config();
(0, register_commands_1.registerCommand)();
const importAllIntents = () => {
  return Object.values(discord_js_1.IntentsBitField.Flags).filter((e) =>
    Number.isInteger(e)
  );
};
const client = new discord_js_1.Client({
  intents: [importAllIntents()],
});
(0, ready_1.default)(client);
(0, interactionCreate_1.default)(client);
(0, messageCreate_1.default)(client);
(0, messageReactionAdd_1.default)(client);
client.login(process.env.TOKEN);
module.exports = client;
