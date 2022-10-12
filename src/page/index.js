import "./index.css";
import profileSrc from "../images/jack.jpg";
import underlineSrc from "../images/Line.png";
import aroundSrc from "../images/Vector.png";


import {Card} from "../components/Card.js";
import {FormValidator} from "../components/FormValidator.js";
import {Popup} from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import {editButton, addButton, closeButton, closeGallery, submitGallery, submitProfileButton, closePopup, profileEditor,
  galleryEditor, documentEventListeners, newDesc, newName, popScreen, person, desc, initialCards,
  handleSubmitCard, handleSubmitProfile, galleryEdit, profileEdit, createCard, initiateValidation} from "../utils/utils.js";



initiateValidation();

export const initialCard = new Section ({
  data: initialCards,
  renderer: (data) => {
    const cardElement = createCard(data);
    initialCard.setItem(cardElement);
  }
},
".elements"
);

initialCard.renderItems();

export const profileFormEdit = new PopupWithForm ("edit", handleSubmitProfile);

export const addCardForm = new PopupWithForm ("gallery", handleSubmitCard);

export const lightbox = new PopupWithImage ("popup");
lightbox.setEvenListeners();

export const userProfile = new UserInfo (newName.value, newDesc.value);

documentEventListeners ();

const profileImage = document.querySelector(".profile__pic");
//profileImage.src = profileSrc;
const aroundImage = document.querySelector(".header__logo");
//aroundImage.src = aroundSrc;
const underlineImage = document.querySelector(".header__line");
//underlineImage.src = underlineSrc;