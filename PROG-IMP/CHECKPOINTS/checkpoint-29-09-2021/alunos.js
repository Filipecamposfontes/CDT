function Aluno(nome, qFaltas,notas) {
    this.nome = nome
    this.qFaltas = qFaltas;
    this.notas = notas;
}

 /* Gera lista de alunos aleatoriamente */
let alunos = [];
for(let i = 0;i<=10;i++){
let nome = 'aluno' + i;
let qFaltas = 0

 /* Gera array de notas aleatoriamente */
  let notas = [];
     for(let n = 0; n <= 5; n++){
      let numeroAleatorio = Math.random()*10;
      notasFix = Number(numeroAleatorio.toFixed(0))
      notas.push(notasFix)
    }

  const aluno = new Aluno(nome,qFaltas,notas);
  alunos.push(aluno);
}

console.log(alunos);
module.exports = Aluno;

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