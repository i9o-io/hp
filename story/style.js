const numSquares = 500;
const squares = [];
//const centerOffset = 150; // 円の中心から表示しない範囲
const minSpeed = 0.0005; // 最小移動スピード
const maxSpeed = 0.004; // 最大移動スピード

for (let i = 0; i < numSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    //const radius = Math.random() * (window.innerWidth / 2.3 - centerOffset) + centerOffset;
    const radius = 300 + Math.random() * 250; // 150 200  200 100
    const angle = Math.random() * Math.PI * 0.6;
    const speed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
    square.style.left = `${window.innerWidth / 2 + radius * Math.cos(angle)}px`;
    square.style.top = `${window.innerHeight / 2 + radius * Math.sin(angle)}px`;

    document.body.appendChild(square);
    squares.push({ element: square, radius, angle, speed });
}

function updateCenter() {
    squares.forEach(square => {
        square.element.style.left = `${window.innerWidth / 2 + square.radius * Math.cos(square.angle)}px`;
        square.element.style.top = `${window.innerHeight / 2 + square.radius * Math.sin(square.angle)}px`;
    });
}

function animate() {
    squares.forEach(square => {
        square.angle += square.speed;
        square.element.style.left = `${window.innerWidth / 0.9 + square.radius * Math.cos(square.angle)}px`;
        square.element.style.top = `${window.innerHeight / 2 + square.radius * Math.sin(square.angle)}px`;
    });

    requestAnimationFrame(animate);
}

window.addEventListener('resize', updateCenter);
window.addEventListener('scroll', updateCenter);

animate();
