const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const text = "I love you";
const particles = [];

function heart(t) {
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y =
        13 * Math.cos(t) -
        5 * Math.cos(2 * t) -
        2 * Math.cos(3 * t) -
        Math.cos(4 * t);

    return {
        x: x * 22,
        y: -y * 22
    };
}

for (let i = 0; i < 2200; i++) {

    const a = Math.random() * Math.PI * 2;

    const p = heart(a);

    particles.push({
        x: p.x + (Math.random() - 0.5) * 20,
        y: p.y + (Math.random() - 0.5) * 20,
        z: (Math.random() - 0.5) * 500,
        angle: Math.random() * Math.PI * 2
    });

}

let rot = 0;
function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#ff2d75";
    ctx.font = "15px Courier New";

    rot += 0.01;

    for (let p of particles) {

        let x = p.x * Math.cos(rot) - p.z * Math.sin(rot);
        let z = p.x * Math.sin(rot) + p.z * Math.cos(rot);

        let scale = 700 / (700 + z);

        let sx = x * scale + canvas.width / 2;
        let sy = p.y * scale + canvas.height / 2;

        ctx.globalAlpha = Math.max(0.2, scale);

        ctx.shadowColor = "#ff2d75";
        ctx.shadowBlur = 12;

        ctx.fillText(text, sx, sy);

    }

    requestAnimationFrame(draw);

}

draw();
