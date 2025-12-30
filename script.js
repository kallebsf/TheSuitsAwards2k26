const votingStartDate = new Date("Dec 15, 2025 21:00:00").getTime();
const votingEndDate = new Date("Dec 31, 2025 21:00:00").getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const countdownElement = document.getElementById('countdown');
    const votingStatusElement = document.getElementById('votingStatus');
    const votingMessageElement = document.getElementById('votingMessage');
    const votingButtonElement = document.getElementById('votingButton');

    if (now < votingStartDate) {
        const distance = votingStartDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById('days').innerText = days.toString().padStart(2, '0');
        document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');

        countdownElement.style.display = 'flex';
        votingStatusElement.style.display = 'none';
    } else if (now >= votingStartDate && now < votingEndDate) {
        countdownElement.style.display = 'none';
        votingStatusElement.style.display = 'block';
        votingMessageElement.innerText = 'Votação Aberta!';
        votingButtonElement.style.display = 'inline-block';
    } else {
        countdownElement.style.display = 'none';
        votingStatusElement.style.display = 'block';
        votingMessageElement.innerText = 'Votação Encerrada! Resultados Anunciados!';
        votingButtonElement.style.display = 'none';
        clearInterval(countdownTimer);
    }
}

let countdownTimer = setInterval(updateCountdown, 1000);
updateCountdown();

const audioControl = document.getElementById('audioControl');
const audio = document.getElementById('backgroundAudio');

audioControl.addEventListener('click', () => {
    if (audio.paused) {
        audio.play().catch(() => {
            audioControl.innerHTML = '<i class="fas fa-volume-mute"></i>';
        });
        audioControl.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else {
        audio.pause();
        audioControl.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
});

if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
        particles: {
            number: { value: 80 },
            color: { value: '#CDA434' },
            opacity: { value: 0.5 },
            size: { value: 3 },
            move: { 
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
            }
        },
        interactivity: {
            events: {
                onhover: { enable: true, mode: "repulse" }
            }
        }
    });
}

window.addEventListener('click', () => {
    audio.play().catch(() => {
        audioControl.innerHTML = '<i class="fas fa-volume-mute"></i>';
    });
});