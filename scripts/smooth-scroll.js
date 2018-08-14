function init() {
	let linkToEvents = document.querySelector("a[href='#container__portfolio']");

	linkToEvents.addEventListener("click", function() {
		document.querySelector(".container__portfolio").scrollIntoView({
			behavior: 'smooth'
		})
	})
}

document.addEventListener("DOMContentLoaded", init)