const { testServer } = require("../../../config.json");
const getApplicationCommands = require("../../utils/getApplicationCommands");
const getLocalCommand = require("../../utils/getLocalCommand");

module.exports = async (client) => {
  try {
    const localCommands = getLocalCommand();
    const applicationCommands = getApplicationCommands(client, testServer);

    for (const localCommand of localCommands) {
      const { name, description, options } = localCommand;

      const existingCommand = await applicationCommands.cache.find(
        (cmd) => cmd.name === name
      );
    }
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
};
