import {Popup} from "./Popup.js"
import { profileEditor, galleryEditor } from "./utils.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector,callback) {
    super(popupSelector);
    this.callback = callback;
  }

  open () {
    super.open();
  }

  close () {
    super.close();
    `${popupSelector}`Editor.querySelectorAll('input').forEach(input => input.value ='');
  }

  _handleEscClose () {
    super._handleEscClose();
  }

  setEvenListeners () {
    super.setEvenListeners();
    this.closeButton = document.querySelector('.edit__close');
    this.closeButton.addEventListener("click", close);
  }

  _getInputValues(){
    `${popupSelector}`Editor.querySelector(".input__name").textContent = newName.value;
    `${popupSelector}`Editor.querySelector(".input__description").textContent = newDesc.value;
  }

}