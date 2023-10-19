// 定数と変数の設定
const generateInterval = 50;
let isCircularMotion = false;
let lastSwitchTime = Date.now();
let generator;

// 新しい正方形を生成
function generateSquare() {
    createSquare();
    generator = setTimeout(generateSquare, generateInterval);
}

// アニメーションを開始
generateSquare();

function createSquare() {
    const square = document.createElement('div');
    square.classList.add('square');
    document.body.appendChild(square);

    const speed = Math.random() * 8 + 2;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    let angle = 0;

    resetSquare(square);

    function moveSquare() {
        const elapsedTime = (Date.now() - lastSwitchTime) / 1000;
        if (elapsedTime >= 8) {
            isCircularMotion = !isCircularMotion;
            lastSwitchTime = Date.now();
        }

        if (isCircularMotion) {
            const radius = Math.sqrt(Math.pow(centerX - square.offsetLeft, 2) + Math.pow(centerY - square.offsetTop, 2));
            angle += speed / radius;
            square.style.left = centerX + radius * Math.cos(angle) - 1 + 'px';
            square.style.top = centerY + radius * Math.sin(angle) - 1 + 'px';
        } else {
            square.style.left = square.offsetLeft + speed + 'px';
        }

        requestAnimationFrame(moveSquare);
    }

    moveSquare();
}

function resetSquare(square) {
    const y = Math.floor(Math.random() * (window.innerHeight + window.scrollY));
    square.style.left = -2 + 'px';
    square.style.top = y + 'px';
}

// アニメーションをリセット
function resetAnimation() {
    // 既存の正方形を削除
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        document.body.removeChild(square);
    });
    // 正方形の生成を停止
    clearTimeout(generator);
    // 変数をリセット
    isCircularMotion = false;
    lastSwitchTime = Date.now();
    // アニメーションを再開
    generateSquare();
}

// 16秒ごとにアニメーションをリセット
setInterval(resetAnimation, 16000);
