import {Card} from "./Card.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";

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
export const person = document.querySelector(".profile__name");
export const desc = document.querySelector(".profile__description");
export const profileInputs = profileEditor.querySelectorAll('input');
export const galleryInputs = galleryEditor.querySelectorAll('input');
export const newCard = [{nombre: "",
  link: ""}
];
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

  //editButton.addEventListener("click", editProfile);
  editButton.addEventListener("click", ()=>{
    const profile = new PopupWithForm("edit", )
  });


  //closeButton.addEventListener("click", closeProfileEdit);

  //submitProfileButton.addEventListener("click", changeProfileData);
  submitProfileButton.addEventListener("click", ()=>{
    const user = new UserInfo (newName.textContent, newDesc.textContent);
    user.setUserInfo();
  });

  addButton.addEventListener("click", createPlaceForm);   // ******
  //closeGallery.addEventListener("click", closeGalleryEdit);

  submitGallery.addEventListener("click", createNewCardInfo);

  //closePopup.addEventListener("click", closeCardView);

  /*document.addEventListener("keydown", function(evt){
    if (evt.key == "Escape" && profileEditor.classList.contains("edit_active")){
      closeProfileEdit();
    }
    if (evt.key == "Escape" && galleryEditor.classList.contains("gallery_active")){
      closeGalleryEdit();
    }
    if (evt.key == "Escape" && popScreen.classList.contains("popup_active")){
      closeCardView();
    }
  })*/

  document.addEventListener("keydown", function(evt){
    if (evt.key == "Enter" && profileEditor.classList.contains("edit_active")){
      changeProfileData();
    }
    if (evt.key == "Enter" && galleryEditor.classList.contains("gallery_active")){
      createNewCardInfo();
    }
  })

/*
  document.addEventListener("click", function(evt){
    if ((evt.target.closest(".edit__overlay")) && profileEditor.classList.contains("edit_active")){
      closeProfileEdit();
    }
    if ((evt.target.closest(".edit__overlay")) && galleryEditor.classList.contains("gallery_active")){
      closeGalleryEdit();
    }
    if ((evt.target.closest(".popup__overlay")) && popScreen.classList.contains("popup_active")){
      closeCardView();
    }
  })*/
}

/*
export function editProfile (){
  profileEditor.classList.toggle("edit_active");
}

export function createPlaceForm (){
  galleryEditor.classList.toggle("gallery_active");
}
*/

export function closeProfileEdit (){
  profileInputs.forEach(input => input.value ='');
  editProfile();
}

export function closeGalleryEdit (){
  galleryInputs.forEach(input => input.value ='');
  createPlaceForm();
}
/*
export function changeProfileData (){

  profileEditor.querySelector(".input__name").textContent = newName.value;
  profileEditor.querySelector(".input__description").textContent = newDesc.value;

  person.textContent = newName.value;
  desc.textContent = newDesc.value;

  editProfile();
}*/

export function createNewCardInfo (){
  newCard["nombre"] = document.querySelector(".input__name_gallery").value;
  newCard["link"]= document.querySelector(".input__description_gallery").value;
  const card = new Card(newCard);
}
/*
export function closeCardView (){
  popScreen.classList.remove("popup_active");
}*/
