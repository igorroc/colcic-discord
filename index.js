require("dotenv").config()

const { ClientRequest } = require("http")
const Client = require("./src/structures/Client")

const client = new Client({
	intents: [
		"GUILDS",
		"GUILD_MESSAGE_REACTIONS",
		"GUILD_MESSAGES",
		"GUILD_INVITES",
		"GUILD_VOICE_STATES",
		"GUILD_MEMBERS",
		"GUILD_PRESENCES",
	],
})

global.openTickets = []
// global.openTickets = [{id: "580722395766194176", topic: "Teste", startDate: new Date()}]

client.login(process.env.BOT_TOKEN)
