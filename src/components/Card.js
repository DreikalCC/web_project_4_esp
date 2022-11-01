export default class Card {
  constructor({name, link, id, owner, likes, template, imageOpener}){
    this.name = name;
    this.link = link;
    this.id = id;
    this.owner= owner;
    this._ownerId = this.owner._id;
    this.likes = likes;
    this.likesAmount = this.likes.length;
    this.template = template;
    this.imageOpener = imageOpener;
    this._cardElement = this.template.querySelector(".element").cloneNode(true);
    this._cardImage = this._cardElement.querySelector(".element__image");
    this.likeCounter = this._cardElement.querySelector(".element__counter");
  }

  createCardElement () {
    console.log(this._ownerId)
    this._cardElement.querySelector(".element__location").textContent = this.name;
    this._cardImage.alt = this.name;
    this._cardImage.src = this.link;
    this.likeCounter.textContent = this.likesAmount;
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
      _likeButton.nextElementSibling.textContent = this.likesAmount;
      _likeButton.classList.remove("element__liked");
    }
    else{
      _likeButton.classList.add("element__liked");
      _likeButton.nextElementSibling.textContent = this.likesAmount+1;
    }
  }

  _eraseTheCard = () => {
    this._cardElement.remove();
    this._cardElement = null
  }

}