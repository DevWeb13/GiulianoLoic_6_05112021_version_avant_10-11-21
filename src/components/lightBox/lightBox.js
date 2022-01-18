export default class LightBox {
	constructor(domTarget, props) {
		this.imgTitle = props.imgTitle;
		this.medias = props.medias;
		this.DOM = document.createElement("section");
		this.DOM.id = "lightBox";
		domTarget.appendChild(this.DOM);
		this.displayCard = document.createElement("nav");
		this.displayCard.id = "displayCard";
		this.DOM.appendChild(this.displayCard);
		this.close = document.createElement("button");
		this.close.type = "button";
		this.close.classList.add("close");
		this.displayCard.appendChild(this.close);
		this.closeLightBox();
		this.leftArrow = document.createElement("button");
		this.leftArrow.type = "button";
		this.leftArrow.classList.add("arrow");
		this.leftArrow.id = "leftArrow";
		this.displayCard.appendChild(this.leftArrow);
		this.imgContainer = document.createElement("div");
		this.imgContainer.id = "imgContainer";
		this.displayCard.appendChild(this.imgContainer);
		this.rightArrow = document.createElement("button");
		this.rightArrow.type = "button";
		this.rightArrow.classList.add("arrow");
		this.rightArrow.id = "rightArrow";
		this.displayCard.appendChild(this.rightArrow);
		this.p = document.createElement("p");
		this.DOM.appendChild(this.p);

		for (let i = 0; i < this.medias.length; i++) {
			if (this.medias[i].title === this.imgTitle) {
				if (this.medias[i].image) {
					this.displayImage(i);
				} else {
					this.displayVideo(i);
				}
				i = this.changeImage(i);
			}
		}
	}

	displayVideo(i) {
		this.deletePreviousImage();
		this.createVideo(i);
	}

	createVideo(i) {
		this.video = document.createElement("video");
		this.video.controls = true;
		this.video.autoplay = true;
		this.imgContainer.appendChild(this.video);
		this.source = document.createElement("source");
		this.source.src = "./img/videos/" + this.medias[i].video;
		this.source.type = "video/mp4";
		this.video.appendChild(this.source);
		this.p.textContent = this.medias[i].title;
	}

	deletePreviousImage() {
		let video = this.DOM.querySelector("video");
		let image = this.DOM.querySelector("img");
		if (video) {
			this.video.parentElement.removeChild(this.video);
		}
		if (image) {
			this.img.parentElement.removeChild(this.img);
		}
	}

	displayImage(i) {
		this.deletePreviousImage();
		this.createImg(i);
	}

	createImg(i) {
		this.img = document.createElement("img");
		this.img.alt = "";
		this.imgContainer.appendChild(this.img);
		this.img.src = "./img/photos/" + this.medias[i].image;
		this.p.textContent = this.medias[i].title;
	}

	changeImage(i) {
		this.rightArrow.onclick = () => {
			if (i !== this.medias.length - 1) {
				i++;
				if (this.medias[i].image) {
					this.displayImage(i);
				} else {
					this.displayVideo(i);
				}
			} else {
				i = 0;
				if (this.medias[i].image) {
					this.displayImage(i);
				} else {
					this.displayVideo(i);
				}
			}
		};
		this.leftArrow.onclick = () => {
			if (i !== 0) {
				i--;
				if (this.medias[i].image) {
					this.displayImage(i);
				} else {
					this.displayVideo(i);
				}
			} else {
				i = this.medias.length - 1;
				if (this.medias[i].image) {
					this.displayImage(i);
				} else {
					this.displayVideo(i);
				}
			}
		};
		return i;
	}

	closeLightBox() {
		this.close.onclick = () => {
			this.DOM.parentElement.style.overflow = "auto";
			this.DOM.parentNode.removeChild(this.DOM);
			this.buttons = document.querySelectorAll("button");
			for (let i = 0; i < this.buttons.length; i++) {
				const elm = this.buttons[i];
				console.log(elm);
				elm.removeAttribute("disabled");
			}
			this.widgetLabel = document.getElementById("select");
			this.widgetLabel.setAttribute("tabindex", "0");
		};
	}
}
