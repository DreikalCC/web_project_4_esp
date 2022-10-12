import {Card} from "../components/Card.js";
import UserInfo from "../components/UserInfo.js";
import { userProfile,profileFormEdit, addCardForm, initialCard, lightbox} from "../page/index.js";
import Section from "../components/Section.js";
import { FormValidator } from "../components/FormValidator.js";

export const editButton = document.querySelector('.profile__edit-button');
export const addButton = document.querySelector('.profile__add-button');
export const closeButton = document.querySelector('.edit__close');
export const closeGallery = document.querySelector('.edit__close_gallery');
export const submitProfileButton = document.querySelector(".edit__submit-btn");
export const submitGallery = document.querySelector(".edit__submit-btn_create-card");
export const closePopup = document.querySelector(".popup__close");
export const profileEditor = document.querySelector(".edit");
export const galleryEditor = document.querySelector(".edit_gallery");
export const popScreen = document.querySelector(".popup");
export const newName = document.querySelector(".input__name");
export const newDesc = document.querySelector(".input__description");
export const newCardName = document.querySelector(".input__name_gallery");
export const newCardLink = document.querySelector(".input__description_gallery");
export const person = document.querySelector(".profile__name");
export const desc = document.querySelector(".profile__description");
export const profileEdit = document.querySelector('.edit__form');
export const galleryEdit = document.querySelector('.edit__form_gallery');


export const handleSubmitCard = (evt)=>{
  evt.preventDefault();
  const info = {nombre: newCardName.value, link: newCardLink.value}
  //const newCard = (info) =>{
    const cardElement = createCard(info);
    initialCard.setItem(cardElement);
    lightbox.setEvenListeners();
    //}
  //initialCard.renderItems();
  addCardForm.close();
}

export const createCard = (data) => {
  const card = new Card (data);
  const cardElement = card.createCardElement();
  return cardElement;
}

export const handleSubmitProfile = () =>{
  userProfile.setUserInfo(newName.value, newDesc.value);
  profileFormEdit.close();
}

export const initialCards = [
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

export function documentEventListeners () {
  editButton.addEventListener("click", ()=>{
    profileFormEdit.open();
  });

  addButton.addEventListener("click", ()=>{
    addCardForm.open();
  });
}

export function initiateValidation () {
  Array.from(document.querySelectorAll(".edit__form")).forEach((form)=>{
    const inputList = Array.from(form.querySelectorAll(".input__form"));
    const validator = new FormValidator (form, inputList);
    validator.enableValidation();
  })
};