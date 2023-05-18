"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const commands_1 = require("../commands");
const interactionCreate = (client) => {
    client.on("interactionCreate", (interaction) => __awaiter(void 0, void 0, void 0, function* () {
        if (!interaction.isChatInputCommand())
            return;
        if (interaction.isCommand()) {
            const slashCommand = commands_1.Commands.find((cmd) => cmd.name === interaction.commandName);
            if (!slashCommand) {
                interaction.followUp({ content: "An error has occurred" });
                return;
            }
            slashCommand.run(client, interaction);
        }
    }));
};
exports.default = interactionCreate;
