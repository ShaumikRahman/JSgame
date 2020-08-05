const diff = document.title;
let guessCount;
let ans;

if (diff == 'Easy') {
    easySpawn();
    ans = rand(1,11);
} else if ( diff == 'Medium') {
    medSpawn();
    ans = rand(1,101);
} else {
    hardSpawn();
    ans = rand(1,1001);
}

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }

function resetGame() {
    guessCount = 0;
    document.getElementById('guessCount').innerHTML = 
    `Guesses : ${guessCount}`;
}

function updateGame() {
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
    resetGame();
}

function click(i) {
    updateGame();
}