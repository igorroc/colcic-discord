const Command = require("../../structures/Command")

const { MessageEmbed } = require("discord.js")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "say",
			description: "Manda uma mensagem no canal escolhido",
			options: [
				{
					name: "canal",
					type: "CHANNEL",
					description: "Canal onde a mensagem será enviada",
					required: true,
				},
				{
					name: "mensagem",
					type: "STRING",
					description: "A mensagem que será enviada",
					required: true,
				},
			],
		})
	}
	run = (interaction) => {
		if (!interaction.member.permissions.has("MANAGE_CHANNELS")) {
			const embedErr = new MessageEmbed()
				.setTitle("Erro")
				.setDescription(
					"Você não tem permissão para realizar esse comando."
				)
				.setColor("RED")

			interaction.reply({
				embeds: [embedErr],
				ephemeral: true,
			})
			return
		}

		const canal = interaction.options.getChannel("canal")

		if (!["GUILD_TEXT", "GUILD_ANNOUNCEMENTS"].includes(canal.type))
			return interaction.reply({
				content: "ERRO | Informe um canal de texto valido",
				ephemeral: true,
			})

		const texto = interaction.options.getString("mensagem")

		canal
			.send({ content: texto })
			.then(() =>
				interaction.reply({
					content: `Mensagem enviada com sucesso no canal ${canal}.`,
					ephemeral: true,
				})
			)
			.catch(() => {
				interaction.reply({
					content: "ERRO | Erro ao enviar a mensagem no canal.",
					ephemeral: true,
				})
			})
	}
}
