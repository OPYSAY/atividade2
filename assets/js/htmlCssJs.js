const perguntas = [
    {
        pergunta: "Qual é a função do JavaScript em uma página da web?",
        respostas: [
            "Definir o estilo da página",
            " Estruturar o conteúdo da página",
            "Definir o tipo de exibição de um elemento, como bloco, linha ou em linha.",
        ],
        correta: 2 // Resposta C é a correta
    },
    {
        pergunta: " O que o elemento <script> faz em HTML?",
        respostas: [
            "Define um estilo para um elemento HTML.",
            "Define um script do lado do servidor.",
            "Define um script do lado do cliente, como JavaScript, para ser executado na página.",
        ],
        correta: 2 // Resposta C é a correta
    },
    {
        pergunta: "Qual evento JavaScript é acionado quando um usuário clica em um elemento HTML?",
        respostas: [
            "onmouseover",
            "onclick",
            "onfocus",
        ],
        correta: 1 // Resposta B é a correta
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