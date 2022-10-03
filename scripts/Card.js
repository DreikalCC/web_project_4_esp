export class Card {
  constructor({nombre, link}){
    this.nombre = nombre;
    this.link = link;
    //this.cardElement = this.createCardElement();
    this.popScreen = document.querySelector(".popup");
  }

  createCardElement (){
    this.cardContainer = document.querySelector(".elements");
    const card = document.createElement('div');
    card.classList.add('element');

    const cardPic = document.createElement('img');
    cardPic.classList.add('element__image');
    cardPic.src = this.link;
    cardPic.alt = this.nombre;

    const eraseButton = document.createElement('button');
    eraseButton.classList.add('element__erase');

    const cardInfo = document.createElement('div');
    cardInfo.classList.add('element__group');

    const cardName = document.createElement('h3');
    cardName.classList.add('element__location');
    cardName.textContent = this.nombre;

    const likeButton = document.createElement('button');
    likeButton.classList.add('element__like');

    cardInfo.append(cardName, likeButton);

    card.append(cardPic, eraseButton, cardInfo);

    //this.cardContainer.prepend(card);

    card.querySelector(".element__like").addEventListener("click", this._likeTheCard);

    //card.querySelector(".element__image").addEventListener("click", this._viewTheCard);

    card.querySelector(".element__erase").addEventListener("click", this._eraseTheCard);

    return card;
  }

  _likeTheCard = (evt) => {
    const _likeButton = evt.target;
    _likeButton.classList.toggle("element__liked");
  }

  _viewTheCard = (evt) => {
    const image = evt.target;
    this.popScreen.classList.add("popup__active");
    this.popScreen.querySelector(".popup__image").src = image.getAttribute("src");
    this.popScreen.querySelector(".popup__image").alt = image.getAttribute("alt");
    this.popScreen.querySelector(".popup__name").textContent = image.getAttribute("alt");
  }

  _eraseTheCard = () => {
    this.eraseButton = this.cardContainer.querySelector(".element__erase");
    this.cardContainer.querySelector(".element__like").removeEventListener("click", this._likeTheCard);
    this.cardContainer.querySelector(".element__image").removeEventListener("click", this._viewTheCard);
    this.cardContainer.querySelector(".element__erase").removeEventListener("click", this._eraseTheCard);
    this.eraseButton.closest(".element").remove();
  }

}