const particles = [];
const numParticles = 100;
const dimensions = 100;
const frequency = 0.005;
const amplitude = 30;

function createParticles() {
    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        document.body.appendChild(particle);
        particles.push(particle);
    }
}

function animate() {
    const time = performance.now() * frequency;
    particles.forEach((particle, index) => {
        let x = window.innerWidth / 2;
        let y = window.innerHeight / 2;

        for (let d = 1; d <= dimensions; d++) {
            x += Math.cos(time * d + index * Math.PI * 2 / numParticles) * amplitude / d;
            y += Math.sin(time * d + index * Math.PI * 2 / numParticles) * amplitude / d;
        }

        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
    });

    requestAnimationFrame(animate);
}

function updateCenter() {
centerX = window.innerWidth / 1;
centerY = window.innerHeight / 1;
requestAnimationFrame(updateCenter);
}

updateCenter();

createParticles();
animate();