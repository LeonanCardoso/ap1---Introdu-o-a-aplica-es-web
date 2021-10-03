const db = () => {

    const indices = [
        {
            title: "Estrutura básica HTML",
            article: "lorem ansiufsidufhsiuhdfiushifushdifuhsdiufh"
        },
        {
            title: "Tag P",
            article: "lorem ansiufsidufhsiuhdfiushifushdifuhsdiufh"
        },
        {
            title: "Tag H, h1 à h6",
            article: "lorem ansiufsidufhsiuhdfiushifushdifuhsdiufh"
        },
        {
            title: "Tag a - Âncora",
            article: "lorem ansiufsidufhsiuhdfiushifushdifuhsdiufh"
        },
        {
            title: "Tag br",
            article: "ajsidudhfuxncvncjvjcvj"

        },
        {
            title: "Tag address - Informação de contato",
            article: "lorem ansiufsidufhsiuhdfiushifushdifuhsdiufh"
        },
        {
            title: "Tags area e map - mapeando links",
            article: "lorem ansiufsidufhsiuhdfiushifushdifuhsdiufh"
        },
    ]

    
    
    const showIndices = () => {
        let li = ""
        let divArticles = ""
        for(let indice of indices){
            li += `<li><a href = "#${indice.title}" >${indice.title}</a></li>`
            divArticles += `<div id = "${indice.title}"><h1>${indice.title}</h1><p>${indice.article}</p></div>`
        }
        document.querySelector(".indicesUl").innerHTML = li
        document.querySelector('.articles').innerHTML = divArticles
    }

    showIndices()
}

db()

