// L’utente indica un livello di difficoltà (3 pulsanti) in base al quale viene generata una griglia di gioco quadrata, 
// in cui ogni cella contiene un numero tra quelli compresi in un range:

// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

// 1. creo funzione per creare e appendere sia i boxes che i numeri al loro interno
function createBoxGrid (container, number) {
    let square = document.createElement('div');
    square.className ='box';
    square.innerHTML = number;
    container.append(square);

    //stabilisco l'evento al click -> change bg in blue
    square.addEventListener('click', function(){
    this.classList.add('blue');   
    })
}

// 2. fisso selettori tra js e html -> 3 buttons + container-box da replicare con ciclo for
const easyLevelButton = document.getElementById("easy-button");
const mediumLevelButton = document.getElementById("medium-button");
const hardLevelButton = document.getElementById("hard-button");
const boxes = document.querySelector('.container-box');


// 3. creo ciclo for per replicare boxes all'evento click in base al lvl scelto
easyLevelButton.addEventListener('click', function (){
    // setto la pulizia della griglia ad ogni click
    boxes.innerHTML = '';
    // genero 100 boxes
    for (let i = 1; i <= 100; i++) {
        createBoxGrid(boxes, i); 

        // aggiungo classe widht dal css x lvl simple
        boxes.classList.add('width_simple');
        // rimuovo classi widht dal css x lvl medium/hard
        boxes.classList.remove('width_medium', 'width_hard');
    }
});

mediumLevelButton.addEventListener('click', function (){
    // setto la pulizia della griglia ad ogni click
    boxes.innerHTML = '';
    // genero 81 boxes
    for (let i = 1; i <= 81; i++) {
        createBoxGrid(boxes, i); 

        // aggiungo classe widht dal css x lvl medium
        boxes.classList.add('width_medium');
        // rimuovo classi widht dal css x lvl simple/hard
        boxes.classList.remove('width_simple', 'width_hard');
    }
});

hardLevelButton.addEventListener('click', function (){
    // setto la pulizia della griglia ad ogni click
    boxes.innerHTML = '';
    // genero 49 boxes
    for (let i = 1; i <= 49; i++) {
        createBoxGrid(boxes, i); 

        // aggiungo classe widht dal css x lvl hard
        boxes.classList.add('width_hard');
        // rimuovo classi widht dal css x lvl simple/medium
        boxes.classList.remove('width_simple', 'width_medium');
    }
});