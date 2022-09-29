export class Popup {
  constructor(popupSelector) {
    this._container = document.querySelector(popupSelector);
  }

  open () {
    this._container.classList.add(`${popupSelector}_active`);
  }

  close () {
    this._container.classList.remove(`${popupSelector}_active`);
  }

  _handleEscClose () {
    document.addEventListener("keydown", function(evt){
      if (evt.key == "Escape" && this._container.classList.contains(`${popupSelector}_active`)){
        this.close();
      }
    })
  }

  setEvenListeners () {
    const closeButton = document.querySelector('.${popupSelector}__close');
    closeButton.addEventListener("click", this.close);

    document.addEventListener("click", function(evt){
      if ((evt.target.closest(".${popupSelector}__overlay")) && this._container.classList.contains(`${popupSelector}_active`)){
        this.close();
      }
    })
  }
}