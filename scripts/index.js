import {Card} from "./card.js";
import {FormValidator} from "./formvalidator.js";

const person = document.querySelector(".profile__name");
const desc = document.querySelector(".profile__description");


const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeButton = document.querySelector('.edit__close');
const closeGallery = document.querySelector('.edit__close_gallery');
const submitProfileButton = document.querySelector(".edit__submit-btn");
const submitGallery = document.querySelector(".edit__submit-btn_create-card");

const profileEditor = document.querySelector(".edit");
const galleryEditor = document.querySelector(".edit_gallery");
const popScreen = document.querySelector(".popup");
const closePopup = document.querySelector(".popup__close");

const newName = document.querySelector(".input__name");
const newDesc = document.querySelector(".input__description");

const profileInputs = profileEditor.querySelectorAll('input');
const galleryInputs = galleryEditor.querySelectorAll('input');

const cardNameInput = document.querySelector(".input__name_gallery").value;
const cardLinkInput = document.querySelector(".input__description_gallery").value;

const newCard = [{nombre: "",
  link: ""}
];


function initiateValidation () {
const formList = Array.from(document.querySelectorAll(".edit__form"));
const inputList = Array.from(document.querySelectorAll(".input__form"));
const validator = new FormValidator (formList, inputList);
}
initiateValidation();

const initialCards = [
  {
    nombre: "Valle de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    nombre: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    nombre: "Montañas Calvas",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    nombre: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    nombre: "Parque Nacional de la Vanoise",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    nombre: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];


editButton.addEventListener("click", editProfile);
closeButton.addEventListener("click", closeProfileEdit);

submitProfileButton.addEventListener("click", changeProfileData);


addButton.addEventListener("click", createPlaceForm);
closeGallery.addEventListener("click", closeGalleryEdit);

submitGallery.addEventListener("click", createNewCardInfo);

closePopup.addEventListener("click", closeCardView);


function editProfile (){
  profileEditor.classList.toggle("edit_active");
}

function createPlaceForm (){
  galleryEditor.classList.toggle("gallery_active");
}

function closeProfileEdit (){
  profileInputs.forEach(input => input.value ='');
  editProfile();
}

function closeGalleryEdit (){
  galleryInputs.forEach(input => input.value ='');
  createPlaceForm();
}

function changeProfileData (){

  profileEditor.querySelector(".input__name").textContent = newName.value;
  profileEditor.querySelector(".input__description").textContent = newDesc.value;

  person.textContent = newName.value;
  desc.textContent = newDesc.value;

  editProfile();
}

function createNewCardInfo (){
  newCard["nombre"] = document.querySelector(".input__name_gallery").value;
  newCard["link"]= document.querySelector(".input__description_gallery").value;
  const card = new Card(newCard);
}
/*
class Card {
  constructor({nombre, link}){
    this.nombre = nombre;
    this.link = link;
    this.cardElement = this.createCardElement();
    this.popScreen = document.querySelector(".popup");
    this.likeButton = this.cardElement.querySelector(".element__like");
    this.eraseButton = this.cardElement.querySelector(".element__erase");
  }

  createCardElement (){
    //const popScreen = document.querySelector(".popup");
    const closePopup = document.querySelector(".popup__close");
    const cardContainer = document.querySelector(".elements");
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

    cardContainer.prepend(card);
    closeGalleryEdit ();

    cardContainer.querySelector(".element__like").addEventListener("click", this._likeTheCard);

    cardContainer.querySelector(".element__image").addEventListener("click", this._viewTheCard);

    closePopup.addEventListener("click", this._closeCardView);

    cardContainer.querySelector(".element__erase").addEventListener("click", this._eraseTheCard);

    return card;
  }

  _likeTheCard (evt){
    const _likeButton = evt.target;
    _likeButton.classList.toggle("element__liked");
  }

  _viewTheCard (evt){
    const image = evt.target;
    popScreen.classList.add("popup__active");
    popScreen.querySelector(".popup__image").src = image.getAttribute("src");
    popScreen.querySelector(".popup__image").alt = image.getAttribute("alt");
    popScreen.querySelector(".popup__name").textContent = image.getAttribute("alt");
  }

  _eraseTheCard (evt){
    const _eraseButton = evt.target;
    this.cardContainer.querySelector(".element__like").removeEventListener("click", this._likeTheCard);
    this.cardContainer.querySelector(".element__image").removeEventListener("click", this._viewTheCard);
    closePopup.removeEventListener("click", this._closeCardView);
    this.cardContainer.querySelector(".element__erase").removeEventListener("click", this._eraseTheCard);
    _eraseButton.closest(".element").remove();
  }

  _closeCardView (){
    popScreen.classList.remove("popup__active");
  }

}*/

(function createInitialCards (){
  initialCards.forEach( (data) => {const card = new Card (data)} )
})();

document.addEventListener("keydown", function(evt){
  if (evt.key == "Escape" && profileEditor.classList.contains("edit_active")){
    closeProfileEdit();
  }
  if (evt.key == "Escape" && galleryEditor.classList.contains("gallery_active")){
    closeGalleryEdit();
  }
  if (evt.key == "Escape" && popScreen.classList.contains("popup__active")){
    closeCardView();
  }
})

document.addEventListener("keydown", function(evt){
  if (evt.key == "Enter" && profileEditor.classList.contains("edit_active")){
    changeProfileData();
  }
  if (evt.key == "Enter" && galleryEditor.classList.contains("gallery_active")){
    createNewCardInfo();
  }
})

document.addEventListener("click", function(evt){
  if ((evt.target.closest(".edit__overlay")) && profileEditor.classList.contains("edit_active")){
    closeProfileEdit();
  }
  if ((evt.target.closest(".edit__overlay")) && galleryEditor.classList.contains("gallery_active")){
    closeGalleryEdit();
  }
  if ((evt.target.closest(".popup__overlay")) && popScreen.classList.contains("popup__active")){
    closeCardView();
  }
})


function closeCardView (){
  popScreen.classList.remove("popup__active");
}