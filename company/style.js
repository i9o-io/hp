const numWaves = 4;
const numPoints = 300;
const wavePoints = [];
const waveSpeeds = [];
const waveAmplitudes = [];
const waveLengths = [];
const pageHeight = document.body.scrollHeight;

for (let i = 0; i < numWaves; i++) {
    waveSpeeds.push(Math.random() * 1 + 0.003);
    waveAmplitudes.push(Math.random() * 1 + 50);
    waveLengths.push(Math.random() * 0.5 + 1);

    const wave = [];
    for (let j = 0; j < numPoints; j++) {
        const point = document.createElement('div');
        point.classList.add('square');

        const posX = window.innerWidth / 2;
        const posY = j * (pageHeight + 2 * waveAmplitudes[i]) / (numPoints - 3) - waveAmplitudes[i];
        point.style.left = `${posX}px`;
        point.style.top = `${posY}px`;

        document.body.appendChild(point);
        wave.push({ element: point, posX, posY });
    }
    wavePoints.push(wave);
}

function animate() {
    const time = (new Date()).getTime();

    wavePoints.forEach((wave, i) => {
        wave.forEach((point, j) => {
            const offsetX = waveAmplitudes[i] * Math.sin(waveLengths[i] * j - waveSpeeds[i] * time);
            point.element.style.left = `${point.posX + offsetX}px`;
        });
    });

    requestAnimationFrame(animate);
}

animate();
