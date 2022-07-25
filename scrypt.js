let person = document.querySelector(".profile__name");
let desc = document.querySelector("profile__description");

let editButton = document.querySelector('.profile__edit-button');
//let addButton = document.querySelector('.profile__add-button');
let closeButton = document.querySelector('.edit__close')
let likeButton = document.querySelectorAll(".element__like")
let submitButton = document.querySelector(".input__submit-btn")

let profileEditor = document.querySelector(".edit")


function editProfile (){
    profileEditor.classList.toggle("edit_active");
}

function liking (){
    if (liking.target.matches(".element__like")){
    likeButton.classList.toggle("element__liked");
    }
    
}

function profileData (){
    let newName = document.querySelector(".input__name");
    let newDesc = document.querySelector(".input__description");

    editProfile();
    
    person.textContent = newName.value;
    desc.textContent = newDesc.value;
    
}


editButton.addEventListener("click", editProfile);
closeButton.addEventListener("click", editProfile);
submitButton.addEventListener("click", profileData);
likeButton.addEventListener("click", liking);