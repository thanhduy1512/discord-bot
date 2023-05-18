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
const messageReactionAdd = (client) => {
    client.on("messageReactionAdd", (reaction_orig, user) => __awaiter(void 0, void 0, void 0, function* () {
        const message = reaction_orig.message;
        const channel = client.channels.cache.get("1021345502215802961");
        if (reaction_orig.emoji.name === "✅") {
            yield reaction_orig.message.delete();
            if (message.embeds.length) {
                const embed = message.embeds[0];
                channel.send({ embeds: [embed] });
            }
            else {
                channel.send({ content: message.content });
            }
        }
    }));
};
exports.default = messageReactionAdd;
