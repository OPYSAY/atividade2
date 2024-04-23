const perguntas = [
    {
        pergunta: " Qual é a função do comando SELECT em SQL?",
        respostas: [
            "Realizar uma consulta no banco de dados para selecionar dados específicos de uma ou mais tabelas.",
            "Inserir novos registros em uma tabela.",
            "Atualizar os dados existentes em uma tabela.",
        ],
        correta: 0 // Resposta A é a correta
    },
    {
        pergunta: "O que é uma chave primária em um banco de dados relacional?",
        respostas: [
            "Uma chave que garante que cada registro em uma tabela seja único.",
            "Uma chave que permite a exclusão de registros em uma tabela.",
            "Uma chave que organiza os registros em ordem alfabética.",
        ],
        correta: 0 // Resposta A é a correta
    },
    {
        pergunta: "Qual é a finalidade do comando UPDATE em SQL?",
        respostas: [
            "Criar uma nova tabela no banco de dados.",
            "Alterar a estrutura de uma tabela existente.",
            "Atualizar os dados de uma tabela com base em uma condição especificada.",
        ],
        correta: 2 // Resposta C é a correta
    },
    
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas =  perguntas.length
const mostrarTotal =document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas


// loop
for(const item of perguntas) {
    
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.pergunta

    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)

        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }
            
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()


    // coloca as perguntas na tela
    quiz.appendChild(quizItem)
}