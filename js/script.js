// L’utente indica un livello di difficoltà (3 pulsanti) in base al quale viene generata una griglia di gioco quadrata, 
// in cui ogni cella contiene un numero tra quelli compresi in un range:

// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.


// 1. fisso i selettori tra js e html -> 3 buttons + container-box da replicare con ciclo for
const easyLevelButton = document.getElementById("easy-button");
const mediumLevelButton = document.getElementById("medium-button");
const hardLevelButton = document.getElementById("hard-button");
const boxes = document.querySelector('.container-box');

// 2. creo funzione che per creare e appendere i boxes
function createBoxGrid (container) {
    const square = document.createElement('div');
    square.className ='box';
    container.append(square);

    //stabilisco l'evento al click -> change bg in blue
    square.addEventListener('click', function(){
    this.classList.add('blue');   
    })
}

// 3. creo ciclo for per replicare boxes all'evento click in base al lvl scelto
easyLevelButton.addEventListener('click', function (){
    // setto la pulizia della griglia ad ogni click
    boxes.innerHTML = '';
    // genero 100 box
    for (let i = 1; i <= 100; i++) {
        createBoxGrid(boxes); 
    }
});

mediumLevelButton.addEventListener('click', function (){
    // setto la pulizia della griglia ad ogni click
    boxes.innerHTML = '';
    // genero 81 box
    for (let i = 1; i <= 81; i++) {
        createBoxGrid(boxes); 
    }
});

hardLevelButton.addEventListener('click', function (){
    // setto la pulizia della griglia ad ogni click
    boxes.innerHTML = '';
    // genero 49 box
    for (let i = 1; i <= 49; i++) {
        createBoxGrid(boxes); 
    }
});

