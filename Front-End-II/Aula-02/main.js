let escolhaUsuario = parseInt(prompt('1- Pedra, 2- Papel, 3- Tesoura'))
let escolhaBot = parseInt(Math.random()*3+1)

if(escolhaUsuario > 0 && escolhaUsuario < 4) {

    if(escolhaUsuario === 1) {

        if(escolhaBot === 1) {

            alert('empatou')

        }

        if(escolhaBot === 2) {

            alert('o usuário perdeu')

        }

        if(escolhaBot === 3) {

            alert('o usuário ganhou')

        }

    }

    if(escolhaUsuario === 2) {

        if(escolhaBot === 1) {

            alert('o usuário ganhou')

        }

        if(escolhaBot === 2) {

            alert('empatou')

        }

        if(escolhaBot === 3) {

            alert('o usuário perdeu')

        }

    }

    if(escolhaUsuario === 3) {

        if(escolhaBot === 1) {

            alert('o usuário perdeu')

        }

        if(escolhaBot === 2) {

            alert('o usuário ganhou')

        }

        if(escolhaBot === 3) {

            alert('empatou')

        }

    }

    console.log(escolhaUsuario, escolhaBot)

} else {

    alert('O numero escolhido ntya erroqspidoa')

}