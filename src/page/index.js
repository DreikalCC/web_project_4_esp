import "./index.css";
import profileSrc from "../images/jack.jpg";
import underlineSrc from "../images/Line.png";
import aroundSrc from "../images/Vector.png";

import Api from "../components/Api.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import {settings ,cardTemplate, editButton, addButton, avatarButton, newName, newDesc, person, about, profileAvatar } from "../utils/constants.js"


const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_cohort_02",
  headers: {
    authorization: "04346056-dea4-4d40-8541-43203e80bf1a",
    "Content-Type": "application/json"
  }
});

let cardSection = {};

Promise.all([api.getUserInfo(),api.getInitialCards()])
.then(([{name,about,_id,avatar},cards])=>{
  userProfile.setAvatar(avatar)
  userProfile.setUserInfo(name,about,_id)

  cardSection = new Section ({
    data: cards,
    renderer: (data) => {
      data.user = userProfile._id;
      const cardElement = createCard(data);
      cardSection.setItem(cardElement);
    }
  },
  ".elements"
  );
  cardSection.renderItems()
})
.catch((err)=>{console.log(err)})





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
  api.postCard(info)
  .then((res)=>{
    res.owner = userProfile.getUserInfo();
    res.user = res.owner._id;
    res.likes = [];
    const cardElement = createCard(res);
    cardSection.setItem(cardElement);
    addCardForm.close();
  })
  .catch((err)=>{console.log(err)})
  .finally(()=>{
    formValidators['gallery'].resetValidation();
    addCardForm.loading();}
  )
}

export const handleSubmitProfile = ({name,about}) =>{
  profileFormEdit.loading('loading');
  api.postUserInfo(name, about)
  .then(({name,about,_id})=>{
    userProfile.setUserInfo(name, about,_id);
    profileFormEdit.close();})
  .catch((err)=>{console.log(err)})
  .finally(()=>{
    formValidators['edit'].resetValidation();
    profileFormEdit.loading();
  })
};

export const handleSubmitAvatar = ({link}) =>{
  avatarFormEdit.loading('loading');
  api.postUserAvatar(link)
  .then((res)=>{userProfile.setAvatar(res.avatar)
  avatarFormEdit.close();})
  .catch((err)=>{console.log(err)})
  .finally(()=>{
    formValidators['avatar'].resetValidation();
    avatarFormEdit.loading();
  })
};

export const handleErase = ()=>{
  confirmErase.loading('loading');
  api.deleteCard(confirmErase.selected)
  .then(()=>{card.eraseTheCard(confirmErase.selected);
    confirmErase.close();})
  .catch((err)=>{console.log(err)})
  .finally(()=>{
    confirmErase.loading();
  })
};

export const handleLike =({cardId,button}) => {
  api.postLikes(cardId)
  .then((res)=>{
    card.likeTheCard(button)
    const newLikes = res.likes.length;
    card.newLikeNumber(button, newLikes);
  })
  .catch((err)=>{console.log(err)})
};

export const handleDislike =({cardId,button}) => {
  api.deleteLikes(cardId)
  .then((res)=>{
    card.dislikeTheCard(button)
    const newLikes = res.likes.length;
    card.newLikeNumber(button, newLikes);
  })
  .catch((err)=>{console.log(err)})
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

export const confirmErase = new PopupWithConfirmation ("eraser", handleErase);

export const userProfile = new UserInfo (person.textContent, about.textContent, profileAvatar);

(function documentEventListeners () {
  editButton.addEventListener("click", (evt)=>{
    const userInfo = userProfile.getUserInfo();
    newName.value = userInfo.name;
    newDesc.value = userInfo.job;
    formValidators['edit'].resetValidation();
    profileFormEdit.open(evt);
  });

  avatarButton.addEventListener("click", (evt)=>{
    formValidators['avatar'].resetValidation();
    avatarFormEdit.open(evt);
  })

  addButton.addEventListener("click", (evt)=>{
    formValidators['gallery'].resetValidation();
    addCardForm.open(evt);
  });
})();