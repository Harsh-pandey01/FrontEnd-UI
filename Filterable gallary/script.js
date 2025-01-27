const galleryWrapper = document.querySelector(".image-gallery-wrapper");
const filterSectionWrapper = document.querySelector(".filterable-wrapper");
const sun = document.querySelector('.sun')
const moon = document.querySelector('.moon')
const allCatBtn = document.querySelector(".all-cat-btn");
let allItems = [];
let allCategory = [];

function handleProductsInit() {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then(({ products }) => {
      console.log(products);
      allItems = products;
      handleListingProducts(products);
      listAllCategory();
    });
}
handleProductsInit();

function listAllCategory() {
  allItems.forEach((item) => {
    if (!allCategory.includes(item?.category)) {
      allCategory.push(item.category);
    }
  });

  allCategory.forEach((category) => {
    // create a category-btn and push it
    const catBtn = document.createElement("button");
    catBtn.classList.add("category-btn");
    catBtn.innerText = category;
    catBtn.setAttribute("category", category);
    filterSectionWrapper.append(catBtn);

    catBtn.addEventListener("click", (e) => {
      handleListingProductOfCategory(category);
    });
  });
}

function handleListingProducts(productsData) {
  galleryWrapper.innerHTML = "";

  productsData.forEach((product) => {
    // create a prduct card
    const card = document.createElement("div");
    card.classList.add("image-card");
    card.innerHTML = `
    <div class="img-wrapper">
                    <img src=${product?.images[0]} alt="">
                </div>
                <h3 class="title">${product?.title}</h3>
                <p class="category">${product?.category}</p>
    `;
    galleryWrapper.append(card);
  });
}

allCatBtn.addEventListener("click", (e) => {
  handleListingProductOfCategory("all");
  
});

function handleListingProductOfCategory(categoryChoosed) {
  if (categoryChoosed !== "all") {
    const filteredProduct = allItems.filter((item) => {
      return item.category == categoryChoosed;
    });

    handleListingProducts(filteredProduct);
  } else {
    console.log("clicked")
    handleListingProducts(allItems);
  }
}


sun.addEventListener('click',(e)=>{
    sun.classList.remove('active')
    moon.classList.add('active')
    document.body.classList.remove('dark')
})
moon.addEventListener('click',(e)=>{
    moon.classList.remove('active')
    sun.classList.add('active')
    document.body.classList.add('dark')
})

