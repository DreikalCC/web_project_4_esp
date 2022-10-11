import {Card} from "./components/Card.js";
import {FormValidator} from "./components/FormValidator.js";
import {Popup} from "./components/Popup.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import UserInfo from "./components/UserInfo.js";
import Section from "./components/Section.js";
import {editButton, addButton, closeButton, closeGallery, submitGallery, submitProfileButton, closePopup, profileEditor,
  galleryEditor, documentEventListeners, newDesc, newName, popScreen, person, desc, initialCards,
  handleSubmitCard, handleSubmitProfile, galleryEdit, profileEdit} from "./utils/utils.js";

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

export const addCardForm = new PopupWithForm ("gallery", handleSubmitCard);

export const lightbox = new PopupWithImage ("popup");
lightbox.setEvenListeners();

documentEventListeners ();