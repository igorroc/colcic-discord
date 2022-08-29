module.exports = [
	{
		// Menu Principal
		question: "De qual semestre é a disciplina?",
		description:
			"Caso deseje remover uma disciplina já matriculada, basta selecionar ela.\nCaso deseje finalizar, selecione a opção ` Finalizar `",
		placeholder: "Selecione o semestre",
		customId: "tipo",
		options: [
			{
				label: "Semestre I",
				value: "semestre1",
				emoji: "1️⃣",
			},
			{
				label: "Semestre II",
				value: "semestre2",
				emoji: "2️⃣",
			},
			{
				label: "Semestre III",
				value: "semestre3",
				emoji: "3️⃣",
			},
			{
				label: "Semestre IV",
				value: "semestre4",
				emoji: "4️⃣",
			},
			{
				label: "Semestre V",
				value: "semestre5",
				emoji: "5️⃣",
			},
			{
				label: "Semestre VI",
				value: "semestre6",
				emoji: "6️⃣",
			},
			{
				label: "Semestre VII",
				value: "semestre7",
				emoji: "7️⃣",
			},
			{
				label: "Semestre VIII",
				value: "semestre8",
				emoji: "8️⃣",
			},
			{
				label: "Optativas",
				value: "optativas",
				emoji: "💻",
			},
			{
				label: "Finalizar",
				value: "finalizar",
				emoji: "❌",
			},
		],
	},
	{
		// 1º Semestre
		question: "Qual matéria você quer adicionar?",
		description: "Você está visualizando matérias do 1º Semestre!",
		placeholder: "Selecione a matéria",
		customId: "semestre1",
		options: [
			{
				label: "Cálculo I - T1",
				description: "Flaviana dos Santos Silva",
				value: "calc1",
				emoji: "📝",
			},
			{
				label: "Introdução a Ciência da Computação - T1",
				description: "Vânia Cordeiro da Silva",
				value: "icc-t1",
				emoji: "📝",
			},
			{
				label: "Introdução a Ciência da Computação - T2",
				description: "Vânia Cordeiro da Silva",
				value: "icc-t2",
				emoji: "📝",
			},
			{
				label: "Linguagem de Programação I - T1",
				description: "Esbel Tomás Valero Orellana",
				value: "lp1-t1",
				emoji: "📝",
			},
			{
				label: "Linguagem de Programação I - T2",
				description: "Vânia Cordeiro da Silva",
				value: "lp1-t2",
				emoji: "📝",
			},
			{
				label: "Lógica para Computação - T1",
				description: "Martha Ximena Torres Delgado",
				value: "logica-t1",
				emoji: "📝",
			},
			{
				label: "Lógica para Computação - T2",
				description: "Paulo André Sperandio Giacomin",
				value: "logica-t2",
				emoji: "📝",
			},
			{
				label: "Metodologia da Pesquisa Científica - T1",
				description: "Ana Paula de Almeida Andrade",
				value: "metodologia",
				emoji: "📝",
			},
			{
				label: "Inglês Instrumental - T1",
				description: "Walkíria França Vieira e Teixeira",
				value: "ingles",
				emoji: "📝",
			},
			{
				label: "Voltar",
				value: "voltar",
				emoji: "⬅️",
			},
		],
	},
	{
		// 2º Semestre
		question: "Qual matéria você quer adicionar?",
		description: "Você está visualizando matérias do 2º Semestre!",
		placeholder: "Selecione a matéria",
		customId: "semestre2",
		options: [
			{
				label: "Álgebra Linear e Geometria Analítica - T1",
				description: "Jurema Lindote Botelho Peixoto",
				value: "aga-t1",
				emoji: "📝",
			},
			{
				label: "Álgebra Linear e Geometria Analítica - T2",
				description: "Jurema Lindote Botelho Peixoto",
				value: "aga-t2",
				emoji: "📝",
			},
			{
				label: "Cálculo II - T1",
				description: "Maria Margarete do Rosário Farias",
				value: "calc2",
				emoji: "📝",
			},
			{
				label: "Eletrônica - T1",
				description: "Hamilton José Brumatto",
				value: "eletronica-t1",
				emoji: "📝",
			},
			{
				label: "Eletrônica - T2",
				description: "Hamilton José Brumatto",
				value: "eletronica-t2",
				emoji: "📝",
			},
			{
				label: "Fund. Matemáticos para Computação - T1",
				description: "César Alberto Bravo Pariente",
				value: "fmc-t1",
				emoji: "📝",
			},
			{
				label: "Fund. Matemáticos para Computação - T2",
				description: "Marta Magda Dornelles",
				value: "fmc-t2",
				emoji: "📝",
			},
			{
				label: "Linguagem de Programação II - T1",
				description: "Edgar Alexander",
				value: "lp2-t1",
				emoji: "📝",
			},
			{
				label: "Linguagem de Programação II - T2",
				description: "Susana Marrero Iglesias",
				value: "lp2-t2",
				emoji: "📝",
			},
			{
				label: "Lógica Digital I - T1",
				description: "Félix Mas Milian",
				value: "ld1-t1",
				emoji: "📝",
			},
			{
				label: "Lógica Digital I - T2",
				description: "Félix Mas Milian",
				value: "ld1-t2",
				emoji: "📝",
			},
			{
				label: "Voltar",
				value: "voltar",
				emoji: "⬅️",
			},
		],
	},
	{
		// 3º Semestre
		question: "Qual matéria você quer adicionar?",
		description: "Você está visualizando matérias do 3º Semestre!",
		placeholder: "Selecione a matéria",
		customId: "semestre3",
		options: [
			{
				label: "Fundamentos de Economia - T1",
				description: "Raimundo Jorge Zumaeta Costa",
				value: "economia",
				emoji: "📝",
			},
			{
				label: "Lógica Digital II - T1",
				description: "Félix Mas Milian",
				value: "ld2-t1",
				emoji: "📝",
			},
			{
				label: "Lógica Digital II - T2",
				description: "Martha Ximena Torres Delgado",
				value: "ld2-t2",
				emoji: "📝",
			},
			{
				label: "Álgebra Abstrata - T1",
				description: "Larissa Brito de Oliveira",
				value: "abstrata",
				emoji: "📝",
			},
			{
				label: "Estrutura de Dados - T1",
				description: "Hélder Conceição Almeida",
				value: "ed-t1",
				emoji: "📝",
			},
			{
				label: "Estrutura de Dados - T2",
				description: "Esbel Tomás Valero Orellana",
				value: "ed-t2",
				emoji: "📝",
			},
			{
				label: "Linguagem de Programação III - T1",
				description: "Dany Sánchez Dominguez",
				value: "lp3-t1",
				emoji: "📝",
			},
			{
				label: "Linguagem de Programação III - T2",
				description: "Sérgio Fred Ribeiro Andrade",
				value: "lp3-t2",
				emoji: "📝",
			},
			{
				label: "Voltar",
				value: "voltar",
				emoji: "⬅️",
			},
		],
	},
	{
		// 4º Semestre
		question: "Qual matéria você quer adicionar?",
		description: "Você está visualizando matérias do 4º Semestre!",
		placeholder: "Selecione a matéria",
		customId: "semestre4",
		options: [
			{
				label: "Análise dos Sistemas de Informação - T1",
				description: "Edgar Alexander",
				value: "asi",
				emoji: "📝",
			},
			{
				label: "Computação Gráfica - T1",
				description: "César Alberto Bravo Pariente",
				value: "cg",
				emoji: "📝",
			},
			{
				label: "Organização e Arquitetura de Computadores - T1",
				description: "Antônio Henrique Figueira Louro",
				value: "oac",
				emoji: "📝",
			},
			{
				label: "Organização e Recuperação da Informação - T1",
				description: "Elinaldo de Santos Goes Junior",
				value: "ori",
				emoji: "📝",
			},
			{
				label: "Probabilidade e Estatística - T1",
				description: "José Cláudio Faria",
				value: "estatistica",
				emoji: "📝",
			},
			{
				label: "Projeto e Análise de Algoritmos - T1",
				description: "Marta Magda Dornelles",
				value: "paa-t1",
				emoji: "📝",
			},
			{
				label: "Projeto e Análise de Algoritmos - T2",
				description: "Paulo André Sperandio Giacomin",
				value: "paa-t2",
				emoji: "📝",
			},
			{
				label: "Voltar",
				value: "voltar",
				emoji: "⬅️",
			},
		],
	},
	{
		// 5º Semestre
		question: "Qual matéria você quer adicionar?",
		description: "Você está visualizando matérias do 5º Semestre!",
		placeholder: "Selecione a matéria",
		customId: "semestre5",
		options: [
			{
				label: "Inteligência Artificial - T1",
				description: "Álvaro Vinícius de Souza Coelho",
				value: "ia",
				emoji: "📝",
			},
			{
				label: "Análise Numérica - T1",
				description: "Gesil Sampaio Amarante Segundo",
				value: "analise",
				emoji: "📝",
			},
			{
				label: "Conceitos de Linguagens de Programação - T1",
				description: "César Alberto Bravo Pariente",
				value: "clp",
				emoji: "📝",
			},
			{
				label: "Software Básico - T1",
				description: "Martha Ximena Torres Delgado",
				value: "sb",
				emoji: "📝",
			},
			{
				label: "Teoria da Computação - T1",
				description: "Marta Magda Dornelles",
				value: "teoria",
				emoji: "📝",
			},
			{
				label: "Banco de Dados I - T1",
				description: "Marcelo Ossamu Honda",
				value: "bd1",
				emoji: "📝",
			},
			{
				label: "Sistemas Operacionais - T1",
				description: "Antônio Henrique Figueira Louro",
				value: "so",
				emoji: "📝",
			},
			{
				label: "Voltar",
				value: "voltar",
				emoji: "⬅️",
			},
		],
	},
	{
		// 6º Semestre
		question: "Qual matéria você quer adicionar?",
		description: "Você está visualizando matérias do 6º Semestre!",
		placeholder: "Selecione a matéria",
		customId: "semestre6",
		options: [
			{
				label: "Compiladores - T1",
				description: "César Alberto Bravo Pariente",
				value: "compiladores",
				emoji: "📝",
			},
			{
				label: "Administração para Computação - T1",
				description: "Clemilda Gonzaga Santos",
				value: "adm",
				emoji: "📝",
			},
			{
				label: "Banco de Dados II - T1",
				description: "Sérgio Fred Ribeiro Andrade",
				value: "bd2",
				emoji: "📝",
			},
			{
				label: "Interface Homem Máquina - T1",
				description: "Edgar Alexander",
				value: "ihm",
				emoji: "📝",
			},
			{
				label: "Rede de Computadores I - T1",
				description: "Jorge Lima de Oliveira Filho",
				value: "redes1",
				emoji: "📝",
			},
			{
				label: "Voltar",
				value: "voltar",
				emoji: "⬅️",
			},
		],
	},
	{
		// 7º Semestre
		question: "Qual matéria você quer adicionar?",
		description: "Você está visualizando matérias do 7º Semestre!",
		placeholder: "Selecione a matéria",
		customId: "semestre7",
		options: [
			{
				label: "Empreendedor de Informática - T1",
				description: "Marcelo Ossamu Honda",
				value: "empreendedor",
				emoji: "📝",
			},
			{
				label: "Engenharia de Software - T1",
				description: "Sérgio Fred Ribeiro Andrade",
				value: "engsoft",
				emoji: "📝",
			},
			{
				label: "Rede de Computadores II - T1",
				description: "Jauberth Weyll Abijaude",
				value: "redes2",
				emoji: "📝",
			},
			{
				label: "Sistemas Distribuídos - T1",
				description: "Paulo André Sperandio Giacomin",
				value: "sd-t1",
				emoji: "📝",
			},
			{
				label: "Sistemas Distribuídos - T1",
				description: "Álvaro Vinícius de Souza Coelho",
				value: "sd-t2",
				emoji: "📝",
			},
			{
				label: "Tecnologia e Sociedade - T1",
				description: "Álvaro Vinícius de Souza Coelho",
				value: "ts",
				emoji: "📝",
			},
			{
				label: "Voltar",
				value: "voltar",
				emoji: "⬅️",
			},
		],
	},
	{
		// 8º Semestre
		question: "Qual matéria você quer adicionar?",
		description: "Você está visualizando matérias do 8º Semestre!",
		placeholder: "Selecione a matéria",
		customId: "semestre8",
		options: [
			{
				label: "Estágio - T1",
				description: "Jauberth Weyll Abijaude",
				value: "estagio-t1",
				emoji: "📝",
			},
			{
				label: "Estágio - T2",
				description: "Marcelo Honda",
				value: "estagio-t2",
				emoji: "📝",
			},
			{
				label: "Voltar",
				value: "voltar",
				emoji: "⬅️",
			},
		],
	},
	{
		// Optativas
		question: "Qual matéria você quer adicionar?",
		description: "Você está visualizando matérias optativas!",
		placeholder: "Selecione a matéria",
		customId: "optativas",
		options: [
			{
				label: "TAC I (Jogos) - T1",
				description: "Elinaldo de Santos Goes Junior",
				value: "tac1",
				emoji: "📝",
			},
			{
				label: "TAC II (Blockchain) - T1",
				description: "Jauberth Weyll Abijaude",
				value: "tac2",
				emoji: "📝",
			},
			{
				label: "Tópicos Avançados em Algoritmos  - T1",
				description: "Hamilton José Brumatto",
				value: "taa",
				emoji: "📝",
			},
			{
				label: "Processamento de Imagens - T1",
				description: "Antônio Henrique Figueira Louro",
				value: "pimg",
				emoji: "📝",
			},
			{
				label: "Introdução à Bioinformática - T1",
				description: "Luciano Ângelo de Souza Bernardes",
				value: "bioinfo",
				emoji: "📝",
			},
			{
				label: "Voltar",
				value: "voltar",
				emoji: "⬅️",
			},
		],
	},
]
