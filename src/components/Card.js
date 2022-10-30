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
    if(_likeButton.classList.contains("element__liked")){
      _likeButton.classList.remove("element__liked");
    }
    else{
      _likeButton.classList.add("element__liked");
      const counter = _likeButton.nextElementSibling;
      counter.textContent = +1;
    }
  }

  _eraseTheCard = () => {
    this._cardElement.remove();
    this._cardElement = null
  }

}