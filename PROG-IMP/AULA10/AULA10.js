// Execicio 1-A -  Criando um grupo de estudos de Array

let arrGrupo = ["Filipe", "Eduardo", "Mozarth", "Elivelton", "Toniolo" ];
console.log("Esta é a possição do array do exercicio 1 " + "nome do integrantge " +  arrGrupo[1])

//Exercicio 1-B Chamamos o João para o lugar do Mozarth

arrGrupo[2] = "João só que não"

console.log("vamos trocar o Mozarth pelo " + arrGrupo[2] + ". coitado do Mozarth" )

//Execicio 1-C Ficamos com dó e deixamos o Mozarth voltar para o grupo

arrGrupo.push("Mozarth")
var i = arrGrupo.indexOf("Mozarth")
console.log("Bem vindo novamento ao grupo " + arrGrupo[i] + ", vê se não apronta novamente. kkkk")

// Execicio 1-D Tchau Elivelton

var removeElivelton = arrGrupo.splice(3, 1)

console.log(arrGrupo)

//Execicio 1-E Comparar não é legal mas vamos lá

let arrOto =["José", "Maria", "Joãozinho", "padre"]

if(arrGrupo == arrOto)
console.log("Este é outro grupo com os mesmos integrantes")

else
console.log("Esta é ota FUMIGA, Quer dizer grupo")