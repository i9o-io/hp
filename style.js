const numSquares = 3000;
let centerX = window.innerWidth / 2;
let centerY = window.innerHeight / 2;

function createSquare() {
    const square = document.createElement('div');
    square.classList.add('square');
    document.body.appendChild(square);
    return square;
}

function animateSquare(square, radius, angle, speed) {
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    square.style.transform = `translate(${x}px, ${y}px)`;

    requestAnimationFrame(() => {
        animateSquare(square, radius, angle + speed, speed);
    });
}

function init() {
    for (let i = 0; i < numSquares; i++) {
        const square = createSquare();
        const radius = 150 + Math.random() * 200; // 150 200  200 100
        const angle = Math.random() * 2 * Math.PI; //2 a
        const speed = 0.001 + Math.random() * 0.008;
        animateSquare(square, radius, angle, speed);
    }
}

function updateCenter() {
    centerX = window.innerWidth / 2;
    centerY = window.innerHeight / 2;
    requestAnimationFrame(updateCenter);
}

init();
updateCenter();