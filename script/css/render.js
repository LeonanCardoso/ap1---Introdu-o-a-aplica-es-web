const db = () => {

    const indices = [
        {
            title: "Manipular Array - Array.prototype.map()",
            article: `<p>O metodo map() cria um novo array preenchedo-o
            com os resultados da chamada de uma função fornecida em cada elemento do array de 
            chamada. Exemplificando com código:</p> <br>
            <img src="../../img/map.png" alt="imagem">
            <p>Sua resposta será um array = [ 2, 3, 4, 6 ].</p><br>
            <p>O map passa por cada item do array, por isso ele recebe uma função com um parametro, 
            que é o item do array que ele vai pecorrer, e retornará o item com a alteração que você 
            quiser. No caso do exemplo, cara item do array foi soma mais 1.</p>
            `
        
        },

    ]


    const showIndices = () => {
        let li = ""
        let divArticles = ""
        for (let indice of indices) {
            li += `
            <li>
                <a href = "#${indice.title}">${indice.title}</a>
            </li>
            `

            divArticles += `
            <div id = "${indice.title}">
                <h1>${indice.title}</h1><br>
                <article>${indice.article}</article>
            </div>
            `
        }
        document.querySelector(".indicesUl").innerHTML = li
        document.querySelector('.articles').innerHTML = divArticles

        
    }

    showIndices()
}

db()

