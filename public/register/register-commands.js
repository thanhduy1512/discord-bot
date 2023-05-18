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
exports.registerCommand = void 0;
require("dotenv").config();
const { REST, Routes, ApplicationCommandOptionType } = require("discord.js");
const commands = [
    // {
    //   name: "add",
    //   description: "Add two numbers.",
    //   options: [
    //     {
    //       name: "first-number",
    //       description: "The first number",
    //       type: ApplicationCommandOptionType.Number,
    //       choices: [
    //         {
    //           name: "one",
    //           value: 1,
    //         },
    //         {
    //           name: "two",
    //           value: 2,
    //         },
    //         {
    //           name: "three",
    //           value: 3,
    //         },
    //       ],
    //       required: true,
    //     },
    //     {
    //       name: "second-number",
    //       description: "The second number",
    //       type: ApplicationCommandOptionType.Number,
    //       required: true,
    //     },
    //   ],
    // },
    {
        name: "embed",
        description: "Sends an embed!",
    },
    {
        name: "design",
        description: "Sends an design!",
    },
    {
        name: "doing",
        description: "Sends an doing!",
    },
    {
        name: "finish",
        description: "Sends an finish!",
    },
    {
        name: "issue",
        description: "Sends an embed!",
    },
];
const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);
const registerCommand = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Registering");
        yield rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: commands });
        console.log("Registered");
    }
    catch (error) {
        console.log(`There was an error: ${error}`);
    }
});
exports.registerCommand = registerCommand;
