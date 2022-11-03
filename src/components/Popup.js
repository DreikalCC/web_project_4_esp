export class Popup {
  constructor(popupSelector) {
    this._container = document.querySelector(`#${popupSelector}`);
    this.selector = popupSelector;
    this.closeButton = this._container.querySelector(`#${popupSelector}__close`);
    this.overlay = this._container.querySelector('.popup__overlay');
    this.setEventListeners();
  }

  open  ()  {
    this._container.classList.add("popup_active");
    //console.log(this)
    this._handleEscClose();
  }

  close () {
    this._container.classList.remove("popup_active");
    document.removeEventListener("keydown", this.escPressed)
  }

  _handleEscClose  ()  {
    this.escPressed = (evt) => {
      if (evt.key === "Escape"){
        this.close();
      }
    }
    document.addEventListener("keydown", this.escPressed)

  }

  setEventListeners  ()  {
    this.closeButton.addEventListener("click", this.close.bind(this));
    this.overlay.addEventListener("click", this.close.bind(this));
  }
}