// create a image slider
const sliders = document.querySelectorAll('.slider')
console.log(sliders);

let currentPage = 1 ;

const sliderTimer = setInterval(()=>{
     currentPage = currentPage == 4 ? 0 : currentPage 
    sliders.forEach((slider)=>{
        slider.style.transform = `translateX(-${currentPage*100}%)`
    })
    ++currentPage
},2000)



























