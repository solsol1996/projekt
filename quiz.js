const correctAnswers = ['b','a','c','b','a','b','b','c','b','a','a','c','b','a','b'];

function checkAnswers() {
    let score = 0;
    for (let i = 1; i <= 15; i++) {
        const radios = document.getElementsByName('q' + i);
        for (const radio of radios) {
            if (radio.checked && radio.value === correctAnswers[i - 1]) {
                score++;
            }
        }
    }
    document.getElementById('result').innerText = `Twój wynik: ${score}/15`;
}