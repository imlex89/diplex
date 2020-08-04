let ibg = document.querySelector(".ibg");
let img = ibg.querySelector("img").getAttribute("src");
ibg.setAttribute("style", "background-image:url(" + img + ")");

let btn = document.querySelector(".btn-burger");
let menu = document.querySelector(".mobileMenu");
let flag = true;

btn.onclick = () => {
	if (flag) {
		btn.classList.add("active");
		menu.classList.add("showMenu");
	} else {
		btn.classList.remove("active");
		menu.classList.remove("showMenu");
	}
	flag = !flag;
};