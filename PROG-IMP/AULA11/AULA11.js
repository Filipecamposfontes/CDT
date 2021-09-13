/*===================================     Integrantes ======================================== 

Filipe Campos Fontes
Rafael Vilela
Felipe Toniolo
Guilherme Mello

================================================================================================*/


// Ex: 1 

console.log("ex 1 =========================")

let pelicula = ["star wars", "totoro", "rocky", "pulp fiction", "A vida é bela"]

for(var i = 0; i < pelicula.length; i++){
    pelicula[i] = pelicula[i].toUpperCase();
    console.log(pelicula[i])
}
console.log(pelicula)


// EX 2
console.log("ex 2 =========================")

let peliculaAcao = []
i = 0;

while (++i < pelicula.length) {
  peliculaAcao[i] = pelicula[i];
  console.log(peliculaAcao)
}

// EX 2 == de outra forma

//console.log("ex 2 ========================= EX 2 == de outra forma")

//let peliculaAcao = []
//i = 0;

// for (i = 0; i < pelicula.length; ++i) {
// peliculaAcao[i] = pelicula[i];
// console.log(peliculaAcao)
// }

// EX 3

console.log("ex 3 nem o santo entendeu ======================= ")

// EX 4

console.log("ex 4 =========================")

let asiaScores = [8,10,6,9,10,6,6,8,4];
let euroScores = [8,10,6,8,10,6,7,9,5];
let compara = [];

for(let i=0; i < asiaScores.length; i++) {
    compara[i] = asiaScores[i] === euroScores[i];
}
console.log(compara);
console.log(asiaScores);
console.log(euroScores);