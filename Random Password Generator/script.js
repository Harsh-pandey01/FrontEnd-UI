const genBtn = document.querySelector('generate-btn')
const rangeInput = document.querySelector('.range-input')
const rangeValue = document.querySelector('.range-value')
const copyBtn = document.querySelector('.copy-btn')
const passInput = document.querySelector('.pass-input')


rangeInput.addEventListener('input' , (e)=>{
    rangeValue.innerText = e.target.value
})
