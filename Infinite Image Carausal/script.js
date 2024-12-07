const rightSlideBtn = document.querySelector('.right-slide-btn');
const leftSlideBtn = document.querySelector('.left-slide-btn');
const carausalCards = document.querySelectorAll('.carausal-cards');
const appWrapper = document.querySelector('.app-wrapper')

let timerID ;
let currentPage = 0 ;


const scrollAnimation = () =>{
    carausalCards.forEach(card => {
        card.style.transform = `translate(calc(${-100*currentPage}% - ${currentPage*20}px) )`
    });
}



// Function for infinite scroll animation

const autoPlay = () =>{

    timerID = setInterval(()=>{
        currentPage = currentPage !=3 ? ++currentPage : 0
        scrollAnimation()
    },2000)

}

autoPlay()

appWrapper.addEventListener('mousemove',(e)=>{
    clearInterval(timerID)
})
appWrapper.addEventListener('mouseleave',(e)=>{
    
    autoPlay()
    
})



// Function to enable the left scroll function

leftSlideBtn.addEventListener('click' , ()=>{
    clearInterval(timerID)
    currentPage = currentPage > 0 ? --currentPage : 3 
    scrollAnimation()
})

rightSlideBtn.addEventListener('click' , ()=>{
    clearInterval(timerID)
    currentPage = currentPage !=3 ? ++currentPage : 0
    scrollAnimation()
})



