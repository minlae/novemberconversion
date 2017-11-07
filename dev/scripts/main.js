const novConversion = {};



novConversion.events = () => {
	console.log("The main script is set up!")
}

novConversion.init = () => {
	novConversion.events();
	$('.gallery').flickity();
}

$(document).ready(() => {
	novConversion.init();
})
