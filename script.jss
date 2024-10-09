document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let score = 0;
    const answers = {
        q1: 'A',
        q2: 'C',
        q3: 'D',
        q4: 'B',
        q5: 'A',
        q6: 'C',
        q7: 'B',
        q8: 'A',
        q9: 'E',
        q10: 'D',
        q11: 'B',
        q12: 'A',
        q13: 'E',
        q14: 'D',
        q15: 'C',
        q16: 'A',
        q17: 'B',
        q18: 'C',
        q19: 'E',
        q20: 'A',
        q21: 'D',
        q22: 'C',
        q23: 'B',
        q24: 'A',
        q25: 'A'
    };

    for (const [key, value] of Object.entries(answers)) {
        const userAnswer = document.querySelector(`input[name="${key}"]:checked`);
        if (userAnswer && userAnswer.value === value) {
            score++;
        }
    }

    const totalQuestions = Object.keys(answers).length;
    let message = `Skor Anda: ${score} dari ${totalQuestions}`;

    if (score === totalQuestions) {
        message += "<br>Selamat! Anda menjawab semua dengan benar!";
    } else if (score >= totalQuestions * 0.75) {
        message += "<br>Bagus! Anda lulus dengan skor tinggi!";
    } else if (score >= totalQuestions * 0.5) {
        message += "<br>Anda lulus, tapi perlu belajar lagi.";
    } else {
        message += "<br>Anda gagal. Coba lagi ya!";
    }

    document.getElementById('result').innerHTML = message;
});
