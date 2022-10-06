import { lightbox } from "./index.js";
import {Popup} from "./Popup.js"

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    //this._container = document.querySelector(`#${popupSelector}`);
  }

  open (evt) {
    //super.open();
    this._container = document.querySelector("#popup");
    this._container.classList.add(`popup_active`);
    this.data = document.querySelector(".popup__group");
    //console.log(this._container)
    //lightbox.open();

    const image = evt.target;
    this.data.querySelector(".popup__image").src = image.getAttribute("src");
    this.data.querySelector(".popup__image").alt = image.getAttribute("alt");
    this.data.querySelector(".popup__name").textContent = image.getAttribute("alt");
  }
/*
  close () {
    super.close();
  }*/

  _handleEscClose() {
    super._handleEscClose();

  }

  setEvenListeners () {
    super.setEvenListeners();
    //console.log(this);
    const imageElement = document.querySelectorAll(".element__image");
    imageElement.forEach( img => {
      img.addEventListener("click", this.open);
      //console.log(this)
    });
    //console.log(lightbox);
    //document.querySelectorAll(".element__image").addEventListener("click", lightbox.open);
  }
}