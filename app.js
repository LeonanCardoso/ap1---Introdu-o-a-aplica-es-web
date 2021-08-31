const nav = document.querySelectorAll(".conteiner-nav a")

nav.forEach(item =>{
    item.addEventListener("click",carregar)
})

function carregar(){
    const element = event.target
    const href = element.getAttribute("href")
}