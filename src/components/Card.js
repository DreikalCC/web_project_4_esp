export default class Card {
  constructor({name, link, id, template, imageOpener}){
    this.name = name;
    this.link = link;
    this.id = id;
    this.template = template;
    this.imageOpener = imageOpener;
    this._cardElement = this.template.querySelector(".element").cloneNode(true);
    this._cardImage = this._cardElement.querySelector(".element__image");
  }

  createCardElement () {
    this._cardElement.querySelector(".element__location").textContent = this.name;
    this._cardImage.alt = this.name;
    this._cardImage.src = this.link;
    this._setEventListeners();
    return this._cardElement;
  }

  _setEventListeners () {
    this._cardElement.querySelector(".element__like").addEventListener("click", this._likeTheCard);
    this._cardElement.querySelector(".element__erase").addEventListener("click", this._eraseTheCard);
    this._cardImage.addEventListener("click", (evt)=>{this.imageOpener(evt);})
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