const browseBtn = document.querySelector('.browse-btn')
const uploadFileInput = document.querySelector('.upload-file-input')
const uploadBox = document.querySelector('.files-upload-wrapper')
// Function to handle the click on browse btn

const handleBrowseClick = () =>{
    uploadFileInput.click()
}

const handleSelectedFiles = (e) => {
    console.log(e.target.files);
}


browseBtn.addEventListener('click',handleBrowseClick)
uploadFileInput.addEventListener('change' , handleSelectedFiles)

uploadBox.addEventListener('dragover',(e)=>{
    e.preventDefault()
    uploadBox.classList.add('active')
    console.log(e);
    
})
uploadBox.addEventListener('dragleave',(e)=>{
    e.preventDefault()
    uploadBox.classList.remove('active')
})
