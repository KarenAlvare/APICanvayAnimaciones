const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

function dibujarHombreLobo(ctx) {
    // Cabeza
    ctx.fillStyle = 'gray';
    ctx.beginPath();
    ctx.arc(150, 100, 40, 0, Math.PI * 2);
    ctx.fill();

    // Ojos
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(130, 90, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(170, 90, 10, 0, Math.PI * 2);
    ctx.fill();

    // Pupila izquierda
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(130, 90, 5, 0, Math.PI * 2);
    ctx.fill();

    // Pupila derecha
    ctx.beginPath();
    ctx.arc(170, 90, 5, 0, Math.PI * 2);
    ctx.fill();

    // Nariz
    ctx.fillStyle = 'gray';
    ctx.beginPath();
    ctx.arc(150, 100, 5, 0, Math.PI * 2);
    ctx.fill();

    // Boca
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(150, 110, 20, 0, Math.PI);
    ctx.stroke();

    // Cuerpo
    ctx.fillStyle = 'brown';
    ctx.fillRect(130, 150, 40, 80);

    // Brazos
    ctx.fillRect(80, 150, 30, 10);
    ctx.fillRect(190, 150, 30, 10);

    // Pelaje de lobo
    ctx.fillStyle = 'gray';
    ctx.beginPath();
    ctx.arc(150, 150, 40, 0, Math.PI);
    ctx.fill();

    // Garras
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(130, 150);
    ctx.lineTo(140, 140);
    ctx.moveTo(170, 150);
    ctx.lineTo(160, 140);
    ctx.stroke();
}

dibujarHombreLobo(ctx);
