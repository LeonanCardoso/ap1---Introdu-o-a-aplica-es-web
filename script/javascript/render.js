import {database} from "../../database/javascript.js"

const render = () => {
    const showIndices = () => {
        let li = ""
        let divArticles = ""
        for (let item of database) {
            li += `
            <li>
                <a href = "#${item.title}">${item.title}</a>
            </li>
            `

            divArticles += `
            <div id = "${item.title}">
                <h1>${item.title}</h1><br>
                <article>${item.article}</article>
            </div>
            `
        }

        document.querySelector(".indicesUl").innerHTML = li
        document.querySelector('.articles').innerHTML = divArticles

    }

    showIndices()
}

render()

