export default class Card {
  constructor({name, link, id, owner, likes, template, user, imageOpener, eraserOpener, handleLike, handleDislike}){
    this.name = name;
    this.link = link;
    this.id = id;
    this.owner= owner;
    this._ownerId = this.owner._id;
    this.user = user;
    this.likes = likes;
    this.likesAmount = this.likes.length;
    this.handleLike = handleLike;
    this.handleDislike = handleDislike;
    this.template = template;
    this.imageOpener = imageOpener;
    this.eraserOpener= eraserOpener;
    this._cardElement = this.template.querySelector(".element").cloneNode(true);
    this._cardImage = this._cardElement.querySelector(".element__image");
    this.likeCounter = this._cardElement.querySelector(".element__counter");
    this.eraseBtn = this._cardElement.querySelector(".element__erase");
    this.likeBtn = this._cardElement.querySelector(".element__like");
    this.eraseBtn.cardId = this.id;
  }

  createCardElement () {
    this._cardElement.querySelector(".element__location").textContent = this.name;
    this._cardImage.alt = this.name;
    this._cardImage.src = this.link;
    this.likeCounter.textContent = this.likesAmount;
    this.newLikesAmount = "";
    this._setEventListeners();
    this.liked = this._hasLiked();
    this._toggleButtonState();
    return this._cardElement;
  }

  _toggleButtonState () {
    if (this.user !== this._ownerId){
      this.eraseBtn.classList.add("element__erase_disabled");
      this.eraseBtn.disabled = true;
    }
  }

  _hasLiked () {
    if (this.likes.some(e=>e._id === this.user)){
      this.likeBtn.classList.add("element__liked")
    }
  }

  _setEventListeners () {
    this.likeBtn.addEventListener("click", this._likeTheCard);
    this.eraseBtn.addEventListener("click", this.eraserOpener);
    this._cardImage.addEventListener("click", (evt)=>{this.imageOpener(evt);})
  }

  _likeTheCard = (evt) => {
    const _likeButton = evt.target;
    if(_likeButton.classList.contains("element__liked")){
        _likeButton.nextElementSibling.textContent = this.likesAmount-1;
        this.newLikesAmount = this.likesAmount-1;
        this.newLikeNumber();
      _likeButton.classList.remove("element__liked");
      this.handleDislike(this.id);
    }else{
      _likeButton.classList.add("element__liked");
      _likeButton.nextElementSibling.textContent = this.likesAmount+1;
      this.newLikesAmount = this.likesAmount+1;
      this.newLikeNumber();
      this.handleLike(this.id);
    }
  }

  newLikeNumber(){
    this.likesAmount = this.newLikesAmount;
  }

  _eraseTheCard  ({selectedCard})  {
    selectedCard.remove();
    selectedCard = null
  }

}