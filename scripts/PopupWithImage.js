import { lightbox } from "./index.js";
import {Popup} from "./Popup.js"

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    //this._container = document.querySelector(`.${popupSelector}`);
  }

  open () {
    super.open();

    const image = evt.target;
    this._container.querySelector(".popup__image").src = image.getAttribute("src");
    this._container.querySelector(".popup__image").alt = image.getAttribute("alt");
    this._container.querySelector(".popup__name").textContent = image.getAttribute("alt");
  }

  close () {
    super.close();
  }

  _handleEscClose () {
    super._handleEscClose();
  }

  setEvenListeners () {
    super.setEvenListeners();
    console.log(this);
    document.querySelector(".element__image").addEventListener("click", this.open);
    console.log(lightbox);
    document.querySelector(".element__image").addEventListener("click", lightbox.open);
  }
}