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

//Déclaration variables
const nbDots = slides.length;

//DOM

const arrowLeft = document.getElementsByClassName("arrow")[0];
const arrowRight = document.getElementsByClassName("arrow")[1];
const bannerImg = document.querySelector(".banner-img");
const dots = document.querySelector(".dots");


//Création éléments dots

for (let i = 0; i < nbDots; i++) {
	let dot = document.createElement("div");
	dot.classList.add("dot");
	if (i === 0) {
		dot.classList.add("dot_selected");
	}
	dot.appendChild(dot);
}