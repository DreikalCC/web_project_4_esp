import {Card} from "./Card.js";
import {FormValidator} from "./FormValidator.js";
import {editButton, addButton, closeButton, closeGallery, submitGallery, submitProfileButton, closePopup, profileEditor, galleryEditor, documentEventListeners, editProfile, createPlaceForm, closeProfileEdit, closeGalleryEdit, changeProfileData, createNewCardInfo, newDesc, newName, popScreen, closeCardView, person, desc, profileInputs, galleryInputs} from "./utils.js";

(function initiateValidation () {
const formList = Array.from(document.querySelectorAll(".edit__form"));
const inputList = Array.from(document.querySelectorAll(".input__form"));
const validator = new FormValidator (formList, inputList);
})();

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

documentEventListeners ();

(function createInitialCards (){
  initialCards.forEach( (data) => {const card = new Card (data)} )
})();
