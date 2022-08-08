const person = document.querySelector(".profile__name");
const desc = document.querySelector(".profile__description");
const cardContainer = document.querySelector(".elements");

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeButton = document.querySelector('.edit__close');
const closeGallery = document.querySelector('.edit__close_gallery');
const submitButton = document.querySelector(".input__submit-btn");
const submitGallery = document.querySelector(".input__submit-btn_gallery");
//const deleteButton = document.querySelectorAll(".element__erase");

const profileEditor = document.querySelector(".edit");
const galleryEditor = document.querySelector(".edit_gallery");


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








//       https://scontent-ort2-2.xx.fbcdn.net/v/t1.6435-9/54463041_2078582752179447_3010843761795137536_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Wgv6p0gkNZsAX_rq1hx&_nc_ht=scontent-ort2-2.xx&oh=00_AT-qeUhykt1rz2PbHCM0WIQeybRb_FwZYA5_Q3YGFH1u0w&oe=631177E4


editButton.addEventListener("click", editProfile);
closeButton.addEventListener("click", editProfile);

submitButton.addEventListener("click", profileData);


addButton.addEventListener("click", addPlace);
closeGallery.addEventListener("click", addPlace);

submitGallery.addEventListener("click", addCard);







function editProfile (){
  profileEditor.classList.toggle("edit_active");
}

function addPlace (){
  galleryEditor.classList.toggle("gallery_active");
}

function profileData (){
  const newName = document.querySelector(".input__name");
  const newDesc = document.querySelector(".input__description");

  editProfile();

  person.textContent = newName.value;
  desc.textContent = newDesc.value;

  // submitButton.preventDefault;
};







for (i = 0; i < initialCards.length; i++){
  const cardTemplate = document.querySelector("#card").content;
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);


  cardElement.querySelector(".element__location").textContent = initialCards[i]["nombre"];
  cardElement.querySelector(".element__image").src = initialCards[i]["link"];
  cardElement.querySelector(".element__like").addEventListener("click", function (evt) {
    evt.target.classList.toggle("element__liked");

  });
  cardContainer.prepend(cardElement);
};




function addCard (){
  const cardTemplate = document.querySelector("#card").content;
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);

  cardElement.querySelector(".element__location").textContent = document.querySelector(".input__name_gallery").value;
  cardElement.querySelector(".element__image").src = document.querySelector(".input__description_gallery").value;
  cardElement.querySelector(".element__like").addEventListener("click", function (evt) {
    evt.target.classList.toggle("element__liked");
  });


  cardContainer.prepend(cardElement);
}






const deleteButton = document.querySelectorAll(".element__erase");

for (let i=0; i<deleteButton.length; i++){
  deleteButton[i].addEventListener("click", ()=>{
    deleteButton[i].closest.remove(".element");
  })
}




