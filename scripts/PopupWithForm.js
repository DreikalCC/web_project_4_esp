import {Popup} from "./Popup.js"
//import { profileEditor, galleryEditor } from "./utils.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, callback, form) {
    super(popupSelector);
    this.callback = callback;

  }

/*  open () {
    super.open();
  }*/

  close () {
    document.querySelectorAll('input').forEach(input => input.value ='');
    super.close();
    //console.log(this);
    //document.querySelector(`#${this.selector}`).querySelectorAll('input').forEach(input => input.value ='');
  }

/*  _handleEscClose () {
    super._handleEscClose();
  }*/

  setEvenListeners () {
    super.setEvenListeners();
  }

  _getInputValues () {
    const inputs = this._container.querySelectorAll(".input__form");
    const inputValues = [""];
    inputs.forEach(field => {inputValues[field.data] = field.value;} );
  }

}