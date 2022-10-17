import {Popup} from "./Popup.js"

export default class PopupWithForm extends Popup {
  constructor(popupSelector, callback) {
    super(popupSelector);
    this.callback = callback;
    this.submitButton = this._container.querySelector(".edit__submit-btn");
    this._form = this._container.querySelector('form');
    this._inputFields = this._container.querySelectorAll(".input__form");
  }

  close () {
    this._form.reset();
    super.close();
  }

  setEventListeners  ()  {
    super.setEventListeners();
    //console.log(this);
    //this.submitButton.addEventListener("click", this.callback);
  }

    _getInputValues () {
    const inputValues = {};
    this._inputFields.forEach(field => {inputValues[field.data] = field.value;} );
  }

  setInputValues (data) {
    this._inputFields.forEach((input) =>{
      input.value = data[input.name];
    })
  }

}