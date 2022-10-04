import { profileFormEdit, addCardForm } from "./index.js";

export class Popup {
  constructor(popupSelector) {
    this._container = document.querySelector(`#${popupSelector}`);
    this.selector = popupSelector; //".edit"
    //this.selectorWithout
    //console.log(this)
  }

  open = ()=> {
    //console.log(this);
    this._container.classList.add(`${this.selector}_active`);
    this.setEvenListeners();
    this._handleEscClose();

    //console.log(this)
  }

  close = () => {
    //console.log(this);
    this._container.classList.remove(`${this.selector}_active`);
  }

  _handleEscClose = () => {
    document.addEventListener("keydown", function(evt){
      //console.log(this)
      if (evt.key == "Escape" /*&& document.querySelector(`#${popupSelector}`).classList.contains(`${this.selector}_active`)*/){
        //this.close();
        profileFormEdit.close();
        addCardForm.close();
      }
    })


  }

  setEvenListeners = () => {
    const closeButton = document.querySelector(`.${this.selector}__close`);
    closeButton.addEventListener("click", this.close);
    const overlay = this._container.querySelector(`.${this.selector}__overlay`);
    overlay.addEventListener("click", this.close);
  }
}