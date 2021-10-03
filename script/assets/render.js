export const render = (database) => {

    let li = ""
    let divArticles = ""

    database.forEach(item => {
        li += `
        <li><a href = "#${item.title}">${item.title}</a></li>`

        divArticles += `
        <div id = "${item.title}">
            <h1>${item.title}</h1><br><article>${item.article}</article>
        </div>`
        
    }); 

    document.querySelector(".indicesUl").innerHTML = li
    document.querySelector('.articles').innerHTML = divArticles
}
