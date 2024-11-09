// Array con la información de cada producto
const products = [
  {
    defaultImgSrc: "../img/our-gin/blu1.jpg",
    hoverImgSrc: "../img/our-gin/blu2.jpg",
    defaultAlt: "botella Gin Spirito Blu",
    hoverAlt: "botella Gin Spirito Blu con copa",
    title: "Gin Spirito Blu",
  },
  {
    defaultImgSrc: "../img/our-gin/bombay1.jpg",
    hoverImgSrc: "../img/our-gin/bombay2.jpg",
    defaultAlt: "botella Bombay",
    hoverAlt: "botella Bombay destapada",
    title: "Gin Bombay Sapphire",
  },
  {
    defaultImgSrc: "../img/our-gin/bosque1.jpg",
    hoverImgSrc: "../img/our-gin/bosque2.jpg",
    defaultAlt: "botella Bosque Nativo Craft",
    hoverAlt: "botella Bosque Nativo Craft con copa",
    title: "Bosque Nativo Craft",
  },
  {
    defaultImgSrc: "../img/our-gin/burnets1.jpg",
    hoverImgSrc: "../img/our-gin/burnets2.jpg",
    defaultAlt: "botella Bosque Nativo Craft",
    hoverAlt: "botella Burnetts London Dry con copa",
    title: "Burnetts London Dry",
  },
  {
    defaultImgSrc: "../img/our-gin/cat1.jpg",
    hoverImgSrc: "../img/our-gin/cat2.jpg",
    defaultAlt: "botella Cat Sith Spicy",
    hoverAlt: "botella Cat Sith Spicy destapada",
    title: "Cat Sith Spicy",
  },
  {
    defaultImgSrc: "../img/our-gin/heredero-citrus1.jpg",
    hoverImgSrc: "../img/our-gin/heredero-citrus2.jpg",
    defaultAlt: "botella Heredero Citricos Premium",
    hoverAlt: "botella Heredero Citricos Premiumcon copa",
    title: "Heredero Citricos Premium",
  },
  {
    defaultImgSrc: "../img/our-gin/mdq-azul.jpg",
    hoverImgSrc: "../img/our-gin/mdq-azul2.jpg",
    defaultAlt: "botella Mar del Plata Clásico",
    hoverAlt: "botella Mar del Plata Clásico",
    title: "Mar del Plata Clásico",
  },
  {
    defaultImgSrc: "../img/our-gin/mdq-rosa.jpg",
    hoverImgSrc: "../img/our-gin/mdq-rosa2.jpg",
    defaultAlt: "botella Mar del Plata Edición de Verano",
    hoverAlt: "botella Mar del Plata Edición de Verano con copa",
    title: "Mar del Plata Edición de Verano",
  },
  {
    defaultImgSrc: "../img/our-gin/pack-citrico.jpg",
    hoverImgSrc: "../img/our-gin/pack-citrico2.jpg",
    defaultAlt: "caja de Pack Cítricos Deshidratados FIKA",
    hoverAlt: "caja de Pack Cítricos Deshidratados FIKA",
    title: "Pack Cítricos Deshidratados FIKA",
  },
  {
    defaultImgSrc: "../img/our-gin/pastillero-botanico1.jpg",
    hoverImgSrc: "../img/our-gin/pastillero-botanico2.jpg",
    defaultAlt: "Pastilleros botánicos",
    hoverAlt: "Pastilleros botánicos sin estuche",
    title: "Pastilleros botánicos Fika",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  // Contenedor  donde se agregarán los elementos
  const productContainer = document.getElementById("prod-container");

  // Creacion de DIV por products
  products.forEach((product) => {
    const prodItem = document.createElement("div");
    prodItem.classList.add("prod-item");

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    const defaultImg = document.createElement("img");
    defaultImg.classList.add("default-img");
    defaultImg.src = product.defaultImgSrc;
    defaultImg.alt = product.defaultAlt;

    const hoverImg = document.createElement("img");
    hoverImg.classList.add("hover-img");
    hoverImg.src = product.hoverImgSrc;
    hoverImg.alt = product.hoverAlt;

    imgContainer.appendChild(defaultImg);
    imgContainer.appendChild(hoverImg);

    const title = document.createElement("h3");
    title.textContent = product.title;

    prodItem.appendChild(imgContainer);
    prodItem.appendChild(title);

    productContainer.appendChild(prodItem);
    console.log("ejecutado");
  });

  // Mostrar element
  showElements();
});

async function showElements() {
  const sections = document.querySelectorAll("section");
  const footer = document.querySelector("footer");

  for (const section of sections) {
    await displaySection(section);
  }

  footer.style.display = "block";
}

function displaySection(section) {
  return new Promise((resolve) => {
    section.style.display = "block";
    resolve();
  });
}
