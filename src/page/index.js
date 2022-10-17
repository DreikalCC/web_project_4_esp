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
//utils
import {handleSubmitProfile, initialCard, handleSubmitCard, createCard, initiateValidation} from "../utils/utils.js";
//consts
import {cardTemplate, editButton, addButton, closeButton, closeGallery, submitGallery, submitProfileButton, closePopup, profileEditor, galleryEditor, newDesc, newName, popScreen, person, desc, initialCards, galleryEdit, profileEdit } from "../utils/constants.js"


initiateValidation();

initialCard.renderItems();

export const profileFormEdit = new PopupWithForm ("edit", handleSubmitProfile);

export const addCardForm = new PopupWithForm ("gallery", handleSubmitCard);

export const lightbox = new PopupWithImage ("popup");

export const userProfile = new UserInfo ();

(function documentEventListeners () {
  editButton.addEventListener("click", ()=>{
    profileFormEdit.open();
  });

  addButton.addEventListener("click", ()=>{
    addCardForm.open();
  });
})();


const profileImage = document.querySelector(".profile__pic");
profileImage.src = profileSrc;
const aroundImage = document.querySelector(".header__logo");
aroundImage.src = aroundSrc;
const underlineImage = document.querySelector(".header__line");
underlineImage.src = underlineSrc;