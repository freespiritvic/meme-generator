const form = document.querySelector(".form");
const displayMeme = document.querySelector("#results");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	createMemeDiv();
	form.reset();
});

displayMeme.addEventListener("click", (e) => {
	if (e.target.tagName === "SPAN") {
		e.target.parentElement.remove();
	}
});

const createMemeDiv = () => {
	const meme = document.createElement("div");
	const deleteX = document.createElement("span");
	deleteX.innerText = "X";
	deleteX.className = "delete";
	meme.appendChild(deleteX);
	displayMeme.appendChild(meme);
	meme.className = "meme";

	// Add image src and set it as background
	const urlInput = document.querySelector(".memeImage").value;
	const memePic = document.createElement("img");
	memePic.className = "img";
	memePic.setAttribute("src", urlInput);

	// Add top text and add classname
	const topInput = document.querySelector(".textOnTop").value;
	const topText = document.createElement("h2");
	topText.className = "tText";
	topText.innerText = topInput;

	// Add bottom text and add classname
	const bottomText = document.createElement("h2");
	const bottomInput = document.querySelector(".textOnBottom").value;
	bottomText.className = "bText";
	bottomText.innerText = bottomInput;

	// Append to the meme div
	meme.appendChild(memePic);
	meme.appendChild(topText);
	meme.appendChild(bottomText);
}

