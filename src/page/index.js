import "./index.css";
import profileSrc from "../images/jack.jpg";
import underlineSrc from "../images/Line.png";
import aroundSrc from "../images/Vector.png";


import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import {settings ,cardTemplate, editButton, addButton, initialCards, galleryEdit, profileEdit, newName, newDesc, person, desc } from "../utils/constants.js"

/*
const initiateValidation= ()=> {
  const profileValidator = new FormValidator (profileEdit, settings);
  profileValidator.enableValidation();
  const galleryValidator = new FormValidator (galleryEdit, settings)
  galleryValidator.enableValidation();
};
initiateValidation();*/

const formValidators = {}

const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(".edit__form"));
  formList.forEach((formElement) => {
    const validator = new FormValidator(formElement, settings);
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
   validator.enableValidation();
  });
};

enableValidation(settings);




export const initialCard = new Section ({
  data: initialCards,
  renderer: (data) => {
    const cardElement = createCard(data);
    //console.log(data);
    initialCard.setItem(cardElement);
  }
},
".elements"
);

export const handleSubmitCard = (info)=>{
  console.log(info);
  const cardElement = createCard(info);
  initialCard.setItem(cardElement);
  lightbox.setEventListeners();
  addCardForm.close();
}





export const handleSubmitProfile = ({name, desc}) =>{
  userProfile.setUserInfo(name, desc);
  //profileFormEdit.setInputValues();
  //formValidators['profile'].resetValidation();
  profileFormEdit.close();
};

export const lightbox = new PopupWithImage ("popup");

export const createCard = (data) => {
  const card = new Card ({name: data.name, link:data.link, template:cardTemplate, imageOpener:(evt)=>{lightbox.open(evt)}});
  console.log(data);
  const cardElement = card.createCardElement();
  return cardElement;
}






initialCard.renderItems();

export const addCardForm = new PopupWithForm ("gallery", handleSubmitCard);

export const profileFormEdit = new PopupWithForm ("edit", handleSubmitProfile);

//export const addCardForm = new PopupWithForm ("gallery", handleSubmitCard);

//export const lightbox = new PopupWithImage ("popup");

export const userProfile = new UserInfo (person, desc);

(function documentEventListeners () {
  editButton.addEventListener("click", ()=>{
    const userInfo = userProfile.getUserInfo();
    newName.textContent = userInfo.name;
    newDesc.textContent = userInfo.job;
    formValidators['profile'].resetValidation();
    profileFormEdit.open();
  });

  addButton.addEventListener("click", ()=>{
    formValidators['gallery'].resetValidation();
    addCardForm.open();
  });
})();









const profileImage = document.querySelector(".profile__pic");
profileImage.src = profileSrc;
const aroundImage = document.querySelector(".header__logo");
aroundImage.src = aroundSrc;
const underlineImage = document.querySelector(".header__line");
underlineImage.src = underlineSrc;