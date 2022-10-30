export const editButton = document.querySelector('.profile__edit-button');
export const addButton = document.querySelector('.profile__add-button');

export const newName = document.querySelector(".input__name");
export const newDesc = document.querySelector(".input__description");

export const person = document.querySelector(".profile__name");
export const desc = document.querySelector(".profile__description");

export const cardTemplate = document.querySelector("#card").content;
export const cardArea = document.querySelector(".elements");

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

