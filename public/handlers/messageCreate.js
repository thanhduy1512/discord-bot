"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const messageCreate = (client) => {
    client.on("messageCreate", (message) => {
        if (message.author.bot) {
            return;
        }
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
        message.channel.send({ embeds: [embed] });
    });
};
exports.default = messageCreate;
