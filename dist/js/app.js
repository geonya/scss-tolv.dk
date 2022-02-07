const headerPanel = document.querySelector(".header-panel");
const ul = document.querySelector("ul:first-child");
const i = headerPanel.querySelector("i");

headerPanel.style.display = "none";
let panelHide = true;

const handleClick = () => {
	panelHide
		? (headerPanel.style.display = "")
		: (headerPanel.style.display = "none");
	panelHide = !panelHide;
};
i.addEventListener("click", handleClick);
ul.addEventListener("click", handleClick);
