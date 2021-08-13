function rotate() {
	var card = document.getElementById("card");
	var toggleIcon = document.getElementById("toggle-icon");
	card.classList.toggle("horizontal");

	if (toggleIcon.getAttribute("data-icon") == "uil:crop-alt-rotate-right") {
		toggleIcon.setAttribute("data-icon", "uil:crop-alt-rotate-left");
	} else {
		toggleIcon.setAttribute("data-icon", "uil:crop-alt-rotate-right");
	}
}