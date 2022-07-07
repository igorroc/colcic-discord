const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js")
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
		let idVoice = "954913435903197204"

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
		console.log(
			`Canal ${newChannel.name} criado pelo membro ${
				interaction.member.nickname || interaction.member.user.username
			}`
		)

		let invite = await newChannel.createInvite({
			maxAge: 3600, // 1 hora
		})
		let interval = setInterval(deleteNewChannel, 60 * 1000)

		function deleteNewChannel() {
			if (newChannel.members.size == 0) {
				newChannel
					.delete("Ninguém entrou no canal")
					.then(
						console.log(
							`Canal ${newChannel.name} excluído por falta de membros.`
						)
					)
					.catch(console.error)
				clearInterval(interval)
			}
		}

		let embed = new MessageEmbed()
			.setColor("#edd24c")
			.setTitle("Sua sala foi criada!")
			.setDescription(
				`[**Clique Aqui**](https://discord.gg/${invite.code}) para entrar na sua sala!\n
			Caso ninguém entre no canal dentro de 1 minuto, ele será excluído automaticamente.`
			)
			.setTimestamp()

		await interaction.reply({
			embeds: [embed],
			ephemeral: true,
		})
	}
}
