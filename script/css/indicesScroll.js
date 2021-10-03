import { scrollToIdOnClick } from "../assets/smothScroll.js"

const btn = document.querySelector('.btnIndices')

btn.addEventListener('click', scrollToIdOnClick);

document.querySelector('.articles').addEventListener('mouseover', () => {
  btn.setAttribute('class','fixed')
})

document.querySelector('.indices').addEventListener('mouseover', () => {
  btn.setAttribute('class','btnIndices')
})