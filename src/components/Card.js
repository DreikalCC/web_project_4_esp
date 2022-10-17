export class Card {
  constructor({nombre, link, template, imageOpener}){
    this.nombre = nombre;
    this.link = link;
    this.template = template;
    this.imageOpener = imageOpener;
    this.cardContainer = document.querySelector(".elements");
    this._cardElement = this.template.querySelector(".element").cloneNode(true);
  }

  createCardElement (){
    this._cardElement.querySelector(".element__location").textContent = this.nombre;
    this._cardElement.querySelector(".element__image").alt = this.nombre;
    this._cardElement.querySelector(".element__image").src = this.link;
    this._cardElement.querySelector(".element__like").addEventListener("click", this._likeTheCard);
    this._cardElement.querySelector(".element__erase").addEventListener("click", this._eraseTheCard);
    this._cardElement.querySelector(".element__image").addEventListener("click", (evt)=>{this.imageOpener(evt);})
    return this._cardElement;
  }

  _likeTheCard = (evt) => {
    const _likeButton = evt.target;
    _likeButton.classList.toggle("element__liked");
  }

  _eraseTheCard = () => {
    this._cardElement.remove();
    this._cardElement = null
  }

}