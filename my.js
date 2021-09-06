const p1button = document.querySelector('#p1button');
const p2button = document.querySelector('#p2button');
const p1display = document.querySelector('#p1display');
const p2display = document.querySelector('#p2display');
const reset = document.querySelector('#reset');
const play = document.querySelector('#play');


let p1score = 0;
let p2score = 0;
let winscore = 3;
let gameover = false;


p1button.addEventListener('click', function () {
    if (!gameover) {
        p1score++;
        if (p1score === winscore) {
            gameover = true;
            p1display.classList.add('winner');

            p2display.classList.add('loser');
            p1button.disabled = true;
            p2button.disabled = true;
        }
        p1display.textContent = p1score;

    }


})
p2button.addEventListener('click', function () {
    if (!gameover) {
        p2score++;
        if (p2score === winscore) {
            gameover = true;
            p2display.classList.add('winner');
            p1display.classList.add('loser');
            p2button.disabled = true;
            p1button.disabled = true;
        }
        p2display.textContent = p2score;

    }


})
play.addEventListener('change', function () {
    winscore = parseInt(this.value);
    resetbut();
})
reset.addEventListener('click', resetbut);
function resetbut() {
    gameover = false;
    p1score = 0;
    p2score = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
    p1display.classList.remove('winner', 'loser')
    p2display.classList.remove('winner', 'loser')
    p2button.disabled = false;
    p1button.disabled = false;
}