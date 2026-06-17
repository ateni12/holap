function openLetter() {
    document.getElementById('intro-overlay').style.opacity = '0';
    document.getElementById('intro-overlay').style.visibility = 'hidden';
    document.getElementById('main-letter').classList.add('show');
    
      setTimeout(() => {
        var duration = 3 * 1000;
        var end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 3,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#c7b198', '#d4a373', '#6d594b']
            });
            confetti({
                particleCount: 3,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#c7b198', '#d4a373', '#6d594b']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    }, 400);
    80
}



let isPlaying = false;

function toggleMusic() {
    const btn = document.getElementById('playBtn');
    const progress = document.getElementById('musicProgress');
    const audio = document.getElementById('birthdayAudio'); 
    
    isPlaying = !isPlaying;
    
    if (isPlaying) {
        btn.innerText = "⏸";
        progress.style.animationPlayState = "running";
        audio.play(); 
    } else {
        btn.innerText = "▶";
        progress.style.animationPlayState = "paused";
        audio.pause(); 
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const progress = document.getElementById('musicProgress');
    if (progress) {
        progress.style.animationPlayState = "paused";
    }
});

function showMemory(text) {
    const box = document.getElementById('memory-text-box');
    box.innerText = text;
    box.style.display = "block";
    confetti({ 
        particleCount: 20, 
        spread: 30, 
        origin: { y: 0.7 } 
    });
}


const reasons = [
    "Por cada esfuerzo que haces para estar aquí siempre",
    "Por tu paciencia infinita conmigo a pesar de que estoy bien bot :^",
    "Por lo buen amigo y compañero que eres",
    "Por tu increíble sentido del humor que siempre me saca una sonrisa",
    "Por la manera en la que tu mirada pinta mil paisajes para mi",
    "porque le das a mi mundo una razón pra sonreír siempre",
    "porque eres muy atento",
    "amo pensar en ti por cierto :>"
];

function pullReason() {
    const display = document.getElementById('reason-display');
    
    const randomIndex = Math.floor(Math.random() * reasons.length);
    display.innerText = reasons[randomIndex];
   
    confetti({ 
        particleCount: 15, 
        angle: 90, 
        spread: 45, 
        scaler: 0.8 
    });
}