const categoriesList = document.getElementById("categories");

const categoryItems = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;

  const categoryElements = item.querySelectorAll("ul li");

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
});
