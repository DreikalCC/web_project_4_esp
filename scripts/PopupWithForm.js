import {Popup} from "./Popup.js"
import { profileEditor, galleryEditor } from "./utils.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    //this.callback = callback;
  }

  open () {
    super.open();
  }

  close () {
    super.close();
    document.querySelector(`#${popupSelector}`).querySelectorAll('input').forEach(input => input.value ='');
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
    document.querySelector(`#${popupSelector}`).querySelector(".input__name").textContent = newName.value;
    document.querySelector(`#${popupSelector}`).querySelector(".input__description").textContent = newDesc.value;
  }

}