/* Check Point 01 - Front end II
Professor: IVIN
Autores: Filipe Campos Fontes | Adilane Pereira | Fernada Brum */

/*=============================
 Cria post no Grid
 =============================== */

 /* Escuta o botão submit */

document.querySelector('#submit-btn').addEventListener('click', (reload)=> {

    /* Variaveis do formulario e captura de valores digitados */
    
    let postContainerReferencia = document.querySelector("#posts");
    let titleReferencia = document.querySelector('#input-title').value;
    let descReferencia = document.querySelector('#input-text-post').value;
    let imgUrlReferencia = document.querySelector('#input-image-post').value;
    reload.preventDefault()
    /* Monta o HTML dos posts */

    postContainerReferencia.innerHTML += `<div class="post">
    <div class="post-image">
        <img src="${imgUrlReferencia}">
    </div>
    <div class="post-infos">
        <h1 class="post-title">
            ${titleReferencia}
        </h1>
        <p class="post-content">
            ${descReferencia} 
        </p>
    </div>
</div>` ;
})
