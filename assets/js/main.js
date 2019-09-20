// Loader
const loader = new Loader({
	loader: 'loader'
})
loader.start()

// Page Load
window.addEventListener('load', function(){
	loader.done()
})