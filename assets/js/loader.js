// Loader
class Loader {
	constructor({ loader }) {
		this.loader = document.getElementById(loader)
	}

	start() {
		NProgress.start()
	}

	done() {
		NProgress.done()
		AOS.init()
		this.loader.style.opacity = '0'
		setTimeout(this.hide.bind(this), 1000)
	}

	hide() {
		this.loader.style.display = 'none'
	}
}