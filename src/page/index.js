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
import {settings ,cardTemplate, editButton, addButton, avatarButton, newName, newDesc, person, desc, cardArea } from "../utils/constants.js"




const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_cohort_02",
  headers: {
    authorization: "04346056-dea4-4d40-8541-43203e80bf1a",
    "Content-Type": "application/json"
  }
});


/*const profileImage = document.querySelector(".profile__pic");
profileImage.src = profileSrc;
const aroundImage = document.querySelector(".header__logo");
aroundImage.src = aroundSrc;
const underlineImage = document.querySelector(".header__line");
underlineImage.src = underlineSrc;*/


/*
function loadData(){
};
loadData();
*/

const getUserData = ()=> {
  api.getUserInfo().then(({name,about,_id, avatar})=>{
  userProfile.setUserInfo(name,about,_id,avatar)
  userProfile.getUserInfo();
  console.log(userProfile)
  //return user;

});
}

//userProfile.setUserInfo(user)
  //console.log()

getUserData();

//console.log(userProfile)
let cardList = {};


const getCards =  () => {
api.getInitialCards()
.then((res)=>{
  console.log(res)
  const initialCard = new Section ({
    data: res,
    renderer: (data) => {
      const cardElement = createCard(data);
      initialCard.setItem(cardElement);
      cardList = cardElement;

    }
  },
  ".elements"
  );
  initialCard.renderItems()
  //cardList = initialCard;
  //
});
}
getCards();



const disableEraser = Promise.all([getUserData,getCards])


/*
function disableEraser (){
   getUserData()
   .then(()=>{getCards()
    const cardList = document.querySelectorAll(".element__image");
    console.log(cardList)
    cardList.forEach((card)=>{
      console.log(card)
      if(userProfile._id !== card._id)
      document.querySelector(".element__erase").disable;
  })
   .then(()=>{
    const cardList = document.querySelectorAll(".element")
    console.log(cardList)
    cardList.forEach((card)=>{
      console.log(card)
      if(userProfile._id !== card._id)
      document.querySelector(".element__erase").disable;
    })
  })

}
disableEraser();



*/



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

//console.log(formValidators)

export const handleSubmitCard = (info)=>{
  info.owner = userProfile;
  info.likes = [];
  console.log(getCards);
  const cardElement = createCard(info);
  initialCard.setItem(cardElement);

console.log(info)
  api.postCard(info)/*.then((data)=>{
    const cardElement = createCard(data);
    console.log(this)
    cardArea.prepend(cardElement);
  })

  addCardForm.close();*/
}

export const handleSubmitProfile = ({name, desc}) =>{
  api.postUserInfo(name, desc)
  userProfile.setUserInfo(name, desc);
  profileFormEdit.close();
};

export const handleSubmitAvatar = (url) =>{
  console.log(url)
  api.postUserAvatar(url);
  userProfile.setAvatar(url);
  avatarFormEdit.close();
};

export const lightbox = new PopupWithImage ("popup");

export const createCard = (data) => {
  const card = new Card ({name: data.name,
    link:data.link,
    id:data._id,
    owner:data.owner,
    likes:data.likes,
    template:cardTemplate,
    imageOpener:(evt)=>{lightbox.open(evt)}});
  const cardElement = card.createCardElement();
  return cardElement;
}


export const addCardForm = new PopupWithForm ("gallery", handleSubmitCard);

export const profileFormEdit = new PopupWithForm ("edit", handleSubmitProfile);

export const avatarFormEdit = new PopupWithForm ("avatar", handleSubmitAvatar);

export const userProfile = new UserInfo (person.textContent, desc.textContent);

(function documentEventListeners () {
  editButton.addEventListener("click", ()=>{
    const userInfo = userProfile.getUserInfo();
    console.log(userInfo)
    newName.value = userInfo.name;
    newDesc.value = userInfo.job;
    formValidators['profile'].resetValidation();
    profileFormEdit.open();
  });

  avatarButton.addEventListener("click", ()=>{
    formValidators['avatar'].resetValidation();
    avatarFormEdit.open();
  })

  addButton.addEventListener("click", ()=>{
    formValidators['gallery'].resetValidation();
    addCardForm.open();
  });
})();
/*
const profileImage = document.querySelector(".profile__pic");
profileImage.src = profileSrc;
const aroundImage = document.querySelector(".header__logo");
aroundImage.src = aroundSrc;
const underlineImage = document.querySelector(".header__line");
underlineImage.src = underlineSrc;*/