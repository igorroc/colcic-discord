module.exports = [
	{
		question: "Qual o seu nome?",
		name: "Nome",
	},
	{
		question: "Qual o modelo da camisa?",
		placeholder: "Selecione o modelo",
		customId: "Modelo",
		options: [
			{
				label: "Modelo 1",
				value: "Modelo 1",
				emoji: "🌲",
			},
			{
				label: "Modelo 2",
				value: "Modelo 2",
				emoji: "🌊",
			},
			{
				label: "Modelo 3",
				value: "Modelo 3",
				emoji: "🖥️",
			},
		],
	},
	{
		question: "Qual a cor da gola da camisa?",
		placeholder: "Selecione a cor da gola",
		customId: "Gola",
		options: [
			{
				label: "Branca",
				value: "Branca",
				emoji: "⬜",
			},
			{
				label: "Preta",
				value: "Preta",
				emoji: "⬛",
			},
			{
				label: "Roxa",
				value: "Roxa",
				emoji: "🟪",
			},
			{
				label: "Azul",
				value: "Azul",
				emoji: "🟦",
			},
		],
	},
	{
		question: "Qual a cor da manga da camisa?",
		placeholder: "Selecione a cor da manga",
		customId: "Manga",
		options: [
			{
				label: "Branca",
				value: "Branca",
				emoji: "⬜",
			},
			{
				label: "Mista",
				value: "Mista",
				emoji: "🌈",
			},
			{
				label: "Roxa",
				value: "Roxa",
				emoji: "🟪",
			},
			{
				label: "Azul",
				value: "Azul",
				emoji: "🟦",
			},
		],
	},
	{
		question: "Qual nome você quer no fundo?",
		name: "Titulo",
	},
	{
		question: "Qual número você quer no fundo?",
		name: "Numero",
		minValues: 0,
		maxValues: 99,
	},
	{
		question: "Qual o tamanho da camisa?",
		placeholder: "Selecione o tamanho",
		customId: "Tamanho",
		options: [
			{
				label: "P",
				value: "P",
				description: "120cm x 240cm",
				emoji: "😶",
			},
			{
				label: "M",
				value: "M",
				description: "150cm x 250cm",
				emoji: "😐",
			},
			{
				label: "G",
				value: "G",
				description: "200cm x 340cm",
				emoji: "😬",
			},
			{
				label: "GG",
				value: "GG",
				description: "520cm x 640cm",
				emoji: "😁",
			},
		],
	},
]
