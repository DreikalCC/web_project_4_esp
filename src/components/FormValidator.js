export default class FormValidator{
  constructor(form, settings){
    this._form = form;
    this._settings = settings;
    this._submitButton = this._form.querySelector(this._settings.submitButton);
    this._submitButtonDisabled = this._settings.submitButtonDisabled;
    this._inputSelector = this._settings.inputSelector;
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._errorSelector = this._settings.errorArea;
    this._errorActive = this._settings.errorActive;
  }

  enableValidation () {
    this._form.addEventListener("submit", (evt)=>{evt.preventDefault();});
      this._setEventListeners();
    }

  resetValidation () {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideError(inputElement)}
    );
  }

  _setEventListeners () {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {this._checkInputValidity(inputElement);
      this._toggleButtonState();})
    })
  }

  _toggleButtonState () {
    if (this._hasInvalidInput()){
      this._submitButton.classList.add(this._submitButtonDisabled);
      this._submitButton.disabled = true;
    } else {
      this._submitButton.classList.remove(this._submitButtonDisabled);
      this._submitButton.disabled = false;
    }
  }

  _hasInvalidInput () {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _checkInputValidity (inputElement) {
    if(!inputElement.validity.valid){
      this._showError(inputElement);
    }
    else{
      this._hideError(inputElement);
    }
  }

  _showError (inputElement) {
    const formErrorSpan = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._errorSelector);
    formErrorSpan.textContent = inputElement.validationMessage;
    formErrorSpan.classList.add(this._errorActive);
  }

  _hideError (inputElement) {
    const formErrorSpan = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._errorSelector);
    formErrorSpan.textContent = "";
    formErrorSpan.classList.remove(this._errorActive);
  }


}
