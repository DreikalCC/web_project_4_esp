import {Popup} from "./Popup.js"
import { initiateValidation } from "../utils/utils.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, callback) {
    super(popupSelector);
    this.callback = callback;
    this.submitButton = this._container.querySelector(".edit__submit-btn");
  }

  close () {
    document.querySelectorAll('input').forEach(input => input.value ='');
    super.close();
    initiateValidation();
  }

  setEvenListeners  ()  {
    super.setEvenListeners();
    this.submitButton.addEventListener("click", this.callback);
    this._getInputValues();
  }

  _getInputValues () {
    const inputs = this._container.querySelectorAll(".input__form");
    const inputValues = [""];
    inputs.forEach(field => {inputValues[field.data] = field.value;} );
  }

}