export class FormValidator{
  constructor(form, input){
    this.form = form;
    this.input = input;
    this.FormValidation = this.enableValidation();
  }

  enableValidation () {
    //const formList = Array.from(document.querySelectorAll(".edit__form"));
    this.form.forEach((formElement) => {
      formElement.addEventListener("submit", (evt)=>{evt.preventDefault();});
      this._setEventListeners(formElement);
    })
  }

  _setEventListeners (formElement) {
    //const _inputList = Array.from(formElement.querySelectorAll(".input__form"));
    const _buttonElement =formElement.querySelector(".edit__submit-btn");
    this._toggleButtonState(this.input, _buttonElement);
    this.input.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {this._checkInputValidity(formElement,inputElement);
      this._toggleButtonState(this.input, _buttonElement);})
    })
  }

  _toggleButtonState (inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)){
      buttonElement.classList.add("edit__submit-btn_inactive");
    } else {
      buttonElement.classList.remove("edit__submit-btn_inactive");
    }
  }

  _hasInvalidInput (inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _checkInputValidity (formElement, inputElement) {
    if(!inputElement.validity.valid){
      this._showError(formElement, inputElement);
    }
    else{
      this._hideError(formElement, inputElement);
    }
  }

  _showError (formElement, inputElement ) {
    const _formErrorSpan = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add("input__form_type-error");
    _formErrorSpan.textContent = inputElement.validationMessage;
    _formErrorSpan.classList.add("input__form-error_active");
  }

  _hideError (formElement, inputElement) {
    const _formErrorSpan = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove("input__form_type-error");
    _formErrorSpan.textContent = "";
    _formErrorSpan.classList.remove("input__form-error_active");
  }
}