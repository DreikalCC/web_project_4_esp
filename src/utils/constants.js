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
export const cardTemplate = document.querySelector("#card").content;

export const settings = {
  submitButton: ".edit__submit-btn",
  submitButtonDisabled: "edit__submit-btn_inactive",
  inputSelector: ".input__form",
  errorArea: "input__form_type-error",
  errorActive: "input__form-error_active"
};

export const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Montañas Calvas",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

