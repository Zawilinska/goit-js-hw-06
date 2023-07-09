const categoriesList = document.querySelector("#categories");

const categoryItems = categoriesList.querySelectorAll("li.item");

const numberOfCategories = categoryItems.length;

console.log("Number of categories: " + numberOfCategories);

categoryItems.forEach(categoryItem => {
	const categoryHeader = categoryItem.querySelector("h2");

	const elements = categoryItem.querySelectorAll("li");

	const numberOfElements = elements.length;

	console.log("Category: " + categoryHeader.textContent);
	console.log("Elements: " + numberOfElements);
});
