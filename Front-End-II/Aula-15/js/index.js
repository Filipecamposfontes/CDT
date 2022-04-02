let card = document.querySelector(".card")
gerarRandom();

document.querySelector("#random").addEventListener('click', gerarRandom);

// Aqui realizamos a consulta da promisse, esperando sua resposta assíncrona
function gerarRandom(){
fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then(data => {

    let imgUrlRef = data.results[0].picture ;
    let nomeRef = data.results[0].name;
    let emailref = data.results[0].email;

    let picUrl = imgUrlRef.large;
    let fullname = `${nomeRef.title} ${nomeRef.first} ${nomeRef.last}`

        //manipulamos a respostadata.results[0].user.picture
        renderizarDadosUsuario(fullname,picUrl,emailref)

    });
}

function renderizarDadosUsuario(nome, picUrl, email) {

    card.innerHTML = `

    <div class="post-image">
        <img src="${picUrl}">
    </div>
    <div class="post-nome">
        <h1 class="post-title">
            ${nome}
        </h1>
        <p class="post-mail">
            ${email} 
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