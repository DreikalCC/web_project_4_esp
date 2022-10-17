import {Popup} from "./Popup.js"

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.image = this._container.querySelector('.popup__image');
    this.text = this._container.querySelector('.popup__name');
  }

  open (evt) {
    super.open();
    console.log(this._container)
    const image = evt.target;
    this.image.src = image.getAttribute("src");
    this.image.alt = image.getAttribute("alt");
    this.text.textContent = image.getAttribute("alt");
  }
}