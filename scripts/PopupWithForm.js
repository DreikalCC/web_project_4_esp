export default class PopupWithForm extends Popup {
  constructor(popupSelector,callback) {
    super(popupSelector);
    this.popScreen = document.querySelector(".popup");
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

    submitProfileButton.addEventListener("click", changeProfileData);
    submitGallery.addEventListener("click", createNewCardInfo);
  }

  _getInputValues(){
    profileEditor.querySelector(".input__name").textContent = newName.value;
    profileEditor.querySelector(".input__description").textContent = newDesc.value;
  }

}