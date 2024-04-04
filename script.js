const bottom = document.querySelector('.bottom')
const hit = document.querySelector('.hit')
const timer = document.querySelector('.timer')
const score = document.querySelector('.score')


function makeBubbles() {
    bottom.innerHTML = ''
    for (let i = 0; i < 230; i++) {
        const bubble = document.createElement('div')
        bubble.classList.add('bubble')
        bubble.innerHTML = Math.floor(Math.random() * 10)
        bottom.appendChild(bubble)
    }
}


function runTimer() {
    let timerCount = 60
    let timerValue = setInterval(() => {
        if (timerCount > 0) {
            timerCount--;
            timer.innerHTML = timerCount;
        } else {
            bottom.innerHTML = `
                <div class="end">
                    <p class="message">Game Over!!!</p>
                    <p class ="display-score">Your score is ${currScore}</p>
                    <button>Play Again</button>
                </div>
            `
            const restartBtn = document.querySelector('button')
            restartBtn.addEventListener('click', () => {
                generateHit()
                makeBubbles()
                timer.innerHTML = 60
                score.innerHTML = 0
                runTimer()
            })
            clearInterval(timerValue)
        }
    }, 1000)
}

function generateHit() {
    const newHit = Math.floor(Math.random() * 10)
    hit.innerHTML = newHit
}

let currScore = 0;
function increaseScore() {
    currScore += 10
    score.innerHTML = currScore
}

bottom.addEventListener('click', (e) => {
    if (e.target.innerHTML == hit.innerHTML) {
        increaseScore()
        generateHit()
        makeBubbles()
    }
})

generateHit()
makeBubbles()
runTimer()