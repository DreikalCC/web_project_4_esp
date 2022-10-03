import {Popup} from "./Popup.js"
import { profileEditor, galleryEditor } from "./utils.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, callback, form) {
    super(popupSelector);
    this.callback = callback;
    this.selector = popupSelector;
    this.form = form;
  }

  open () {
    super.open();
  }

  close () {
    super.close();
    document.querySelector(`#${this.selector}`).querySelectorAll('input').forEach(input => input.value ='');
  }

  _handleEscClose () {
    super._handleEscClose();
  }

  setEvenListeners () {
    super.setEvenListeners();
    this.closeButton = document.querySelector('.edit__close');
    this.closeButton.addEventListener("click", close);
    this.form.addEventListener("submit",this.callback)
  }

  _getInputValues(){
    document.querySelector(`#${this.selector}`).querySelector(".input__name").textContent = newName.value;
    document.querySelector(`#${this.selector}`).querySelector(".input__description").textContent = newDesc.value;
  }

}