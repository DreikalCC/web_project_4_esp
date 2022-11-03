export default class Api {
  constructor({baseUrl, headers}){
    this.baseUrl = baseUrl;
    this.headers = headers;
    this.auth = this.headers.authorization;
    //this.cards = this.getInitialCards();
  }

  /*async getInitialCards () {
    try{
      const res = await fetch(`${this.baseUrl}/users/me`);
      const data = await res.json();
      return data;
    }catch(err){
      console.log(`Error getting user data: ${res.status},
      ${res.statusText}`);
    }
  }*/
  getInitialCards () {
    return fetch(`${this.baseUrl}/cards`, {
      headers: {
        authorization: this.auth
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error getting user data: ${res.status},
        ${res.statusText}`);
      })
      .catch((err)=>{console.log(err)})
  }

  getUserInfo (){
    return fetch(`${this.baseUrl}/users/me`, {
      headers: {
        authorization: this.auth
      }
    })
    .then(res => res.json())
    .catch((err)=>{console.log(err)})
  }

  postUserInfo(name, about){
    console.log(name, about)
    fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
    .catch((err)=>{console.log(err)})
  }

  postUserAvatar(link){
    console.log(link)
    fetch(`${this.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        avatar: link
      })
    })
    .catch((err)=>{console.log(err)})
  }

  postCard({name,link}){
    console.log(name, link)
    fetch(`${this.baseUrl}/cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
    .catch((err)=>{console.log(err)})
  }

  postLikes(cardId){
    fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: this.headers,
      body: JSON.stringify({})
    })
    .catch((err)=>{console.log(err)})
  }

  deleteLikes(cardId){
    fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this.headers,
      body: JSON.stringify({})
    })
    .catch((err)=>{console.log(err)})
  }

  deleteCard({cardId}){
    fetch(`${this.baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this.headers,
      body: JSON.stringify({})
    })
    .catch((err)=>{console.log(err)})
  }
}