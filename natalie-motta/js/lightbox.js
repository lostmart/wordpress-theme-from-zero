let fullscreenArray = null
let showLightBox = false
let arrayIndex = 0

let lightbox = null

var lightboxRef = document.querySelector(".lightbox__ref")
var lightboxCat = document.querySelector(".lightbox__cat")

function updateDom(index) {
	return index
}

function checkLightBox(lightbox) {
	if (!showLightBox) {
		lightbox.style.display = "flex"
		showLightBox = true
	}
}

function updateDom(index) {
	const imgThumbnail = document.getElementById("imgThumbnail")
	const imgElement = fullscreenArray[index].previousElementSibling
	//console.log(imgThumbnail, imgElement)
	imgThumbnail.src = imgElement.src
	lightboxRef.textContent = imgElement.getAttribute("data-ref")
	lightboxCat.textContent = imgElement.getAttribute("data-cat")
}

document.addEventListener("DOMContentLoaded", function () {
	fullscreenArray = document.querySelectorAll(".fullscreen")

	lightbox = document.querySelector(".lightbox")
	const lightboxClose = document.querySelector(".lightbox__close")
	const imgThumbnail = document.getElementById("imgThumbnail")
	const lightboxNext = document.querySelector(".lightbox__next")
	const lightboxPrev = document.querySelector(".lightbox__prev")

	if (
		!lightbox ||
		!lightboxClose ||
		!imgThumbnail ||
		!lightboxNext ||
		!lightboxPrev ||
		!lightboxRef ||
		!lightboxCat
	) {
		console.error("Lightbox elements not found")
		return
	}

	//console.log(fullscreenArray);
	fullscreenArray.forEach((fullBtn, i) => {
		fullBtn.addEventListener("click", () => {
			arrayIndex = i
			updateDom(arrayIndex)
			checkLightBox(lightbox)
		})
	})

	lightboxClose.addEventListener("click", () => {
		lightbox.style.display = "none"
		showLightBox = false
	})

	lightboxNext.addEventListener("click", () => {
		addImageIndex()
	})

	lightboxPrev.addEventListener("click", () => {
		removeImageIndex()
	})

	window.addEventListener("click", (e) => {
		if (e.target === lightbox) {
			lightbox.style.display = "none"
			showLightBox = false
		}
	})

	window.addEventListener("keydown", (e) => {
		if (showLightBox && e.code === "Escape") {
			lightbox.style.display = "none"
			showLightBox = false
			return
		}
		if (showLightBox && e.code === "ArrowRight") {
			return addImageIndex()
		}
		if (showLightBox && e.code === "ArrowLeft") {
			return removeImageIndex()
		}
	})

	function addImageIndex() {
		if (arrayIndex === fullscreenArray.length - 1) {
			arrayIndex = 0
		} else {
			arrayIndex++
		}
		updateDom(arrayIndex)
	}

	function removeImageIndex() {
		if (arrayIndex === 0) {
			arrayIndex = fullscreenArray.length - 1
		} else {
			arrayIndex--
		}
		updateDom(arrayIndex)
	}
})
