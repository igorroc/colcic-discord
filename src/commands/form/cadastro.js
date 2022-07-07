const Command = require("../../structures/Command")

const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js")

const matriculas = require("../../util/dbMatriculas")

const actionRow = new MessageActionRow().addComponents([
	new MessageButton().setStyle("DANGER").setLabel("Não").setCustomId("no"),
	new MessageButton().setStyle("PRIMARY").setLabel("Sim").setCustomId("yes"),
])

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "cadastro",
			description: "Realiza o cadastro no servidor.",
			options: [
				{
					name: "matricula",
					type: "STRING",
					description: "Número de sua matrícula.",
					required: true,
				},
			],
		})
	}
	run = async (interaction) => {
		const numeroMatricula = interaction.options.getString("matricula")

		const aluno = matriculas.find((m) => m.id === numeroMatricula)
		if (aluno) {
			const embed = new MessageEmbed()
				.setTitle(`Seja bem vindo(a) ao servidor, ${aluno.name}`)
				.setDescription(
					`Você atualmente está matriculado nas seguintes matérias:`
				)
				.setColor("BLURPLE")
				.setTimestamp()

			embed.addField("\u200B", "\u200B") // blank field
			aluno.materias.forEach((m) => {
				embed.addField(m.name, `Turma: ${m.turma}`, true)
			})
			embed.addField("\u200B", "\u200B") // blank field
			embed.addField(
				"Deseja confirmar esses dados?",
				"Clique no botão abaixo da mensagem"
			)

			const reply = await interaction.reply({
				embeds: [embed],
				components: [actionRow],
				fetchReply: true,
			})

			const filter = (b) => b.user.id === interaction.user.id
			const collector = reply.createMessageComponentCollector({
				filter,
				time: 10000,
			})
			collector.on("collect", (i) => {
				const embedConfirmation = new MessageEmbed().setTimestamp()

				switch (i.customId) {
					case "yes":
						embedConfirmation
							.setTitle(`Seu cadastro foi concluído com sucesso!`)
							.setDescription(
								`Seja bem vindo(a) **${aluno.name}**!`
							)
							.setColor("GREEN")
						interaction.editReply({
							components: [],
							embeds: [embedConfirmation],
						})
						break
					case "no":
						embedConfirmation
							.setTitle(`Seu cadastro foi cancelado.`)
							.setDescription(
								`Verifique os dados e tente novamente para ter acesso ao servidor!`
							)
							.setColor("RED")
						interaction.editReply({
							components: [],
							embeds: [embedConfirmation],
						})
						break
				}
			})
			collector.on("end", (collected, reason) => {
				console.log(collected)
				if (reason === "time")
					interaction.editReply({
						content: `O tempo limite foi atingido, faça seu cadastro novamente!`,
						components: [],
					})
			})
		} else {
			interaction.reply({
				content: `O número de matricula \`${numeroMatricula}\` não foi encontrado.\nVerifique e tente novamente!`,
				ephemeral: true,
			})
		}
	}
}
