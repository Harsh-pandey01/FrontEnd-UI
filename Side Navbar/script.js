const collapseBtn = document.querySelector(".collapse-btn")
const navbarContainer =document.querySelector('.navbar-container')
const hamburgurBtn = document.querySelector('.hamburgur-btn')

collapseBtn.addEventListener('click', ()=>{
    navbarContainer.classList.toggle('collapsed')
})
hamburgurBtn.addEventListener('click' , ()=> {
    navbarContainer.classList.toggle('opened')
})




