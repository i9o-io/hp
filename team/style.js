const animationContainer = document.getElementById("animation-container");

function createSquare() {
    const square = document.createElement('div');
    square.classList.add('square');
    animationContainer.appendChild(square);
    const startY = Math.random() * (animationContainer.offsetHeight - 2);
    square.style.top = `${startY}px`;
    square.style.left = '0px';
    const duration = Math.random() * 5 + 1;
    square.style.transition = `left ${duration}s linear`;

    setTimeout(() => {
        square.style.left = `${animationContainer.offsetWidth}px`;
    }, 0);

    setTimeout(() => {
        animationContainer.removeChild(square);
    }, duration * 5000);
}

function generateSquares() {
    createSquare();
    setTimeout(generateSquares, 0.001); //0001
}

generateSquares();

