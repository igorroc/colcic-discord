const { MessageEmbed } = require("discord.js")
const Command = require("../../structures/Command")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "ticket_open",
			options: [
				{
					name: "tópico",
					type: "STRING",
					description: "O tópico do ticket",
					required: true,
				},
			],
			description:
				"Cria um ticket para tirar duvidas com o Colegiado, CACIC, ou TI",
		})
	}

	run = async (interaction) => {
		let find = false
		global.openTickets.map((ticket) => {
			if (ticket.id == interaction.member.user.id) {
				find = true
				return
			}
		})

		// Usuário ja possui um ticket aberto
		if (find) {
			let embed = new MessageEmbed()
				.setTitle(`❌ ERRO`)
				.setDescription(
					`Você já tem um ticket aberto.\n
					Use \`/ticket_close\` para fechar seu ticket.\n
					Use \`/ticket\` para enviar mais informações sobre o ticket atual **(${
						global.openTickets.find(
							(t) => t.id == interaction.member.user.id
						).topic
					})**`
				)
				.setColor("#dd252d")
			return interaction.reply({
				embeds: [embed],
				ephemeral: true,
			})
		}

		// Adiciona o ticket ao array de tickets abertos
		global.openTickets.push({
			id: interaction.member.user.id,
			topic: interaction.options.getString("tópico"),
			startDate: new Date(),
		})

		// Avisa aos membros de suporte que um novo ticket foi aberto
		interaction.guild.roles.cache
			.get("994724697356906546")
			.members.forEach((member) => {
				let embed = new MessageEmbed()
					.setTitle(`📩 Novo Ticket`)
					.setColor("#edcf40")
					.setDescription(
						`**${
							interaction.member.user
						}** abriu um ticket sobre **${interaction.options.getString(
							"tópico"
						)}**!
						Use \`/ticket ${
							interaction.member.user.id
						}\` para enviar mais informações sobre o ticket atual`
					)
				member.send({ embeds: [embed] })
			})

		// Envia o ticket ao usuário
		let embed = new MessageEmbed()
			.setTitle(`📑 TICKET #${interaction.member.user.id}`)
			.setDescription(
				`Olá, ${
					interaction.member.nickname ||
					interaction.member.user.username
				}!\n
				Seu ticket sobre **${interaction.options.getString(
					"tópico"
				)}** foi aberto com sucesso.
				Responda essa mensagem com suas dúvidas!`
			)
			.setColor("#edcf40")

		let msg = await interaction.member.user.send({ embeds: [embed] })

		embed = new MessageEmbed()
			.setDescription(
				`Vamos seguir com o seu ticket pelo privado!
			[Clique aqui](https://discordapp.com/channels/@me/994715749321023630/) para continuar a conversa.`
			)
			.setColor("#edcf40")

		interaction.reply({
			embeds: [embed],
			ephemeral: true,
		})
	}
}
