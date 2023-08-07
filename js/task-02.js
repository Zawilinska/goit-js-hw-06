const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

const ulElement = document.createElement("ul");

const liElements = ingredients.map(ingredient => {
	const liElement = document.createElement("li");
	liElement.textContent = ingredient;
	return liElement;
});

ulElement.append(...liElements);

const containerElement = document.querySelector("#ingredients");
containerElement.append(ulElement);
