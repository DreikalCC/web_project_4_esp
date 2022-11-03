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
import {settings ,cardTemplate, editButton, addButton, avatarButton, newName, newDesc, person, about, cardArea, initialCards } from "../utils/constants.js"


const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_cohort_02",
  headers: {
    authorization: "04346056-dea4-4d40-8541-43203e80bf1a",
    "Content-Type": "application/json"
  }
});

let initialCard = {};

Promise.all([api.getUserInfo(),api.getInitialCards()])
.then(([{name,about,_id,avatar},cards])=>{console.log()
  userProfile.setAvatar(avatar)
  userProfile.setUserInfo(name,about,_id)

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
  initialCard.setItem(cardElement);})
  .catch((err)=>{console.log(err)})
  .finally(()=>{
    formValidators['gallery'].resetValidation();
    addCardForm.close();
    addCardForm.loading();}
  )
}

export const handleSubmitProfile = ({name,about}) =>{
  console.log(name,about);
  profileFormEdit.loading('loading');
  api.postUserInfo(name, about)
  .then(({name,about,_id})=>{
    userProfile.setUserInfo(name, about,_id)})
  .catch((err)=>{console.log(err)})
  .finally(()=>{
    formValidators['edit'].resetValidation();
    profileFormEdit.close();
    profileFormEdit.loading();
  })
};

export const handleSubmitAvatar = ({link}) =>{
  avatarFormEdit.loading('loading');
  api.postUserAvatar(link)
  .then(()=>{userProfile.setAvatar({link})})
  .catch((err)=>{console.log(err)})
  .finally(()=>{
    formValidators['avatar'].resetValidation();
    avatarFormEdit.close();
    avatarFormEdit.loading();
  })
};

export const handleErase = ()=>{
  confirmErase.loading('loading');
  api.deleteCard(confirmErase.selected)
  .then(()=>{card._eraseTheCard(confirmErase.selected);})
  .catch((err)=>{console.log(err)})
  .finally(()=>{
    formValidators['eraser']
    confirmErase.close();
    confirmErase.loading();
  })




};

export const handleLike =(cardId) => {
  api.postLikes(cardId)
  .catch((err)=>{console.log(err)})

};

export const handleDislike =(cardId) => {
  api.deleteLikes(cardId)
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

export const confirmErase = new PopupWithForm ("eraser", handleErase);

export const userProfile = new UserInfo (person.textContent, about.textContent);

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