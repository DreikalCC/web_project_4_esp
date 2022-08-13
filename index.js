const person = document.querySelector(".profile__name");
const desc = document.querySelector(".profile__description");
const cardContainer = document.querySelector(".elements");

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeButton = document.querySelector('.edit__close');
const closeGallery = document.querySelector('.edit__close_gallery');
const submitProfileButton = document.querySelector(".edit__submit-btn");
const submitGallery = document.querySelector(".edit__submit-btn_create-card");

const profileEditor = document.querySelector(".edit");
const galleryEditor = document.querySelector(".edit_gallery");
const popScreen = document.querySelector(".popup");
const closePopup = document.querySelector(".popup__close");

const newName = document.querySelector(".input__name");
const newDesc = document.querySelector(".input__description");


const profileInputs = profileEditor.querySelectorAll('input');
const galleryInputs = galleryEditor.querySelectorAll('input');

const cardNameInput = document.querySelector(".input__name_gallery").value;
const cardLinkInput = document.querySelector(".input__description_gallery").value;

const newCard = [{nombre: "",
link: ""}];

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


editButton.addEventListener("click", editProfile);
closeButton.addEventListener("click", closeProfileEdit);

submitProfileButton.addEventListener("click", changeProfileData);


addButton.addEventListener("click", addPlaceForm);
closeGallery.addEventListener("click", closeGalleryEdit);

submitGallery.addEventListener("click", newCardInfo);

closePopup.addEventListener("click", closeCardView);


function editProfile (){
  profileEditor.classList.toggle("edit_active");
}

function addPlaceForm (){
  galleryEditor.classList.toggle("gallery_active");
}

function closeProfileEdit (){
  profileInputs.forEach(input => input.value ='');
  editProfile();
}

function closeGalleryEdit (){
  galleryInputs.forEach(input => input.value ='');
  addPlaceForm();
}

function changeProfileData (){

  profileEditor.querySelector(".input__name").placeholder = newName.value;
  profileEditor.querySelector(".input__description").placeholder = newDesc.value;

  person.textContent = newName.value;
  desc.textContent = newDesc.value;

  editProfile();
}

function newCardInfo (){
newCard["nombre"] = document.querySelector(".input__name_gallery").value;
newCard["link"]= document.querySelector(".input__description_gallery").value;
createCardElement(newCard);
}

function createCardElement ({nombre, link}){
  const card = document.createElement('div');
  card.classList.add('element');

  const cardPic = document.createElement('img');
  cardPic.classList.add('element__image');
  cardPic.src = link;
  cardPic.alt = nombre;

  const eraseButton = document.createElement('button');
  eraseButton.classList.add('element__erase');

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('element__group');

  const cardName = document.createElement('h3');
  cardName.classList.add('element__location');
  cardName.textContent = nombre;

  const likeButton = document.createElement('button');
  likeButton.classList.add('element__like');

  cardInfo.append(cardName, likeButton);

  card.append(cardPic, eraseButton, cardInfo);

  cardContainer.prepend(card);
  closeGalleryEdit ();

  document.querySelectorAll(".element__like").forEach(button => button.addEventListener("click", likeTheCard));

  document.querySelectorAll(".element__image").forEach(img => img.addEventListener("click", viewTheCard));

  document.querySelectorAll(".element__erase").forEach(button => button.addEventListener("click", eraseTheCard));

}

function likeTheCard (evt){
  const likeButton = evt.currentTarget;
  likeButton.classList.toggle("element__liked");
}

function viewTheCard (evt){
  const image = evt.currentTarget;
  popScreen.classList.toggle("popup__active");
  popScreen.querySelector(".popup__image").src = image.getAttribute("src");
  popScreen.querySelector(".popup__image").alt = image.getAttribute("alt");
  popScreen.querySelector(".popup__name").textContent = image.getAttribute("alt");
}
function eraseTheCard (evt){
  const eraseButton = evt.currentTarget;
  this.removeEventListener("click", likeTheCard);
  this.removeEventListener("click", viewTheCard);
  this.removeEventListener("click", eraseTheCard);
  eraseButton.closest(".element").remove();
}

function createInitialCards (){
  for (i=0;i < initialCards.length;i++){
  createCardElement(initialCards[i]);
}}

createInitialCards();

document.addEventListener("keydown", function(evt){
  if (evt.key == "Escape" && profileEditor.classList.contains("edit_active")){
    closeProfileEdit();
  }
  if (evt.key == "Escape" && galleryEditor.classList.contains("gallery_active")){
    closeGalleryEdit();
  }
})

document.addEventListener("keydown", function(evt){
  if (evt.key == "Enter" && profileEditor.classList.contains("edit_active")){
    changeProfileData();
  }
  if (evt.key == "Enter" && galleryEditor.classList.contains("gallery_active")){
    newCardInfo();
  }
})

function closeCardView (){
  popScreen.classList.toggle("popup__active");
}