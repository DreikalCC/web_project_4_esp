import {Card} from "../components/Card.js";
import UserInfo from "../components/UserInfo.js";
import { profileFormEdit, addCardForm, lightbox} from "./index.js";
import Section from "../components/Section.js";

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
  const newCard = new Section ({
    data: [{nombre: newCardName.value, link: newCardLink.value}],
    renderer: (data) => {
      const card = new Card(data)
      const cardElement = card.createCardElement();
      newCard.setItem(cardElement);
      lightbox.setEvenListeners();
    }
  },
    ".elements"
  );
  newCard.renderItems();
  addCardForm.close();
}

export const handleSubmitProfile = () =>{
  const user = new UserInfo (newName.value, newDesc.value);
  user.setUserInfo();
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

  submitProfileButton.addEventListener("click", ()=>{
    handleSubmitProfile();
    profileFormEdit.close();
  });

  addButton.addEventListener("click", ()=>{
    addCardForm.open();
  });

  submitGallery.addEventListener("click", handleSubmitCard);

  document.addEventListener("keydown", function(evt){
    if (evt.key == "Enter" && profileEditor.classList.contains("edit_active")){
      ()=>{
        handleSubmitProfile();
      };
    }
    if (evt.key == "Enter" && galleryEditor.classList.contains("gallery_active")){
      handleSubmitCard();
    }
  })

}