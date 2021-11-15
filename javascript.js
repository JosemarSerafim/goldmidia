const typing = document.querySelector('[data-js="typing"]')
const messages = ['A melhor escolha para a sua empresa', 'venha conhecer-nos']
let messageIndex = 0
let characterIndex = 0
let currentMessage =''
let currentCharacter = ''

const type = ()=>{

    if(messageIndex === messages.length) {
        messageIndex = 0;
    }

    currentMessage = messages[messageIndex];
    currentCharacter = currentMessage.slice(0, characterIndex++);
    typing.textContent = currentCharacter;

    if(currentCharacter.length === currentMessage.length) {
        messageIndex++
        characterIndex = 0
    }
}

setInterval(type, 75);


// function Write(element) {
//     const textArray = element.innerHTML.split('');
//     element.innerHTML = '';
//     textArray.forEach((letter, i)=>  {

//         setTimeout(()=>element.innerHTML += letter, 75*i);
//     });

    

    
// }

// const titulo = document.querySelector('h2');

// Write(titulo);