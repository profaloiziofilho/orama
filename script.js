function mostrarTela(id) {
  document.querySelectorAll('.tela').forEach(sec => sec.classList.remove('ativa'));
  document.getElementById(id).classList.add('ativa');
  if (id === 'tela-cardiaco') {
    iniciarCardiaco();
  }
  if (id === 'tela-glicose') {
    iniciarGlicose();
  }
}

// Iniciar sempre na tela de entrada
window.onload = function() {
  mostrarTela('tela-entrada');
};

// ------------------- Cardíaco -------------------
let bpm = 72;
let cardiacoInterval = null;
let cardiacoData = Array(40).fill(bpm);

function iniciarCardiaco() {
  clearInterval(cardiacoInterval);
  cardiacoData = Array(40).fill(bpm);
  cardiacoInterval = setInterval(() => {
    bpm = 65 + Math.floor(Math.random() * 20);
    document.getElementById('bpmValue').textContent = bpm;
    cardiacoData.push(bpm);
    if (cardiacoData.length > 40) cardiacoData.shift();
    desenharGraficoCardiaco();
  }, 800);
  desenharGraficoCardiaco();
}

function desenharGraficoCardiaco() {
  const canvas = document.getElementById('cardiacoGrafico');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Eixos
  ctx.strokeStyle = "#bbb";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(30, 10);
  ctx.lineTo(30, 110);
  ctx.lineTo(390, 110);
  ctx.stroke();

  // Gráfico
  ctx.strokeStyle = "#3382b9";
  ctx.lineWidth = 2;
  ctx.beginPath();
  let scaleY = 1.5;
  for (let i = 0; i < cardiacoData.length; i++) {
    let x = 30 + (i * 9);
    let y = 110 - (cardiacoData[i] - 60) * scaleY;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();

  ctx.fillStyle = "#245076";
  ctx.font = "14px Arial";
  ctx.fillText("Frequência Cardíaca", 140, 22);
  ctx.fillText("60", 5, 110);
  ctx.fillText("100", 5, 35);
}

// ------------------- Glicose -------------------
let glicose = 98;
let glicoseInterval = null;
let glicoseData = Array(40).fill(glicose);

function iniciarGlicose() {
  clearInterval(glicoseInterval);
  glicoseData = Array(40).fill(glicose);
  glicoseInterval = setInterval(() => {
    glicose = 70 + Math.floor(Math.random() * 60);
    document.getElementById('glicoseValue').textContent = glicose;
    glicoseData.push(glicose);
    if (glicoseData.length > 40) glicoseData.shift();
    desenharGraficoGlicose();
  }, 800);
  desenharGraficoGlicose();
}

function desenharGraficoGlicose() {
  const canvas = document.getElementById('glicoseGrafico');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Eixos
  ctx.strokeStyle = "#bbb";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(30, 10);
  ctx.lineTo(30, 110);
  ctx.lineTo(390, 110);
  ctx.stroke();

  // Gráfico
  ctx.strokeStyle = "#3382b9";
  ctx.lineWidth = 2;
  ctx.beginPath();
  let scaleY = 1.2;
  for (let i = 0; i < glicoseData.length; i++) {
    let x = 30 + (i * 9);
    let y = 110 - (glicoseData[i] - 70) * scaleY;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();

  ctx.fillStyle = "#245076";
  ctx.font = "14px Arial";
  ctx.fillText("Glicose Sanguínea", 140, 22);
  ctx.fillText("70", 5, 110);
  ctx.fillText("130", 5, 35);
}

// Parar intervalos ao trocar de tela
document.querySelectorAll('button, .icone').forEach(el => {
  el.addEventListener('click', () => {
    clearInterval(cardiacoInterval);
    clearInterval(glicoseInterval);
  });
});
function time()
{
today=new Date();
h=today.getHours();
m=today.getMinutes();
s=today.getSeconds();
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
setTimeout('time()',500);
}

