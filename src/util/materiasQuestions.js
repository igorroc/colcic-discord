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
				description: "Eurivalda Ribeiro dos Santos Santana",
				value: "calc1",
				emoji: "📝",
			},
			{
				label: "Física - T1",
				description: "Marcelo O Donnell Krause",
				value: "fisica-t1",
				emoji: "📝",
			},
			{
				label: "Física - T2",
				description: "Marcelo O Donnell Krause",
				value: "fisica-t2",
				emoji: "📝",
			},
			{
				label: "Inglês Instrumental - T1",
				description: "Walkíria França Vieira e Teixeira",
				value: "ingles-t1",
				emoji: "📝",
			},
			{
				label: "Inglês Instrumental - T2",
				description: "Walkíria França Vieira e Teixeira",
				value: "ingles-t2",
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
				description: "Lilia Marta Brandão Soussa Modesto",
				value: "icc-t2",
				emoji: "📝",
			},
			{
				label: "Linguagem de Programação I - T1",
				description: "Vânia Cordeiro da Silva",
				value: "lp1-t1",
				emoji: "📝",
			},
			{
				label: "Linguagem de Programação I - T2",
				description: "Esbel Tomás Valero Orellana",
				value: "lp1-t2",
				emoji: "📝",
			},
			{
				label: "Lógica para Computação - T1",
				description: "Paulo André Sperandio Giacomin",
				value: "logica-t1",
				emoji: "📝",
			},
			{
				label: "Lógica para Computação - T2",
				description: "Martha Ximena Torres Delgado",
				value: "logica-t2",
				emoji: "📝",
			},
			{
				label: "Metodologia da Pesquisa Científica - T1",
				description: "Ana Paula de Almeida Andrade",
				value: "metodologia-t1",
				emoji: "📝",
			},
			{
				label: "Metodologia da Pesquisa Científica - T2",
				description: "Ana Paula de Almeida Andrade",
				value: "metodologia-t2",
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
				description: "José Carlos Chagas",
				value: "aga",
				emoji: "📝",
			},
			{
				label: "Cálculo II - T1",
				description: "José Carlos Chagas",
				value: "calc2-t1",
				emoji: "📝",
			},
			{
				label: "Cálculo II - T2",
				description: "Elisangela Silva Farias",
				value: "calc2-t2",
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
				description: "Susana Marrero Iglesias",
				value: "lp2-t1",
				emoji: "📝",
			},
			{
				label: "Linguagem de Programação II - T2",
				description: "Edgar Alexander",
				value: "lp2-t2",
				emoji: "📝",
			},
			{
				label: "Linguagem de Programação II - T3",
				description: "Susana Marrero Iglesias",
				value: "lp2-t3",
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
				label: "Álgebra Abstrata - T1",
				description: "Ricardo Martin Bentin Zacarias",
				value: "abstrata",
				emoji: "📝",
			},
			{
				label: "Cálculo III - T1",
				description: "Gesil Sampaio Amarante Segundo",
				value: "calc3",
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
				label: "Fundamentos de Economia - T1",
				description: "Zina Angelica Caceres Benavides",
				value: "economia",
				emoji: "📝",
			},
			{
				label: "Linguagem de Programação III - T1",
				description: "Susana M. Iglesias / Dany S. Dominguez",
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
				label: "Lógica Digital II - T1",
				description: "Hamilton José Brumatto",
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
				label: "Lógica Digital II - T3",
				description: "Félix Mas Milian",
				value: "ld2-t3",
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
				description: "Sérgio Fred Ribeiro Andrade",
				value: "asi",
				emoji: "📝",
			},
			{
				label: "Computação Gráfica - T1",
				description: "Marcelo Ossamu Honda",
				value: "cg-t1",
				emoji: "📝",
			},
			{
				label: "Computação Gráfica - T2",
				description: "César Alberto Bravo Pariente",
				value: "cg-t2",
				emoji: "📝",
			},
			{
				label: "Direito e Legislação - T1",
				description: "Guilhardes de Jesus Júnior",
				value: "direito",
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
				description: "SEM INDICAÇÃO",
				value: "ori",
				emoji: "📝",
			},
			{
				label: "Probabilidade e Estatística - T1",
				description: "José Cláudio Faria",
				value: "pe-t1",
				emoji: "📝",
			},
			{
				label: "Probabilidade e Estatística - T2",
				description: "José Cláudio Faria",
				value: "pe-t2",
				emoji: "📝",
			},
			{
				label: "Projeto e Análise de Algoritmos - T1",
				description: "Paulo André Sperandio Giacomin",
				value: "paa-t1",
				emoji: "📝",
			},
			{
				label: "Projeto e Análise de Algoritmos - T2",
				description: "SEM INDICAÇÃO",
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
				label: "Análise Numérica - T1",
				description: "Gesil Sampaio Amarante Segundo",
				value: "analise",
				emoji: "📝",
			},
			{
				label: "Banco de Dados I - T1",
				description: "Marcelo Ossamu Honda",
				value: "bd1",
				emoji: "📝",
			},
			{
				label: "Conceitos de Linguagens de Programação - T1",
				description: "César Alberto Bravo Pariente",
				value: "clp",
				emoji: "📝",
			},
			{
				label: "Inteligência Artificial - T1",
				description: "Álvaro Vinícius de Souza Coelho",
				value: "ia-t1",
				emoji: "📝",
			},
			{
				label: "Inteligência Artificial - T2",
				description: "Paulo Eduardo Ambrósio",
				value: "ia-t2",
				emoji: "📝",
			},
			{
				label: "Sistemas Operacionais - T1",
				description: "Antônio Henrique Figueira Louro",
				value: "so",
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
				value: "teoria-t1",
				emoji: "📝",
			},
			{
				label: "Teoria da Computação - T2",
				description: "Antônio Henrique Figueira Louro",
				value: "teoria-t2",
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
				label: "Compiladores - T1",
				description: "Paulo André Sperandio Giacomin",
				value: "compiladores",
				emoji: "📝",
			},
			{
				label: "Interface Homem Máquina - T1",
				description: "Lilia Marta Brandão Soussa Modesto",
				value: "ihm",
				emoji: "📝",
			},
			{
				label: "Rede de Computadores I - T1",
				description: "SEM INDICAÇÃO",
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
				description: "SEM INDICAÇÃO",
				value: "sd",
				emoji: "📝",
			},
			{
				label: "Tecnologia e Sociedade - T1",
				description: "Paulo Eduardo Ambrósio",
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
				description: "Marcelo Honda / Paulo Ambrósio",
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
				label: "Introdução à Bioinformática - T1",
				description: "Luciano Ângelo de Souza Bernardes",
				value: "bioinfo",
				emoji: "📝",
			},
			{
				label: "Processamento de Imagens - T1",
				description: "Antônio Henrique Figueira Louro",
				value: "pimg",
				emoji: "📝",
			},
			{
				label: "Processamento Paralelo - T1",
				description: "Esbel Tomás Valero Orellana",
				value: "pp",
				emoji: "📝",
			},
			{
				label: "Programação para Aplicações Web - T1",
				description: "Dany Sánchez Dominguez",
				value: "web",
				emoji: "📝",
			},
			{
				label: "TAC I (Blockchain) - T1",
				description: "Jauberth Weyll Abijaude",
				value: "tac1",
				emoji: "📝",
			},
			{
				label: "TAC II (Jogos) - T1",
				description: "SEM INDICAÇÃO",
				value: "tac2",
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
