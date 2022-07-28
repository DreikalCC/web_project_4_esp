const person = document.querySelector(".profile__name");
const desc = document.querySelector(".profile__description");

const editButton = document.querySelector('.profile__edit-button');
//const addButton = document.querySelector('.profile__add-button');
const closeButton = document.querySelector('.edit__close')
//const likeButton = document.querySelectorAll(".element__like")
const submitButton = document.querySelector(".input__submit-btn")

const profileEditor = document.querySelector(".edit")


function editProfile (){
  profileEditor.classList.toggle("edit__active");
}

//function liking (){
//  likeButton.classList.toggle("element__liked");
//}

function profileData (){
  const newName = document.querySelector(".input__name");
  const newDesc = document.querySelector(".input__description");

  editProfile();

  person.textContent = newName.value;
  desc.textContent = newDesc.value;
}




editButton.addEventListener("click", editProfile);
closeButton.addEventListener("click", editProfile);
submitButton.addEventListener("click", profileData);
//likeButton.addEventListener("click", liking);