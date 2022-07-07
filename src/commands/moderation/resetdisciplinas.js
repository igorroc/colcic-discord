const Command = require("../../structures/Command")

const { MessageEmbed } = require("discord.js")

const questions = require("../../util/materiasQuestions")

const categorias = [
	"953370531237888040", // 1º Semestre
	"953374778591432705", // 2º Semestre
	"953374850725056542", // 3º Semestre
	"953374920279228450", // 4º Semestre
	"953379926483009577", // 5º Semestre
	"953380017566523452", // 6º Semestre
	"953380096679510046", // 7º Semestre
	"953380136802189353", // 8º Semestre
	"953409232525480006", // Optativas
]

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "resetdisciplinas",
			description: "Reseta as permissões dos chats de matérias para",
		})
	}
	run = async (interaction) => {
		if (!interaction.member.permissions.has("ADMINISTRATOR")) {
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

		const disciplinas = questions
			.map((q) => {
				if (q.customId != "tipo") {
					const options = q.options.map((op) => {
						if (op.value != "voltar") {
							return op.value
						}
					})
					return {
						title: q.customId,
						chats: options,
					}
				}
			})
			.filter((q) => q)
			.map((q) => q.chats.filter((ch) => ch))

		let aux = 0

		disciplinas.forEach((semestre) => {
			semestre.forEach(async (disc) => {
				interaction.guild.channels.cache
					.filter((ch) => ch.name === `📝▏${disc}`)
					.each((ch) => {
						ch.delete()
					})

				let newChannel = await interaction.guild.channels.create(
					`📝▏${disc}`,
					{
						parent: interaction.guild.channels.cache.get(
							categorias[aux]
						),
					}
				)
			})
			aux++
		})

		interaction.reply({
			content: `Resetar Disciplinas.`,
			ephemeral: true,
		})
	}
}
