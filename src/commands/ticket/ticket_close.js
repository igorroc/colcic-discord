const { MessageEmbed } = require("discord.js")
const Command = require("../../structures/Command")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "ticket_close",
			description: "Fecha o seu ticket atual",
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

		if (find) {
			let index = global.openTickets.indexOf(interaction.member.user.id)
			global.openTickets.splice(index, 1)
			let embed = new MessageEmbed()
				.setTitle(`✅ SUCESSO`)
				.setDescription(`Seu ticket foi fechado com sucesso!`)
				.setColor("#00d26a")

			return interaction.reply({
				embeds: [embed],
				ephemeral: true,
			})
		}

		let embed = new MessageEmbed()
			.setTitle(`❌ ERRO`)
			.setDescription(
				`Você não possui um ticket aberto.\nPara abrir um, use \`/ticket_open\`.`
			)
			.setColor("#dd252d")

		interaction.reply({
			embeds: [embed],
			ephemeral: true,
		})
	}
}
