import "./index.css";
import profileSrc from "../images/jack.jpg";
import underlineSrc from "../images/Line.png";
import aroundSrc from "../images/Vector.png";

import Api from "../components/Api.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import {settings ,cardTemplate, editButton, addButton, avatarButton, newName, newDesc, person, desc, cardArea, initialCards } from "../utils/constants.js"




const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_cohort_02",
  headers: {
    authorization: "04346056-dea4-4d40-8541-43203e80bf1a",
    "Content-Type": "application/json"
  }
});

let initialCard = {};

Promise.all([api.getUserInfo(),api.getInitialCards()])
.then(([{name,about,_id,avatar},cards])=>{
  userProfile.setAvatar(avatar)
  userProfile.setUserInfo(name,about,_id)
  userProfile.getUserInfo();

  initialCard = new Section ({
    data: cards,
    renderer: (data) => {
      data.user = userProfile._id;
      const cardElement = createCard(data);
      initialCard.setItem(cardElement);
    }
  },
  ".elements"
  );
  initialCard.renderItems()
})





const formValidators = {};

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

export const handleSubmitCard = (info)=>{
  addCardForm.loading('loading');
  info.owner = userProfile.getUserInfo();
  info.user = info.owner._id;
  info.likes = [];
  const cardElement = createCard(info);
  initialCard.setItem(cardElement);
  api.postCard(info);
  setTimeout((()=>{
    addCardForm.close();
    addCardForm.loading();
  }),500);
}

export const handleSubmitProfile = ({name, desc}) =>{
  profileFormEdit.loading('loading');
  api.postUserInfo(name, desc);
  userProfile.setUserInfo(name, desc);
  formValidators['edit'].resetValidation();
  setTimeout((()=>{
    profileFormEdit.close();
    profileFormEdit.loading();
  }),500);
};

export const handleSubmitAvatar = ({link}) =>{

  avatarFormEdit.loading('loading');
  api.postUserAvatar(link);
  userProfile.setAvatar(link);
  setTimeout((()=>{
    avatarFormEdit.close();
    avatarFormEdit.loading();
  }),500);
};

export const handleErase = ()=>{
  confirmErase.loading('loading');
  api.deleteCard(confirmErase.selected);
  card._eraseTheCard(confirmErase.selected);
  setTimeout((()=>{
    confirmErase.close();
    confirmErase.loading();
  }),500);
};

export const handleLike =(cardId) => {
  api.postLikes(cardId);
};

export const handleDislike =(cardId) => {
  api.deleteLikes(cardId);
};


let card;

export const createCard = (data) => {
   card = new Card ({
    name: data.name,
    link:data.link,
    id:data._id,
    owner:data.owner,
    likes:data.likes,
    template:cardTemplate,
    user:data.user,
    imageOpener:(evt)=>{lightbox.open(evt)},
    eraserOpener:(evt)=>{confirmErase.open(evt)},
    handleLike:(evt)=>{handleLike(evt)},
    handleDislike:(evt)=>{handleDislike(evt)}
  })
  const cardElement = card.createCardElement();
  return cardElement;
}

export const lightbox = new PopupWithImage ("popup");

export const addCardForm = new PopupWithForm ("gallery", handleSubmitCard);

export const profileFormEdit = new PopupWithForm ("edit", handleSubmitProfile);

export const avatarFormEdit = new PopupWithForm ("avatar", handleSubmitAvatar);

export const confirmErase = new PopupWithForm ("eraser", handleErase);

export const userProfile = new UserInfo (person.textContent, desc.textContent);

(function documentEventListeners () {
  editButton.addEventListener("click", (evt)=>{
    const userInfo = userProfile.getUserInfo();
    //const button = evt.target.id;
    newName.value = userInfo.name;
    newDesc.value = userInfo.job;
    formValidators['edit'].resetValidation();
    profileFormEdit.open(evt);
  });

  avatarButton.addEventListener("click", (evt)=>{
    //const button = evt.target.id;
    formValidators['avatar'].resetValidation();
    avatarFormEdit.open(evt);
  })

  addButton.addEventListener("click", (evt)=>{
    //const button = evt.target.id;
    formValidators['gallery'].resetValidation();
    addCardForm.open(evt);
  });
})();