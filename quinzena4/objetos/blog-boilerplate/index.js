let arrayDePosts = []

function criarPost() {
    
    const post = {
        titulo: document.getElementById('titulo-post').value,
        autor: document.getElementById('autor-post').value,
        conteudo: document.getElementById('conteudo-post').value
    }
    
    arrayDePosts.push(post);
    
    console.log(arrayDePosts)
    
    document.getElementById('titulo-post').value = "";
    document.getElementById('autor-post').value = "";
    document.getElementById('conteudo-post').value = "";

    inserirPost(post)

    if(confirm("Deseja inserir uma imagem?")){

        const imagem = document.createElement('img')        
        imagem.src = prompt("Coloque o caminho para sua imagem")
        inserirImagem(imagem)

    }
    
}


function inserirPost(post){
    document.getElementById("formulario").innerHTML += `<div id = "divPrincipalPost"><header><h1>${post.titulo}</h1> <h3> Autor: ${post.autor}</h3></header> <div id = "conteudo"><p>${post.conteudo}</p></div><footer></footer></div>`
}

function inserirImagem(imagem){
    document.getElementById("conteudo").appendChild(imagem)
}

