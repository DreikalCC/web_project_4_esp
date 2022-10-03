export class Popup {
  constructor(popupSelector) {
    this._container = document.querySelector(`.${popupSelector}`);
    this.selector = popupSelector;
    //console.log(this)
  }

  open  () {
    this._container = document.querySelector(this.selector);
    console.log(this)
    this._container.classList.add(`${this.selector}_active`);
    this.setEvenListeners();
    this._handleEscClose();
    console.log(this)
  }

  close = () => {
    this._container.classList.remove(`${this.selector}_active`);
  }

  _handleEscClose () {
    document.addEventListener("keydown", function(evt){
      if (evt.key == "Escape" && this._container.classList.contains(`${this.selector}_active`)){
        this.close();
      }
    })
  }

  setEvenListeners () {
    const closeButton = document.querySelector(`.${this.selector}__close`);
    closeButton.addEventListener("click", this.close);

    document.addEventListener("click", (evt)=>{
      if ((evt.target.closest(`.${this.selector}__overlay`)) && this._container.classList.contains(`${this.selector}_active`)){
        this.close();
      }
    })
  }
}