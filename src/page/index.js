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
import {settings ,cardTemplate, editButton, addButton, initialCards, newName, newDesc, person, desc, cardArea } from "../utils/constants.js"




const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_cohort_02",
  headers: {
    authorization: "04346056-dea4-4d40-8541-43203e80bf1a",
    "Content-Type": "application/json"
  }
});



/*
function loadData(){
};
loadData();
*/



api.getUserInfo().then(({name,about})=>{
  userProfile.setUserInfo(name,about)
});

api.getInitialCards()
.then((res)=>{
  console.log(res)
  const initialCard = new Section ({
    data: res,
    renderer: (data) => {
      const cardElement = createCard(data);
      initialCard.setItem(cardElement);
    }
  },
  ".elements"
  );
  initialCard.renderItems()
});



const formValidators = {}

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
  /*console.log(info);
  const cardElement = createCard(info);
  initialCard.setItem(cardElement);
*/
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

export const lightbox = new PopupWithImage ("popup");

export const createCard = (data) => {
  const card = new Card ({name: data.name,
    link:data.link,
    id:data.owner,
    likes:data.likes,
    template:cardTemplate,
    imageOpener:(evt)=>{lightbox.open(evt)}});
  const cardElement = card.createCardElement();
  return cardElement;
}


export const addCardForm = new PopupWithForm ("gallery", handleSubmitCard);

export const profileFormEdit = new PopupWithForm ("edit", handleSubmitProfile);

export const userProfile = new UserInfo (person, desc);

(function documentEventListeners () {
  editButton.addEventListener("click", ()=>{
    const userInfo = userProfile.getUserInfo();
    newName.value = userInfo.name;
    newDesc.value = userInfo.job;
    formValidators['profile'].resetValidation();
    profileFormEdit.open();
  });

  addButton.addEventListener("click", ()=>{
    formValidators['gallery'].resetValidation();
    addCardForm.open();
  });
})();

const profileImage = document.querySelector(".profile__pic");
profileImage.src = profileSrc;
const aroundImage = document.querySelector(".header__logo");
aroundImage.src = aroundSrc;
const underlineImage = document.querySelector(".header__line");
underlineImage.src = underlineSrc;