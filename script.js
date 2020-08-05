const diff = document.title;
let guessCount;
let ans;
let first, last;

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

function newNumber() {
    if (diff == 'Easy') {
        ans = rand(1,11);
    } else if ( diff == 'Medium') {
        ans = rand(1,101);
    } else {
        ans = rand(1,1001);
    }
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
    document.getElementById('again').hidden = true;
    first = 1;
    last = 10;
}

function numberIsCorrect(x) {
    if (x == ans) {return true}
    else return false;
}

function endGame() {
    document.getElementById('buttonBox').innerHTML = 
        `<button class="btn btn-primary" id="${ans}">${ans}</button>`;
    document.getElementById('again').hidden = false;
    document.getElementById('text').innerHTML = 'Correct';
}

function continueGame(z) {
    let click = z;
    if (click > ans) {
        for (let i = click; i <= last; i++) {
            document.getElementById(`${i}`).remove();
        }
        last = click - 1
        document.getElementById('text').innerHTML = 'Lower';
    } else {
        for (let i = click; i >= first; i--) {
            document.getElementById(`${i}`).remove();
        }
        first = click + 1
        document.getElementById('text').innerHTML = 'Higher';
    }
}

function finalCheck() {
    if (document.getElementById('buttonBox').childElementCount == 1) {
        updateCounter();
        endGame();
    }
}

function click(i) {
    updateCounter();
    if (numberIsCorrect(i)) {
        endGame();
    } else {
        continueGame(i);
        finalCheck();
    }
}

//console.log(ans);

document.getElementById('again').addEventListener('click', (e) => {
    location.reload();
});