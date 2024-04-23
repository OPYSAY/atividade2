const perguntas = [
    {
        pergunta: "O que é encapsulamento em programação orientada a objetos (POO)?",
        respostas: [
            "Um conceito que permite que objetos compartilhem características e comportamentos com outros objetos.",
            "Um mecanismo que restringe o acesso direto aos componentes internos de um objeto e permite somente acesso controlado por meio de métodos.",
            "Uma técnica para criar cópias de objetos existentes.",
        ],
        correta: 1 // Resposta B é a correta
    },
    {
        pergunta: " Quais são os quatro princípios fundamentais da Programação Orientada a Objetos?",
        respostas: [
            "Iteração, Condicionais, Funções, Modularidade.",
            "Encapsulamento, Herança, Polimorfismo, Abstração.",
            "Abstração, Modularidade, Composição, Herança.",
        ],
        correta: 1 // Resposta B é a correta
    },
    {
        pergunta: "O que é polimorfismo em programação orientada a objetos (POO)?",
        respostas: [
            "Um conceito que permite que um objeto seja instanciado múltiplas vezes.",
            "Um mecanismo que permite que objetos de diferentes classes sejam tratados de maneira uniforme.",
            "Uma técnica para restringir o acesso direto aos componentes internos de um objeto.",
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