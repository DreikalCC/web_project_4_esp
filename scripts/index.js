import {Card} from "./Card.js";
import {FormValidator} from "./FormValidator.js";
import {Popup} from "./Popup.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import UserInfo from "./UserInfo.js";
import Section from "./Section.js";
import {editButton, addButton, closeButton, closeGallery, submitGallery, submitProfileButton, closePopup, profileEditor,
  galleryEditor, documentEventListeners, /*editProfile, createPlaceForm,*/ /*closeProfileEdit, closeGalleryEdit, changeProfileData,*/
  /*createNewCardInfo,*/ newDesc, newName, popScreen, /*closeCardView,*/ person, desc, /*profileInputs, galleryInputs,*/ initialCards,
  handleSubmitCard, handleSubmitProfile, galleryEdit, profileEdit} from "./utils.js";

(function initiateValidation () {
const formList = Array.from(document.querySelectorAll(".edit__form"));
const inputList = Array.from(document.querySelectorAll(".input__form"));
const validator = new FormValidator (formList, inputList);
})();


const initialCard = new Section ({
  data: initialCards,
  renderer: (data) => {
    const card = new Card(data)

    const cardElement = card.createCardElement();

    initialCard.setItem(cardElement);
  }
},
".elements"
);

initialCard.renderItems();

export const profileFormEdit = new PopupWithForm ("edit", handleSubmitProfile);
//profileFormEdit.open();

export const addCardForm = new PopupWithForm ("gallery", handleSubmitCard);
//addCardForm.open();

export const lightbox = new PopupWithImage ("popup");
//console.log(lightbox);
lightbox.setEvenListeners();

//const userData = new UserInfo (person, desc);

documentEventListeners ();