/*
enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
});
*/

const showError = (formElement, inputElement ) => {
  const formErrorSpan = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("input__form_type-error");
  formErrorSpan.textContent = inputElement.validationMessage;
  formErrorSpan.classList.add("input__form-error_active");
};

const hideError = (formElement, inputElement) => {
  const formErrorSpan = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("input__form_type-error");
  formErrorSpan.textContent = "";
  formErrorSpan.classList.remove("input__form-error_active");
};

const checkInputValidity = (formElement, inputElement) => {
  if(!inputElement.validity.valid){
    showError(formElement, inputElement);
  }
  else{
    hideError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".input__form"));
  const buttonElement =formElement.querySelector(".edit__submit-btn");
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {checkInputValidity(formElement,inputElement);
    toggleButtonState(inputList, buttonElement);})
  })
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".edit__form"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt)=>{evt.preventDefault();});
    //const fieldsetList = Array.from(formElement.querySelectorAll(".input"));
    //fieldsetList.forEach((fieldset) => {setEventListeners(fieldset)})
    setEventListeners(formElement);
  })
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)){
    buttonElement.classList.add("edit__submit-btn_inactive");
  } else {
    buttonElement.classList.remove("edit__submit-btn_inactive");
  }
}



enableValidation();