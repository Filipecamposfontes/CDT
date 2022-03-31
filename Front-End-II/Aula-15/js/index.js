let card = document.querySelector(".card")
l
// Aqui realizamos a consulta da promisse, esperando sua resposta assíncrona
fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then(data => {

        imgUrlRef = data.results[0].user.picture ;
        nomeRef = data.results[0].user.name;
        emailref = data.results[0].user.email;

        //manipulamos a respostadata.results[0].user.picture
        
        console.log(data)

    });


function renderizarDadosUsuario(dados) {

dados.preventdefault()   

    postContainerReferencia.innerHTML = ` <div class="card">

    <div class="post-image">
        <img src="${imgUrlRef}">
    </div>
    <div class="post-nome">
        <h1 class="post-title">
            ${nomeRef}
        </h1>
        <p class="post-mail">
            ${emailref} 
        </p>
    </div>
</div>` 
;



    /* -------------------------------- Tarefa 1 -------------------------------- */
    // Aqui devem desenvolver uma função que seja exibida na tela:
    // a foto, o nome completo do usuário e o e-mail.
    // Isto deve ser baseado nas informações que obtemos da API e inseridas no HTML.
}


/* --------------------------- Tarefa 2 (extra) --------------------------- */
// Aqui você pode ir para o ponto extra de usar o botão que está comentado no HTML.
// Você pode descomentar o código no index.html e usar esse botão para executar uma nova solicitação API, sem recarregar a página.
// Cabe aos desenvolvedores decidirem qual bloco de código deve ser contido dentro de uma função para que ele possa ser executado toda vez que um clique de botão for realizado.