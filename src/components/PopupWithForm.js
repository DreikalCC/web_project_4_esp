import {Popup} from "./Popup.js"

export default class PopupWithForm extends Popup {
  constructor(popupSelector, callback) {
    super(popupSelector);
    this.callback = callback;
    this.submitButton = this._container.querySelector(".edit__submit-btn");
    this._inputFields = this._container.querySelectorAll(".input__form");
  }

  close () {
    this._container.querySelector(".edit__form").reset();
    super.close();
  }

  setEventListeners  ()  {
    super.setEventListeners();
    this._container.querySelector(".edit__form").addEventListener("submit",(evt) => {
      evt.preventDefault();
      this.callback(this._getInputValues());
    });
  }

    _getInputValues () {
    const inputValues = {};
    this._inputFields.forEach(field => {inputValues[field.name] = field.value;} );
    console.log(inputValues)
    return inputValues;
  }
}