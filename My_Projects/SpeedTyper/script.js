const RANDOM_QUOTE_API_URL = 'https://api.quotable.io/random';
const quoteDisplayElement = document.getElementById('quoteDisplay');
const quoteInputElement = document.getElementById('quoteInput');
const timerElement = document.getElementById('timer');
const wpmElement = document.getElementById('wpm');
const accuracyElement = document.getElementById('accuracy');

let startTime;
let currentQuote = "";

quoteInputElement.addEventListener('input', () => {
    const arrayQuote = quoteDisplayElement.querySelectorAll('span');
    const arrayValue = quoteInputElement.value.split('');

    let correct = true;
    let correctChars = 0;

    arrayQuote.forEach((characterSpan, index) => {
        const character = arrayValue[index];
        if (character == null) {
            characterSpan.classList.remove('correct');
            characterSpan.classList.remove('incorrect');
            correct = false;
        } else if (character === characterSpan.innerText) {
            characterSpan.classList.add('correct');
            characterSpan.classList.remove('incorrect');
            correctChars++;
        } else {
            characterSpan.classList.remove('correct');
            characterSpan.classList.add('incorrect');
            correct = false;
        }
    });

    // Calculate Accuracy
    const accuracy = Math.floor((correctChars / currentQuote.length) * 100);
    accuracyElement.innerText = Math.max(0, accuracy);

    if (correct) {
        renderNewQuote();
        // Simple WPM calc on completion of a quote can be deceptive if multiple quotes.
        // Better to have running WPM or just next quote.
        // For this simple version, just next quote.
    }
});

function getRandomQuote() {
    return fetch(RANDOM_QUOTE_API_URL)
        .then(response => response.json())
        .then(data => data.content);
}

async function renderNewQuote() {
    const quote = await getRandomQuote();
    currentQuote = quote;
    quoteDisplayElement.innerHTML = '';
    quote.split('').forEach(character => {
        const characterSpan = document.createElement('span');
        characterSpan.innerText = character;
        quoteDisplayElement.appendChild(characterSpan);
    });
    quoteInputElement.value = null;
    startTimer();
}

function startTimer() {
    timerElement.innerText = 0;
    startTime = new Date();
    setInterval(() => {
        timerElement.innerText = getTimerTime();

        // Update WPM
        // Standard WPM = (all typed / 5) / time in minutes
        const timeInMinutes = getTimerTime() / 60;
        if (timeInMinutes > 0) {
            const wordsTyped = quoteInputElement.value.length / 5;
            const wpm = Math.round(wordsTyped / timeInMinutes);
            if (isFinite(wpm)) wpmElement.innerText = wpm;
        }

    }, 1000);
}

function getTimerTime() {
    return Math.floor((new Date() - startTime) / 1000);
}

renderNewQuote();
