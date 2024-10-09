document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let score = 0;
    const answers = {
        q1: 'A',
        q2: 'B',
        q3: 'C',
        q4: 'A',
        q5: 'B',
        q6: 'C',
        q7: 'E',
        q8: 'D',
        q9: 'B',
        q10: 'A'
    };

    // Cek jawaban siswa
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
        message += "<br>GOBLOG BGT JADI ORANG!!";
    }

    document.getElementById('result').innerHTML = message;
    document.getElementById('result').style.display = 'block';
});

// Progress Bar
const quizForm = document.getElementById('quizForm');
const totalQuestions = 25;
const progressElement = document.querySelector('.progress');

quizForm.addEventListener('change', function() {
    let answeredQuestions = document.querySelectorAll('input[type="radio"]:checked').length;
    let progressPercent = (answeredQuestions / totalQuestions) * 100;
    progressElement.style.width = progressPercent + '%';
});
