async function showElements() {
    const sections = document.querySelectorAll("section");
    const articles = document.querySelectorAll("article");
    const footer = document.querySelector("footer");
  
    for (const section of sections) {
      await displaySection(section);
    }
  
    for (const article of articles) {
      await displayArticle(article);
    }
  
    footer.style.display = "block";
    console.log("footer loaded");
  }
  
  

  function displaySection(section) {
    return new Promise((resolve) => {
      section.style.display = "block";
      console.log("sections loaded");
      resolve();
    });
  }
  
  function displayArticle(article) {
    return new Promise((resolve) => {
      article.style.display = "block";
      console.log("articles loaded");
      resolve();
    });
  }