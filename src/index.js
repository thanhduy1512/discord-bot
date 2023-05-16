require("dotenv").config();
const { Client, IntentsBitField } = require("discord.js");
const eventHandler = require("./handlers/eventHanlder");

const importAllIntents = () => {
  return Object.values(IntentsBitField.Flags).filter((e) =>
    Number.isInteger(e)
  );
};

const client = new Client({
  intents: [importAllIntents()],
});

eventHandler(client);

// let status = [
//   {
//     name: "Under Ctrl",
//     type: ActivityType.Streaming,
//     url: "https://www.youtube.com/watch?v=OqxHy8sCtvA&list=PLpmb-7WxPhe0ZVpH9pxT5MtC4heqej8Es&index=6",
//   },
//   {
//     name: "Custom Status 1",
//   },
//   {
//     name: "Custom Status 2",
//     type: ActivityType.Watching,
//   },
//   {
//     name: "Custom Status 3",
//     type: ActivityType.Listening,
//   },
// ];

// client.on("ready", (c) => {
//   console.log(`${c.user.tag} is online`);

//   setInterval(() => {
//     let random = Math.floor(Math.random() * status.length);
//     client.user.setActivity(status[random]);
//     console.log("interval run", status[random]);
//   }, 10000);
// });

// client.on("interactionCreate", (interaction) => {
//   if (!interaction.isChatInputCommand()) return;

//   // if (interaction.commandName === "add") {
//   //   const num1 = interaction.options.get("first-number").value;
//   //   const num2 = interaction.options.get("second-number").value;

//   //   interaction.reply(`Sum: ${num1 + num2}`);
//   // }

//   if (interaction.commandName === "embed") {
//     const embed = new EmbedBuilder()
//       .setTitle("Embed Title")
//       .setDescription("This is an embed description")
//       .setColor("Random")
//       .addFields(
//         {
//           name: "Field title",
//           value: "Some random value",
//           inline: true,
//         },
//         {
//           name: "2nd Field title",
//           value: "Some random value",
//           inline: true,
//         }
//       );

//     interaction.reply({ embeds: [embed] });
//   }
// });

// client.on("messageCreate", (message) => {
//   if (message.author.bot) {
//     return;
//   }
//   const embed = new EmbedBuilder()
//     .setTitle("Embed Title")
//     .setDescription("This is an embed description")
//     .setColor("Random")
//     .addFields(
//       {
//         name: "Field title",
//         value: "Some random value",
//         inline: true,
//       },
//       {
//         name: "2nd Field title",
//         value: "Some random value",
//         inline: true,
//       }
//     );

//   message.channel.send({ embeds: [embed] });
// });

client.login(process.env.TOKEN);
