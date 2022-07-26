import {Popup} from "./Popup.js"

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, callback) {
    super(popupSelector);
    this.callback = callback;
    this.submitButton = this._container.querySelector(".edit__submit-btn");
    this.submitButtonText = this.submitButton.textContent;
    this.loadingText = "Guardando...";
    this._inputFields = this._container.querySelectorAll(".input__form");
    this.selected = {};
  }

  open (evt) {
    const button = evt.target;
    super.open();
    if(button.id === "erase-btn"){
      const selectedCard = button.closest(".element");
      const cardId = button.cardId
      this.selected = {selectedCard, cardId};
    }
  }

  setEventListeners  ()  {
    super.setEventListeners();
    this._container.querySelector(".edit__form").addEventListener("submit",(evt) => {
      evt.preventDefault();
      this.callback();
    });
  }

  loading(loading){
    if(loading){
      this.submitButton.textContent = this.loadingText;
    }else{
      this.submitButton.textContent = this.submitButtonText;
    }
  }
}