import {Popup} from "./Popup.js"

export default class PopupWithForm extends Popup {
  constructor(popupSelector,callback) {
    super(popupSelector);
    this.callback = callback;
  }

  open () {
    super.open();
  }

  close () {
    super.close();
  }

  _handleEscClose () {
    super._handleEscClose();
  }

  setEvenListeners () {
    super.setEvenListeners();
    this.closeButton = document.querySelector('.edit__close');
    this.closeButton.addEventListener("click", close);


/*
    this.callback.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.callback.reset();
    })
*/


    submitProfileButton.addEventListener("click", changeProfileData);
    submitGallery.addEventListener("click", createNewCardInfo);
  }

  _getInputValues(){
    profileEditor.querySelector(".input__name").textContent = newName.value;
    profileEditor.querySelector(".input__description").textContent = newDesc.value;
  }

}