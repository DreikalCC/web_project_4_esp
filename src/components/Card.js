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
    this.likeBtn.addEventListener("click", (evt)=>{this.likingTheCard(evt);});
    this.eraseBtn.addEventListener("click", this.eraserOpener);
    this._cardImage.addEventListener("click", (evt)=>{this.imageOpener(evt);})
  }

  likingTheCard = (evt) => {
    const button = evt.target;
    const card = { button: this.likeBtn, cardId: this.id }
    if(button.classList.contains("element__liked")){

      this.handleDislike(card);
    }else{
      this.handleLike(card);
    }
  }

  likeTheCard (button) {
    button.classList.add("element__liked");
    this.newLikesAmount = this.likesAmount+1;

  }

  dislikeTheCard (button) {
    this.newLikesAmount = this.likesAmount-1;
    button.classList.remove("element__liked");

  }

  newLikeNumber(button, likes){
    button.nextElementSibling.textContent = likes;
  }

  eraseTheCard  ({selectedCard})  {
    selectedCard.remove();
    selectedCard = null
  }

}