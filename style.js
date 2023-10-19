// 正方形の数と生成間隔を設定
const generateInterval = 5;  // 100ミリ秒ごとに新しい正方形を生成

// 新しい正方形を生成
function generateSquare() {
    createSquare();
    setTimeout(generateSquare, generateInterval);
}

// アニメーションを開始
generateSquare();

function createSquare() {
    const square = document.createElement('div');
    square.classList.add('square');
    document.body.appendChild(square);

    // ランダムな速度を生成 (例: 0.5 から 2.5 の範囲で)
    const speed = Math.random() * 10 + 1;

    resetSquare(square);

    // 正方形を動かす
    function moveSquare() {
        const rect = square.getBoundingClientRect();
        if (rect.right < window.innerWidth) {
            square.style.left = rect.left + speed + 'px';
            requestAnimationFrame(moveSquare);
        } else {
            resetSquare(square);
            requestAnimationFrame(moveSquare);
        }
    }

    moveSquare();
}

// 正方形の位置と速度をリセット
function resetSquare(square) {
    const y = Math.floor(Math.random() * (window.innerHeight + window.scrollY));
    square.style.left = -2 + 'px';
    square.style.top = y + 'px';
}

// 以下の行を削除
// window.onscroll = function () {
//     document.querySelectorAll('.square').forEach(square => {
//         resetSquare(square);
//     });
// }
