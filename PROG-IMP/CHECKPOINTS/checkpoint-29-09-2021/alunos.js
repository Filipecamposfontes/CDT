function Aluno(nome_, qFaltas_, notas_) {
  this.nome = nome_;
  this.qFaltas = qFaltas_;
  this.notas = notas_;
  this.media =  function() {
    let somaNota = 0
    let media = 0
    for (let i = 0; i <= this.notas.length; i++) {
        somaNota = somaNota + this.notas[i]
        media = somaNota / this.notas.length
    }
  }

}

/* Gera lista de alunos aleatoriamente */
let alunos = [];
for (let i = 0; i <= 10; i++) {
  let nome = "aluno" + i;
  let qFaltas = 0;

  /* Gera array de notas aleatoriamente */
  let notas = [];
  for (let n = 0; n <= 5; n++) {
    let numeroAleatorio = Math.random() * 10;
    notasFix = Number(numeroAleatorio.toFixed(0));
    notas.push(notasFix);
  }

  
  const aluno = new Aluno(nome, qFaltas, notas);
  alunos.push(aluno);
}
module.exports = {
  Aluno,
  alunos,
};

/* module.exports = {
  nome:nome,
  qFaltas:qFaltas,
  notas:notas,
} */

/* 
function Aluno(nome, notas, qFaltas) {
  this.nome = nome
  this.qFaltas = qFaltas;
  this.notas = notas;
}


const aluno1 = new Aluno('Aluno01', 7, 0);
const aluno2 = new Aluno('Aluno02',8, 0);
const aluno3 = new Aluno('Aluno03',7.5, 0);
const aluno4 = new Aluno('Aluno04',9, 0);
const aluno5 = new Aluno('Aluno05',8.5, 0);
let alunos = [aluno1, aluno2, aluno3, aluno4,aluno5]

module.exports.alunos = alunos; */
