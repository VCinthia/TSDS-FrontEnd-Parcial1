function productsList(products) {
    const slideProductsContainer = document.querySelector(".slide-products");

    slideProductsContainer.innerHTML = "";

    products.forEach((product, index) => {
        const productContainer = document.createElement("div");

        productContainer.innerHTML = `
            <div class="img-product">
                <img src="${product.img}" alt="${product.name}">
            </div>
            <div class="name-product">
                <p>${product.name}</p>
            </div>
        `;

        slideProductsContainer.appendChild(productContainer);
    });
}


export { productsList };
