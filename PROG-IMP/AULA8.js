function podeSubir(altura, acompanhada){
 
if(altura >= 1.4 && altura < 2.0){
        return "Vai lá, seja feliz"

    } else if (altura >= 1.20 && altura  <= 1.4 && acompanhada == true){
        return "Ok passou perto mas pode ir e ser feliz"
    }
    else if (altura < 1.2 && acompanhada == true || acompanhada == false){
        return "Não adianta chorar ou vá chorar em casa no colinho da mamãe"
    }    
    else  {
        return "Não acha que esta meio grandinho para brincar com as crianças, vá trabalhar josé"
    }    
}

console.log(podeSubir(2, true))