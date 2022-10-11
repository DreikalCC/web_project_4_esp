import {Popup} from "./Popup.js"
import { FormValidator } from "./FormValidator.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, callback) {
    super(popupSelector);
    this.callback = callback;

  }

  close () {
    document.querySelectorAll('input').forEach(input => input.value ='');
    super.close();
    const formList = Array.from(document.querySelectorAll(".edit__form"));
    const inputList = Array.from(document.querySelectorAll(".input__form"));
    const validator = new FormValidator (formList, inputList);
  }

  setEvenListeners  ()  {
    super.setEvenListeners();
    this._getInputValues();
  }

  _getInputValues () {
    const inputs = this._container.querySelectorAll(".input__form");
    const inputValues = [""];
    inputs.forEach(field => {inputValues[field.data] = field.value;} );
  }

}