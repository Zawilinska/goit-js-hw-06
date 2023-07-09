function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}
const input = document.querySelector("#controls input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes() {
	const amount = input.value;
	let boxSize = 30;
	let boxesHTML = "";

	for (let i = 0; i < amount; i++) {
		const color = getRandomHexColor();
		boxesHTML += `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${color};"></div>`;
		boxSize += 10;
	}

	boxesContainer.innerHTML = boxesHTML;
}

function destroyBoxes() {
	boxesContainer.innerHTML = "";
}
