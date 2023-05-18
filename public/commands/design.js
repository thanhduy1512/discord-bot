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
exports.Design = void 0;
const discord_js_1 = require("discord.js");
exports.Design = {
    name: "design",
    description: "Sends an embed!",
    run: (client, interaction) => __awaiter(void 0, void 0, void 0, function* () {
        const embed = new discord_js_1.EmbedBuilder()
            .setTitle("Embed Title")
            .setDescription("This is an embed description")
            .setColor("Random")
            .addFields({
            name: "Field title",
            value: "Some random value",
            inline: true,
        }, {
            name: "2nd Field title",
            value: "Some random value",
            inline: true,
        });
        interaction.reply({ embeds: [embed] });
    }),
};
