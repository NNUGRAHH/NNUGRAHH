document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let score = 0;
    const answers = {
        q1: 'Jakarta',
        q2: 'Soekarno'
    };

    for (const [key, value] of Object.entries(answers)) {
        const userAnswer = document.querySelector(`input[name="${key}"]:checked`);
        if (userAnswer && userAnswer.value === value) {
            score++;
        }
    }

    document.getElementById('result').innerHTML = `Skor Anda: ${score} dari ${Object.keys(answers).length}`;
});
