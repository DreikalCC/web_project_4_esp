import { profileFormEdit, addCardForm, lightbox } from "./index.js";

export class Popup {
  constructor(popupSelector) {
    this._container = document.querySelector(`#${popupSelector}`);
    this.selector = popupSelector;
    this.closeButton = this._container.querySelector(`.${this.selector}__close`);
    this.overlay = this._container.querySelector(`.${this.selector}__overlay`);
  }

  open  ()  {
    //console.log(this);
    this._container.classList.add(`${this.selector}_active`);
    this.setEvenListeners();
    //this._handleEscClose();
    //console.log(this)
  }

  close = () => {
    console.log(this);
    this._container.classList.remove(`${this.selector}_active`);
  }

  _handleEscClose  ()  {
    document.addEventListener("keydown", function(evt){
      console.log(this)
      if (evt.key === "Escape"){
        //this.close();
        profileFormEdit.close();
        addCardForm.close();
        lightbox.close();
      }
    })

  }

  setEvenListeners  ()  {
    //console.log(this);
    //const closeButton = document.querySelector(`.${this.selector}__close`);
    this.closeButton.addEventListener("click", this.close);
    //const overlay = this._container.querySelector(`.${this.selector}__overlay`);
    this.overlay.addEventListener("click", this.close);
  }
}