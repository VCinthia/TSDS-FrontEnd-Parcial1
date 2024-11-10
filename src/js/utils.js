import { ourProducts, cards } from './home.js';

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

function cardsList(cards) {
    const slideCardsContainer = document.querySelector(".card-individual");

    slideCardsContainer.innerHTML = "";

    cards.forEach((card, index) => {
        const cardContainer = document.createElement("div");

        cardContainer.style.backgroundImage = `url(${card.img})`;

        cardContainer.innerHTML = `
                <p>${card.description}</p>
                <h1 class="section-title">${card.title}</h1>
                <button>VER</button>
        `;

        slideCardsContainer.appendChild(cardContainer);
    });
}

productsList(ourProducts);
cardsList(cards);
