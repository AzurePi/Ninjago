/* Set the width of the side navigation to 155px */
function openNav() {
	document.getElementById('sidenav').style.width = '155px';
}

/* Set the width of the side navigation to 0 */
function closeNav() {
	document.getElementById('sidenav').style.width = '0';
}

/* Change the content of the page according to the selected chapter */
function change(T, I, N) {

	/* Change the page title */
	document.getElementById('title').innerHTML = `Chapter ${N}`;

	/* Change the text */
	document.getElementById('text').innerHTML = T;

	/* Change the image */
	document.getElementById('im').src = `imgs/${N}.jpg`;

	/* Change the image alt text*/
	document.getElementById('im').alt= I;

	/* Closes back the navigation bar */
	closeNav();

	/* Takes the reader back to the top */
	document.documentElement.scrollTop = 0;
}