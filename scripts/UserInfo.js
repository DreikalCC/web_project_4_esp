import { person, desc } from "./utils.js  ";

export default class UserInfo {
  constructor(name, job){
    this.name = name;
    this.job = job;
  }

  getUserInfo () {
    const userInfo = {
      name : this.name,
      job : this.job,
    }
    return userInfo
  }
  setUserInfo () {
    //const person = document.querySelector(".profile__name");
    //const desc = document.querySelector(".profile__description");
    //profileEditor.querySelector(".input__name").textContent = this.name;
    //profileEditor.querySelector(".input__description").textContent = this.job;

    person.textContent = this.name;
    desc.textContent = this.job;
  }
}