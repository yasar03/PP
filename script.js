document.addEventListener('DOMContentLoaded', function () {
    const messages = [
        'Hi Praisy...',
        'I know I did not asked you out in a very good manner...',
        'So here we are...',
        'And I will leave it to your fate, that whether we will go out or not....',
        'Now get ready to spin the wheel!'
    ];
    let messageIndex = 0;

    const messageDiv = document.getElementById('message');
    const nextButton = document.getElementById('next-button');
    const spinWheelSection = document.getElementById('spin-wheel-section');
    const backgroundMusic = document.getElementById('background-music');

    nextButton.addEventListener('click', function () {
        if (messageIndex === 0) {
            backgroundMusic.play();
        }
        if (messageIndex < messages.length - 1) {
            messageIndex++;
            messageDiv.textContent = messages[messageIndex];
        } else {
            document.getElementById('messages-section').style.display = 'none';
            spinWheelSection.style.display = 'block';
        }
    });

    const spinButton = document.getElementById('spin-button');
    const wheel = document.getElementById('wheel');

    spinButton.addEventListener('click', function () {
        wheel.style.transition = 'transform 3s ease-out';
        wheel.style.transform = 'rotate(1440deg)'; // Ensuring it always lands on YES
    });
});
