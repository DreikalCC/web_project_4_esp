export class Popup {
  constructor(popupSelector) {
    this._container = document.querySelector(`#${popupSelector}`);
    this.selector = popupSelector;
    this.closeButton = this._container.querySelector(`#${this.selector}__close`);
    this.overlay = this._container.querySelector(`#${this.selector}__overlay`);
  }

  open  ()  {
    this._container.classList.add("popup_active");
    this.setEvenListeners();
    this._handleEscClose();
  }

  close () {
    this._container.classList.remove("popup_active");
  }

  _handleEscClose  ()  {
    document.addEventListener("keydown", (evt) => {
      if (evt.key === "Escape"){
        this.close();
      }
    })

  }

  setEvenListeners  ()  {
    this.closeButton.addEventListener("click", this.close.bind(this));
    this.overlay.addEventListener("click", this.close.bind(this));
  }
}