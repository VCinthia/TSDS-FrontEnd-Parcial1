// Array con la información de cada recipt
const recipts = [
  {
    imgSrc: "../img/tutorials/botanico.jpg",
    imgSrcAlt: "gin botánico",
    title: "BOTÁNICO",
  },
  {
    imgSrc: "../img/tutorials/ciric.jpg",
    imgSrcAlt: "gin citric",
    title: "CITRIC",
  },
  {
    imgSrc: "../img/tutorials/clasico.jpg",
    imgSrcAlt: "Gin Clásico",
    title: "CLÁSICO",
  },
  {
    imgSrc: "../img/tutorials/especiado.jpg",
    imgSrcAlt: "Gin especiado",
    title: "ESPECIADO",
  },
  {
    imgSrc: "../img/tutorials/frutal.jpg",
    imgSrcAlt: "Gin frutal",
    title: "FRUTAL",
  },
  {
    imgSrc: "../img/tutorials/sin-alcohol.jpg",
    imgSrcAlt: "Gin sin alcohol",
    title: "SIN ALCOHOL",
  },
];


document.addEventListener("DOMContentLoaded", () => {
// Contenedor  donde se agregarán los elementos
const recipesContainer = document.getElementById("recipes-container");

// Creacion de DIV por recipts
recipts.forEach((recipt) => {
  const recipesItem = document.createElement("div");
  recipesItem.classList.add("recipes-item");

  const img = document.createElement("img");
  img.classList.add("hover-img");
  img.src = recipt.imgSrc;
  img.alt = recipt.imgSrcAlt;

  const cap = document.createElement('div');
  cap.classList.add("cap");
  const title = document.createElement('h3');
  title.textContent = recipt.title;
  const link = document.createElement("a");
  link.href = "#";
  link.textContent = 'VER PASO A PASO';

  cap.appendChild(title);
  cap.appendChild(link);

  recipesItem.appendChild(img);
  recipesItem.appendChild(cap);

  recipesContainer.appendChild(recipesItem);

});

  // Mostrar element
  showElements();
});
