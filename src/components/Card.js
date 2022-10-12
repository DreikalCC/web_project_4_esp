export class Card {
  constructor({nombre, link}){
    this.nombre = nombre;
    this.link = link;
    this.popScreen = document.querySelector(".popup");
    this.cardContainer = document.querySelector(".elements");
  }

  createCardElement (){
    const cardTemplate = document.querySelector("#card").content;
    const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
    cardElement.querySelector(".element__location").textContent = this.nombre;
    cardElement.querySelector(".element__image").alt = this.nombre;
    cardElement.querySelector(".element__image").src = this.link;
    cardElement.querySelector(".element__like").addEventListener("click", this._likeTheCard);
    cardElement.querySelector(".element__erase").addEventListener("click", this._eraseTheCard);

    this.cardContainer.prepend(cardElement);
    return cardElement;
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