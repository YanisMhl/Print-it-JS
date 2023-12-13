const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

console.log("test");

//Déclaration variables
const nbDots = slides.length;

//DOM

const arrowLeft = document.getElementsByClassName("arrow")[0];
const arrowRight = document.getElementsByClassName("arrow")[1];
const bannerImg = document.querySelector(".banner-img");
const paragraphe = bannerImg.nextElementSibling;
const dots = document.querySelector(".dots");


//Création éléments dots

for (let i = 0; i < nbDots; i++) {
	let dot = document.createElement("div");
	dot.classList.add("dot");
	if (i === 0) {
		dot.classList.add("dot_selected");
	}
	dots.appendChild(dot);
}

//fonction pour mettre à jour le slide
function setActiveSlide(active_slide, index) {
	active_slide.classList.remove("dot_selected");
	dots.children[index].classList.add("dot_selected");
	bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
	paragraphe.innerHTML = slides[index].tagLine;
}

arrowLeft.addEventListener("click", () => {
	const activeSlide = document.querySelector(".dot_selected");
	let index = Array.from(dots.children).indexOf(activeSlide);
	if (index <= 0)
		index = nbDots - 1;
	else
		index--;
	setActiveSlide(activeSlide, index);
});

arrowRight.addEventListener("click", () => {
	const activeSlide = document.querySelector(".dot_selected");
	let index = Array.from(dots.children).indexOf(activeSlide);
	if (index >= nbDots - 1)
		index = 0;
	else 
		index++;
	setActiveSlide(activeSlide, index);
}); 

//Rendre les bullet points cliquables
Array.from(dots.children).forEach((e) => {
	e.addEventListener("click", () => {
		const activeSlide = document.querySelector(".dot_selected");
		setActiveSlide(activeSlide, Array.from(dots.children).indexOf(e));
	});
}); 