export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.popScreen = document.querySelector(".popup");
  }

  open () {
    super.open();
    const image = evt.target;
    this.popScreen.querySelector(".popup__image").src = image.getAttribute("src");
    this.popScreen.querySelector(".popup__image").alt = image.getAttribute("alt");
    this.popScreen.querySelector(".popup__name").textContent = image.getAttribute("alt");
  }

  close () {
    super.close();
  }

  _handleEscClose () {
    super._handleEscClose();
  }

  setEvenListeners () {
    super.setEvenListeners();
  }
}