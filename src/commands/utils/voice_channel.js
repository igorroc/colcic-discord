const { MessageActionRow, MessageButton } = require("discord.js")
const Command = require("../../structures/Command")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "voice",
			description:
				"Cria um canal de voz para voce estudar com seus amigos",
		})
	}
	run = async (interaction) => {
		// categoria onde sera criada os chats de voz
		let idVoice = "994673516161015838"

		let categoria = interaction.member.guild.channels.cache.get(idVoice)

		let maxNum = 0
		await categoria.children.map((rank) => {
			let number = Number(rank.name.split("🚀▏Office #")[1])
			if (number > maxNum) maxNum = number
		})

		let newChannel = await interaction.member.guild.channels.create(
			`🚀▏Office #${maxNum + 1}`,
			{
				reason: `Criado por ${
					interaction.member.nickname ||
					interaction.member.user.username
				}`,
				parent: categoria,
				type: "GUILD_VOICE",
			}
		)

		let interval = setInterval(deleteNewChannel, 60*1000)

		function deleteNewChannel() {
			if (newChannel.members.size == 0) {
				newChannel
					.delete("Ninguém entrou no canal")
					.then(console.log("Canal excluído por falta de membros."))
					.catch(console.error)
				clearInterval(interval)
			}
		}

		await interaction.reply({
			content:
				"Caso ninguém entre no canal dentro de 1 minuto, ele será excluído automaticamente.",
			ephemeral: true,
		})
	}
}
