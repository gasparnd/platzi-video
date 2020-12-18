/*const hamburgerMenu = document.querySelector('#hamburger-menu')
const menu = document.querySelector('.left-navigation')
const screen = window.matchMedia('screen and (max-width: 1125px)')

screen.addListener(validation)
validation(screen)


const validation = ev => {
	if (ev.matches) {
		console.log(ev.matches)
		hamburgerMenu.addEventListener('click', showHide)
	} else {
		console.log(ev.matches)
		hamburgerMenu.removeEventListener('click', showHide)
	}
const showHide = () => menu.classList.toggle('is-active')
}*/


const menu = document.querySelector('.left-navigation');

const burgerButton = document.querySelector('#hamburger-menu');
		
const screen = window.matchMedia('screen and (max-width: 1125px)');

screen.addListener(validation);
validation(screen);

function validation (event) {
	if (event.matches) {
		console.log(event.matches);
		burgerButton.addEventListener ('click', showHide);
	} else {
		console.log(event.matches);
		burgerButton.removeEventListener ('click', showHide);
	}
}

function showHide () {
			/*menu.classList.toggle('is-active'); si tiene la clase la quita si no la coloca
			*/
	if (menu.classList.contains('is-active')) {
		menu.classList.remove('is-active');
	} else {
		menu.classList.add('is-active');
	}
}