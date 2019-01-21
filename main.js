

window.addEventListener('load', () => {
	document.querySelector('.preloader').classList.add('hidePreloader');
	
});

window.addEventListener('scroll', () => {
	let video = document.querySelector('.video');
	video.play();
})