import {Popup} from "./Popup.js"

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open (evt) {
    this._container = document.querySelector("#popup");
    this._container.classList.add(`popup_active`);
    this.data = document.querySelector(".popup__group");
    const image = evt.target;
    this.data.querySelector(".popup__image").src = image.getAttribute("src");
    this.data.querySelector(".popup__image").alt = image.getAttribute("alt");
    this.data.querySelector(".popup__name").textContent = image.getAttribute("alt");
  }

  _handleEscClose() {
    super._handleEscClose();
  }

  setEvenListeners () {
    this._handleEscClose();
    super.setEvenListeners();
    const imageElement = document.querySelectorAll(".element__image");
    imageElement.forEach( img => {
      img.addEventListener("click", this.open);
    });
  }
}