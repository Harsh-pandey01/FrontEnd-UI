const cardsWrapper = document.querySelector('.cards-wrapper')
const paginationWrapper = document.querySelector('.pagination-wrapper')

let allItems = [];
let currPage = 1;

function handleProductsInit() {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then(({ products }) => {
      console.log(products);
      allItems = products;
      handlePagination(products);
    });
}
handleProductsInit();


function handleListingProducts(products){
    cardsWrapper.innerHTML = "";

    products.forEach((product) => {
    // create a prduct card
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <div class="img-wrapper">
                    <img src=${product?.images[0]} alt="">
                </div>
                <h3 class="title">${product?.title}</h3>
                <p class="category">${product?.category}</p>
    `;
    cardsWrapper.append(card);
  });
}

function handlePagination(products){
    if(products.length <= 8){
        handleListingProducts(products);
    }else{
        // we need pagination 
       let numberOfPages = Math.ceil(products.length / 8)

       handlePaginationSection(numberOfPages)
       prodcutPerPageLogic()

    }
}

function prodcutPerPageLogic(){
    const productForCurrPage = allItems.slice((currPage-1) * 8 , (((currPage-1) * 8) + 8 ) < allItems.length ? (((currPage-1) * 8) + 8 ) : allItems.length )
    handleListingProducts(productForCurrPage)
}

function handlePaginationSection(noOfPages){
    paginationWrapper.classList.add('active')

    const paginationBtnsWrapper = document.querySelector('.pagintaion-btns')
   
    for(let i = 1 ; i <= noOfPages ; i++) {
        const btn = document.createElement('button')
        btn.classList.add('pgn-btn')
        btn.innerText = i ;

 
        btn.addEventListener('click',()=>{
            currPage = i ;
           prodcutPerPageLogic(8)
        })


        paginationBtnsWrapper.append(btn)
    }

}