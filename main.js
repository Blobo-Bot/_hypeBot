require('./modules/functions');
const {Client} = im('discord.js');

const hype = new Client({
    ws: { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "DIRECT_MESSAGES", "GUILD_PRESENCES"] }
});

start = async () => {

};

(async () => {
    await start();
})();