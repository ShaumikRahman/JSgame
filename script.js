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

function endGame(z) {
    document.getElementById('buttonBox').innerHTML = 
        `<button class="btn btn-primary" id="${z}">${z}</button>`;
    document.getElementById('again').hidden = false;
    document.getElementById('text').innerHTML = 'Correct';
}

function finalCheck(z) {
    if (document.getElementById('buttonBox').childNodes.length == 2) {
        endGame(z);
    }
}

function continueGame(z) {
    if (ans < z) {
        for (let i = z; z<= last; z++) {
            document.getElementById(`${z}`).remove();
        }
        document.getElementById('text').innerHTML = 'Lower';
    } else {
        for (let i = z; z>= first; z--) {
            document.getElementById(`${z}`).remove();
        }
        document.getElementById('text').innerHTML = 'Higher';
    }
}

function click(i) {
    updateCounter();
    if (numberIsCorrect(i)) {
        endGame(i);
    } else {
        continueGame(i);
        finalCheck(i);
    }
}

console.log(ans);

document.getElementById('again').addEventListener('click', (e) => {
    location.reload();
});