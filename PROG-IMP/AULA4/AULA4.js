// Exercicio 1 "O que cada expressão retorna"

!true // False
!false // True
!!false //false
!!true //true
!1 // false
!!1 // true
!0 // true
!!0 // true
!!"" // STRING FALSE

// Esta expressão retorna varios resultados de operadores.
let x = 5 ;  
let y = 9;
    x < 10 && x!==5 //false
    x>9 || x===5  // true
    !(x===y) // true



// Exercicio 2: "O que cada expressão retorna"

// 1º 
let x=10 
let y ="a"
y==="b" || x >= 10 //True

//2º
let x=3
let y=8
!(x == "3" || x === y) && !(y !== 8 && x <= y) //false

// 3º
let str = "" 
let msg = "haha!"
let eBonito = "false"
!((str || msg) && eBonito) // resultado final Falso //false

//Desmembrando a função

((false || true)&& true)
(true && true)
!true // resultado = false

// Participantes: 
// Filipe Campos Fontes && Gabriel Francisco && Allan Cardoso && Henrique Arantes Nunes || Lucas(prof)