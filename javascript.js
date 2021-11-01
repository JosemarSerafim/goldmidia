function Write(element) {
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach((letter, i)=>  {

        setTimeout(()=>element.innerHTML += letter, 75*i);
    });

    

    
}

const titulo = document.querySelector('h2');

Write(titulo);