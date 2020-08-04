const diff = document.title;
let guessCount;

if (diff == 'Easy') {
    easySpawn();
} else if ( diff == 'Medium') {
    medSpawn();
} else {
    hardSpawn();
}

function resetCounter() {
    guessCount = 0;
    document.getElementById('guessCount').innerHTML = 
    `Guesses : ${guessCount}`;
}

function updateCounter() {
    document.getElementById('guessCount').innerHTML = 
    `Guesses : ${guessCount += 1}`;
}

function easySpawn() {
    for (let i = 1; i <= 10; i++) {
        document.getElementById('buttonBox').innerHTML += 
        `<button class="btn btn-primary" id="${i}">${i}</button>`;
    }
    for (let i = 1; i <= 10; i++) {
        document.getElementById(`${i}`).addEventListener('click', (e) => {
            click(e.target.id);
        });
    }
    resetCounter();
}

function click(i) {
    console.log(i);
    updateCounter();
}