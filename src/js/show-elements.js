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
  
    footer.style.opacity = '1';
    console.log("footer loaded");
  }
  
  

  function displaySection(section) {
    return new Promise((resolve) => {
      section.style.opacity = '1';
      console.log("sections loaded");
      resolve();
    });
  }
  
  function displayArticle(article) {
    return new Promise((resolve) => {
      article.style.opacity = '1';
      console.log("articles loaded");
      
      resolve();
    });
  }