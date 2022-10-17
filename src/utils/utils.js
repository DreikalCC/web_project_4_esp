import {Card} from "../components/Card.js";
import UserInfo from "../components/UserInfo.js";
import { userProfile,profileFormEdit, addCardForm, /*initialCard,*/ lightbox} from "../page/index.js";
import Section from "../components/Section.js";
import { FormValidator } from "../components/FormValidator.js";

import {cardTemplate, editButton, addButton, closeButton, closeGallery, submitGallery, submitProfileButton, closePopup, profileEditor, galleryEditor, newDesc, newName, popScreen, person, desc, initialCards, galleryEdit, profileEdit} from "./constants.js";

export const initialCard = new Section ({
  data: initialCards,
  renderer: (data) => {
    const cardElement = createCard({nombre: data.nombre, link:data.link, template:cardTemplate, imageOpener:(evt)=>{lightbox.open(evt)}});
    //console.log(data);
    initialCard.setItem(cardElement);
  }
},
".elements"
);

export const handleSubmitCard = (evt)=>{
  evt.preventDefault();
  const info = {nombre: newCardName.value, link: newCardLink.value};
  const cardElement = createCard({nombre:info.nombre, link:info.link, template:cardTemplate, imageOpener:(evt)=>{lightbox.open(evt)}});
  console.log(info);
  initialCard.setItem(cardElement);
  lightbox.setEventListeners();
  addCardForm.close();
}
export const handleSubmitProfile = () =>{
  userProfile.setUserInfo(userProfile.value, userProfile.value);
  profileFormEdit.close();
};

export const createCard = (data) => {
  const card = new Card (data);
  //console.log(data);
  const cardElement = card.createCardElement();
  return cardElement;
}

export function initiateValidation () {
    const profileValidator = new FormValidator (profileEdit, profileEdit.querySelectorAll(".input__form"));
    profileValidator.enableValidation();
    const galleryValidator = new FormValidator (galleryEdit, galleryEdit.querySelectorAll(".input__form"))
    galleryValidator.enableValidation();
};